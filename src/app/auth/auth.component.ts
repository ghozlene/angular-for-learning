import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";



@Component({
  selector: 'app-auth',
  styleUrls: ['./auth.component.css'],
  templateUrl: './auth.component.html',


})
export class AuthComponent implements OnInit {


  isLoginMode = true;
  isLoading = false;

  error: string = "";
  constructor(private authService: AuthService) { }

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
    if (this.isLoginMode) {

      //.....

    } else {
      this.authService.signup(email, password)
        .subscribe(response => {

          console.log(response);
          this.isLoading = false;
        },
          error => {
            this.error = error.error.error.message;
            console.log(error);
            this.isLoading = false;
          }
        ),


        form.reset();
    }
  }
  ngOnInit(): void {

  };

}