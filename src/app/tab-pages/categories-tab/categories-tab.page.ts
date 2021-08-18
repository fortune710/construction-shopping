import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-tab',
  templateUrl: './categories-tab.page.html',
  styleUrls: ['./categories-tab.page.scss'],
})
export class CategoriesTabPage implements OnInit {
  largeScreen: boolean = false;
  categories = [
    { name: 'General', route:'', src:'../../../../assets/images/paint(1).jfif'},
    { name: 'Indoor Materials', route:'', src:'../../../../assets/images/tiles.jfif'},
    { name: 'Outdoor Materials', route:'', src:'../../../../assets/images/outdoor.jfif'},
    { name: 'Furniture', route:'', src:'../../../../assets/images/furniture.jfif'},
    { name: 'Plumbing Materials', route:'', src:'../../../../assets/images/pipes.jfif'},
    { name: 'Heavy Duty Materials', route:'', src:'../../../../assets/images/caterpillar(1).jpg'},
  ];

  cards = [
    { name: 'Dangote Ltd.', src: '../../../../assets/images/dangote.png', feed:'2.5M'},
    { name: 'Auxxdsson', src: '../../../../assets/images/auxdsson.jpg', feed: '100K'},
    { name: 'Iron In Naija', src: '../../../../assets/images/IroninNaija.jpg', feed: '75K'},
    { name: 'QMB Builders Mart', src: '../../../../assets/images/QMB.jpg', feed: '250K'},
  ];
  constructor() { }

  ngOnInit() {}

}
