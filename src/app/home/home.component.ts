import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

	constructor() {
	}

	ngOnInit() {
		$('header.clearfix').addClass('fixed');
		
	}

	ngAfterViewInit() {
		$.getScript('assets/js/scripts.js');
	}
}
