import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.scss']
})
export class ReactiveFormTestComponent implements OnInit {
  genders = ['male', 'female'];

  forbiddenUserName = ['anna', 'Christine', 'chris'];

  signupForm: FormGroup;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNameValidator.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),

      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });


    this.signupForm.patchValue({
      'userData': {
        'username': 'achref'
      },

    });

  }

  onSubmit() {
    console.log("forms content :", this.signupForm);
  }
  onAddHobbies() {
    const formControl = new FormControl(null, Validators.required);
    (<FormArray> this.signupForm.get('hobbies')).push(formControl);
  }

  forbiddenNameValidator(control: FormControl): { [s: string]: boolean; } | null {

    if (this.forbiddenUserName.indexOf(control.value) !== -1) {

      return { 'nameIsForbidden': true };
    }
    return null;
  }

}
