import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initOwlCarousel();
  }

  initOwlCarousel() {
    jQuery('.owl-clients-2').owlCarousel({
      loop: true,
      dots: true,
      nav: false,
      margin: 30,
      responsive: {
          0: {
              items: 2
          },
          480: {
              items: 3
          },
          768: {
              items: 4
          }
      }
  });

  }

}
