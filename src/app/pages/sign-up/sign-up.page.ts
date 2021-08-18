import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  fullName: string = '';
  signUpForm: FormGroup;

  signUp(){
    this.router.navigate(['main/home'])
    console.log(this.fullName)
  }
  constructor(private router: Router) {
    
   }

  ngOnInit() {
  }

}
