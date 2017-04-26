import { Component, Input, AfterViewInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'stories',
  templateUrl: './stories.component.html'
})

export class StoriesComponent implements AfterViewInit {
	constructor() {
	}

	ngAfterViewInit() {
		jQuery.getScript('assets/js/scripts.js');
	}
}