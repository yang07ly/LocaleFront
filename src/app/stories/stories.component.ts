import { Component, Input, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'stories',
  templateUrl: './stories.component.html'
})

export class StoriesComponent implements AfterViewInit {
	constructor() {
	}

	ngAfterViewInit() {
		$('header.clearfix').removeClass('fixed');
		$.getScript('assets/js/scripts.js');
	}
}