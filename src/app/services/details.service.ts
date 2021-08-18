import { Injectable } from '@angular/core';
import { SignUpPage } from '../pages/sign-up/sign-up.page';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  FullName: string = '';
  nameArray: string[] = [];
  FirstName: string = '';

  constructor(private signUpPage: SignUpPage) { 
    this.signUpPage.fullName = this.FullName;
    this.nameArray = this.FullName.split(' ');

    this.FirstName = this.nameArray[0];
  }

}
