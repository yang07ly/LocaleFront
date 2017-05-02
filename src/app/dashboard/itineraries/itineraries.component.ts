import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;
declare function initialize_map();

@Component({
  selector: 'app-itineraries',
  templateUrl: './itineraries.component.html',
  styleUrls: ['./itineraries.component.css']
})
export class ItinerariesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('assets/js/scripts.js');
    initialize_map();
  }
}
