import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})

export class HomeTabPage implements OnInit {
  @ViewChild('slides',{static:false}) slide: IonSlides;
  date: Date = new Date();
  time: any = this.date.getHours();
  day = this.date.getDay();
  
  greeting: string = "";
  message: string = "";

  indexes: number[] = [0, 1, 2,];
  

  // firstName: string = '';
  id:number[] = [ 0, 1, 2,];
  
  activeSlideIndex: number = 0;
  returnActiveSlide(){
    this.slide.getActiveIndex().then(result => {this.activeSlideIndex = result});
    console.log(this.activeSlideIndex);
  }

  
  cards = [
    { name: 'Dangote Ltd.', src: '../../../../assets/images/dangote.png', feed:'2.5M'},
    { name: 'Auxxdsson', src: '../../../../assets/images/auxdsson.jpg', feed: '100K'},
    { name: 'Iron In Naija', src: '../../../../assets/images/IroninNaija.jpg', feed: '75K'},
    { name: 'QMB Builders Mart', src: '../../../../assets/images/QMB.jpg', feed: '250K'},
  ];

  slideImgs = [
    '../../../../assets/images/blocks.jfif',
    '../../../../assets/images/paint.jpg',
    '../../../../assets/images/cement.jfif'
  ];

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.25,
    loop: true,
    centeredSlides: true,
  };

  moveToPrev(){
    this.slide.slidePrev();
  }

  moveToNext(){
    this.slide.slideNext();
  }

  constructor() { 
    //console.log(this.time)
    if(this.time<12)
      this.greeting = "Good morning!";
    else if(this.time>=12 && this.time<17)
      this.greeting = "Good afternoon!";
    else
      this.greeting = "Good evening!";
    
    //Checking for the day of the week 
    if(this.day==1)
      this.message = "It's a new week. Let's go!";
    else if(this.day==5)
      this.message = "TGIF🕺🏽";

    //this.detailsService.FirstName = this.firstName;

    //this.greeting += ` ${this.firstName}`;

  
  }


  ngOnInit() {
  }

}
