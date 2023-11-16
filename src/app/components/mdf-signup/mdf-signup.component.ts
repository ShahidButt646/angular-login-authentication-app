import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-mdf-signup',
  templateUrl: './mdf-signup.component.html',
  styleUrls: ['./mdf-signup.component.scss'],
})
export class MdfSignupComponent {
  constructor(private _formBuilder: FormBuilder) {}

  // manually creating form model as per the html view
  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  // });

  // usign formbuilder to create form model as per the html view
  registrationForm = this._formBuilder.group({
    userName: ['', Validators.required],
    password: ['', , Validators.required],
    confirmPassword: ['', , Validators.required],
  });

  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'auto pupulated Name',
      password: '123',
      confirmPassword: '123',
    });
  }
}
