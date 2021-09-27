import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [NgbCarouselConfig]
})
export class AboutComponent implements OnInit {
  images = [
    'assets/images/about/5.jpg',
    'assets/images/about/4.jpg',
    'assets/images/about/3.jpg'
  ];

  ngOnInit(): void {
  }

}
