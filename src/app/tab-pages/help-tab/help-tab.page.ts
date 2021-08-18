import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-tab',
  templateUrl: './help-tab.page.html',
  styleUrls: ['./help-tab.page.scss'],
})
export class HelpTabPage implements OnInit {
  listItems = [
    { name: 'Cost Calculator', icon: 'calculator-outline'},
    { name: 'FAQ', icon: 'help-circle-outline'}
  ];

  buttons = [
    { name: 'Live Chat', icon: 'chatbox-ellipses-outline', id: 'live-chat' },
    { name: 'Phone Call', icon: 'call-outline', id: 'phone-call' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
