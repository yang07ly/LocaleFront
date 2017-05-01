import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

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
		$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAy-PboZ3O_A25CcJ9eoiSrKokTnWyAmt8").then(function() {
			$.getScript('assets/js/richmarker.js');
		});
		$.getScript('assets/js/scripts.js');
	}
}
