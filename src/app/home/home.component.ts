import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery:any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

	constructor() {
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		jQuery.getScript('assets/js/scripts.js');
	}
}
