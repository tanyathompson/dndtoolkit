import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm : FormGroup;
  signinForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl('')
    });

    this.signinForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  signUp() {

    let username = this.signupForm.controls.username.value;
    let password = this.signupForm.controls.password.value;
    let email = this.signupForm.controls.email.value;
    let name = this.signupForm.controls.name.value;

    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        name
      },
      validationData: []
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  signIn() {
    let username = this.signinForm.controls.username.value;
    let password = this.signinForm.controls.password.value;

    Auth.signIn(username, password)
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

}
