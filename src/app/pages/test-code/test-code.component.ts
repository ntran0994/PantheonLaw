import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-code',
  templateUrl: './test-code.component.html',
  styleUrls: ['./test-code.component.css']
})
export class TestCodeComponent implements OnInit {

  counterValue = 5;

  constructor() { }

  ngOnInit() {
  }

  get counter() {
    return this.counterValue;
  }

  set counter(value) {
    this.counterValue = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }

}
