import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../CustomValidators';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {


  submitted: boolean = false;
  formdata: any;

  item: any = [];
  loginForm: FormGroup;
  useritem: any[]=[];

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(12)]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
      confirm: ['', [Validators.required]]
    }, {
      Validators: MustMatch('password', 'confirm')
    }
    );
    if(localStorage.getItem("item"))
    this.useritem=JSON.parse(localStorage.getItem("item")!)
  }


  get user() {
    return this.loginForm.get('user');
  }
  get phone() {
    return this.loginForm.get('phone');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get address() {
    return this.loginForm.get('address');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get confirm() {
    return this.loginForm.get('confirm');
  }

  submitUser() {
    console.warn(this.loginForm.value)
    if (this.loginForm.valid) {
      let abc=this.loginForm.value
      this.useritem.push(abc);
      localStorage.setItem("item", JSON.stringify(this.useritem))
      this.router.navigate(['./admin/userlist']);
    }

  }



  ngOnInit(): void {

  }

}
