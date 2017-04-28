import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, AfterViewInit {

	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		$('header.clearfix').removeClass('fixed');
		$.getScript('assets/js/scripts.js');
	}
}
