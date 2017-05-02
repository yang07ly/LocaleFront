import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-hosts',
	templateUrl: './hosts.component.html',
	styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit, AfterViewInit {

	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		$('header.clearfix').removeClass('fixed');
		$.getScript('assets/js/scripts.js');
	}

}
