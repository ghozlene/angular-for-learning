import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Subject, tap, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

export interface AuthResponseData {

  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string;
  registered?: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  userSubject = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any;

  signup(email: string, password: string) {


    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYDPAL8IisNStJqsCXF6vgc_I_Eq4vsDU",
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError), tap((resData: any) => {
        this.handleAthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);

      }));
  };


  autoLogin() {

    let userDataString = localStorage.getItem('userData');
    let userData = userDataString ? JSON.parse(userDataString) : null;

    if (!userData) return;
    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if (loadedUser.token) {

      this.userSubject.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      console.log("this is the expirationDuration :", expirationDuration);
      this.autoLogout(expirationDuration);
    }
  }

  private handleAthentication(email: string, userId: string, token: string, expiresIn: number) {


    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    const user = new User(email, userId, token, expirationDate);
    this.userSubject.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));

  }


  login(email: string, password: string) {

    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYDPAL8IisNStJqsCXF6vgc_I_Eq4vsDU",
      {
        email: email,
        password: password,
        returnSecureToken: true
      }

    ).pipe(catchError(this.handleError), tap((resData: any) => {
      this.handleAthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);

    }));;

  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = "An unknown error occurred";
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'this email already exist';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = "this email does not exist";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "this password is invalid";
        break;
    }
    return throwError(errorMessage);
  }

  logOut() {

    this.userSubject.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }


  autoLogout(expirationDuration: number) {

    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, expirationDuration);

  }
}


