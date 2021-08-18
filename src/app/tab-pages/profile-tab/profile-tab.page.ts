import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.page.html',
  styleUrls: ['./profile-tab.page.scss'],
})
export class ProfileTabPage implements OnInit {
  selections = [
    { name: 'My Profile', icon: 'person-circle-outline', route:'' },
    { name: 'Favourite Sellers', icon: 'heart-outline', route:'' },
    { name: 'Saved Items', icon:'bookmark-outline', route:'' },
    { name: 'Purchase History', icon: 'cart-outline', route:'' },
    { name: 'Settings', icon: 'settings', route:'main/profile/settings'}
  ]

  takeToPage(route){
    this.router.navigate([route])
  }
  colors: string[] = ['var(--ion-color-secondary-shade)', '#669999', '#e085c2', '#707070', 'var(--ion-color-danger-tint)', 'red'];
  selectedCol = '';

  randomColor(i){
    return this.colors[i]
  }
  constructor(private router: Router) { 
    this.selectedCol = this.colors.pop() ;
  }

  ngOnInit() {
  }

}
