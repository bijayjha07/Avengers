import {Component, Optional} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'avenger-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})



export class AvengerAppComponent {
  isDarkTheme: boolean = true;
  lastDialogResult: string;

  rForm: FormGroup;
  lForm: FormGroup;
  post:any;                     // A property for our submitted form
  rePassword:string = '';
  password:string = '';
  firstName:string = '';
  lastName:string = '';
  ntId:string = '';
  email:string = '';
  loginPassword:string='';
  username:string='';

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(14)])],
      'rePassword' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(14)])],
      'fname' : [null, Validators.required],
      'lname' : [null, Validators.required],
      'email' : [null, Validators.required],
      'ntId' : [null, Validators.required]
    });

    this.lForm = fb.group({
      'loginPassword' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(14)])],
      'username' : [null, Validators.required],
    });
  }

  addPost(post) {
    console.log(post);
    this.password = post.password;
    this.rePassword = post.rePassword;
    this.firstName = post.fname;
    this.lastName = post.lname;
    this.email = post.email;
    this.ntId = post.ntId;
  }

}