import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }
  theme: string = 'white';
  darkMode(){
    if(this.theme=='white'){
      this.theme = 'dark';
      return this.theme;
    }
    else 
      return this.theme
  }

  ngOnInit() {
  }

}
