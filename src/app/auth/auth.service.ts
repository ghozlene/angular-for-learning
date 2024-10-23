import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

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


  signup(email: string, password: string) {


    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYDPAL8IisNStJqsCXF6vgc_I_Eq4vsDU",
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError));
  };






  login(email: string, password: string) {

    return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYDPAL8IisNStJqsCXF6vgc_I_Eq4vsDU",
      {
        email: email,
        password: password,
        returnSecureToken: true
      }

    ).pipe(catchError(this.handleError));;
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


