import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";



@Component({
  selector: 'app-auth',
  styleUrls: ['./auth.component.css'],
  templateUrl: './auth.component.html',


})
export class AuthComponent implements OnInit {


  isLoginMode = true;
  isLoading = false;

  error: string = "";
  constructor(private authService: AuthService, private router: Router) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    //Trying to make the code a bit linear
    let authObservable: Observable<AuthResponseData>;


    if (this.isLoginMode) {

      authObservable = this.authService.login(email, password);

    } else {
      authObservable = this.authService.signup(email, password);
    }

    authObservable.subscribe(response => {

      console.log(response);
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    },
      errorMessage => {

        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      });
    form.reset();
  }
  ngOnInit(): void {

  };

}
