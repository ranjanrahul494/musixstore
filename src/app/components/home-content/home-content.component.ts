import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {
  
  musicNames = ['1', '2', '3', '4','5', '6'];
  constructor() { }

  ngOnInit(): void {

  }

  popUp(){
    alert('clicked');
  }

}
