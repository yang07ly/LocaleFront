import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit, AfterViewInit {

	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		$('header.clearfix').removeClass('fixed');
	}

}
