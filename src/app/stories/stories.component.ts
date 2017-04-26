import { Component, Input, AfterViewInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'stories',
  templateUrl: './stories.component.html'
})

export class StoriesComponent implements AfterViewInit {
	constructor() {
		jQuery.getScript('assets/scripts/Nivo-Lightbox/nivo-lightbox.js', function(){});
		jQuery.getScript('assets/scripts/Nivo-Lightbox/nivo-lightbox.min.js', function(){});
		jQuery.getScript('assets/js/bootstrap-select.min.js', function(){});
		jQuery.getScript('assets/js/jquery.countdown.min.js', function(){});
		jQuery.getScript('assets/js/bootstrap.min.js', function(){});
		jQuery.getScript('assets/js/countdown.js', function(){});
		jQuery.getScript('assets/js/jquery-3.1.0.min.js', function(){});
		jQuery.getScript('assets/js/jquery.nicescroll.min.js', function(){});
		jQuery.getScript('assets/js/jquery.nouislider.all.min.js', function(){});
		jQuery.getScript('assets/js/owl.carousel.min.js', function(){});
		jQuery.getScript('assets/js/richmarker.js', function(){});
		jQuery.getScript('assets/js/sweetalert.min.js', function(){});
	}
	
	ngAfterViewInit() {
		jQuery.getScript('assets/js/scripts.js', function(){});
	}
}