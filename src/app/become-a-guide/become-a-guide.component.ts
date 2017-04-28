import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-become-a-guide',
  templateUrl: './become-a-guide.component.html',
  styleUrls: ['./become-a-guide.component.css']
})
export class BecomeAGuideComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  	$('header.clearfix').removeClass('fixed');
  }

}
