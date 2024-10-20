import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test2-forms',
  templateUrl: './test2-forms.component.html',
  styleUrls: ['./test2-forms.component.scss']
})
export class Test2FormsComponent {

  @ViewChild('form') form: NgForm;
  defaultQuestion: string = 'teacher';
  answer: string = '';
  genders = ['male', 'female', 'other'];
  secretValue = ['pet', 'teacher'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    secret: '',
    gender: '',
  };
  suggestUserName() {
    const suggestedName = 'Superuser';
    //this.form.setValue({
    //  userData: {
    //    username: suggestedName,
    //    email: ''
    //  },
    //  secret: 'pet',
    //  questionAnswer: '',
    //  gender: 'male'
    //});

    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

  }
  submited = false;
  onSubmit() {
    this.submited = true;
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secretQuestion = this.form.value.secret;
    this.user.answer = this.form.value.questionAnswer;
    this.user.gender = this.form.value.gender;

    this.form.reset();
  }

}
