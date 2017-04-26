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
		jQuery.when(
			jQuery.getScript('assets/scripts/Nivo-Lightbox/nivo-lightbox.js'),
			jQuery.getScript('assets/scripts/Nivo-Lightbox/nivo-lightbox.min.js'),
			jQuery.getScript('assets/js/bootstrap-select.min.js'),
			jQuery.getScript('assets/js/jquery.countdown.min.js'),
			jQuery.getScript('assets/js/bootstrap.min.js'),
			jQuery.getScript('assets/js/countdown.js'),
			jQuery.getScript('assets/js/jquery-3.1.0.min.js'),
			jQuery.getScript('assets/js/jquery.nicescroll.min.js'),
			jQuery.getScript('assets/js/jquery.nouislider.all.min.js'),
			jQuery.getScript('assets/js/owl.carousel.min.js'),
			jQuery.getScript('assets/js/richmarker.js'),
			jQuery.getScript('assets/js/sweetalert.min.js')
			).done(function() {
				jQuery.getScript('assets/js/scripts.js');
			});
	}
}