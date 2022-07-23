import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../CustomValidators';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditlistComponent implements OnInit {
  
  formlistdata:any;
  item:any;
  useritem:any;
  loginForm: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder) {
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
    if (localStorage.getItem("useritem"))
    this.formlistdata = JSON.parse(localStorage.getItem("useritem")!);
    // this.loginForm.patchValue({
    //   user: this.formlistdata.user,
    //   email: this.formlistdata.email,
    //   phone: this.formlistdata.phone,
    //   address: this.formlistdata.address,
    //   password: this.formlistdata.password,
    //   confirm: this.formlistdata.confirm
    // })
    // this.loginForm.setValue({
    //   user: this.formlistdata.user,
    //   email: this.formlistdata.email,
    //   phone: this.formlistdata.phone,
    //   address: this.formlistdata.address,
    //   password: this.formlistdata.password,
    //   confirm: this.formlistdata.confirm
    // })
    // localStorage.setItem('item', JSON.stringify(this.loginForm.value));
    // localStorage.setItem("item", JSON.stringify(this.useritem))
   }

  ngOnInit(): void {
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

  updatauser()
  {
    console.warn(this.loginForm.value)
    if(this.loginForm.valid){
    this.router.navigate(['./admin/userlist']);
    // localStorage.setItem("item",JSON.stringify(this.loginForm.value))
    localStorage.setItem("item", JSON.stringify(this.useritem))
    }

  }

}
