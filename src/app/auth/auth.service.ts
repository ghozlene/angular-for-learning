import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Subject, tap, throwError } from "rxjs";
import { User } from "./user.model";

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

  constructor(private http: HttpClient) { }

  userSubject = new Subject<User>();

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



  private handleAthentication(email: string, userId: string, token: string, expiresIn: number) {


    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    const user = new User(email, userId, token, expirationDate);
    this.userSubject.next(user);
    ;
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

}


