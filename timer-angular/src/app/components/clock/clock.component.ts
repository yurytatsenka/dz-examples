import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  htmlElements;

  constructor() {}

  ngOnInit() {
    this.htmlElements = { output: document.querySelector('.output') };
    this.init();
  }

  onClockNextTick() {
    const currentTime = new Date();
    const timeStrLong = currentTime.toTimeString();
    const timeStrShort = timeStrLong.split(' ')[0];
    this.htmlElements.output.innerHTML = timeStrShort;
  }

  init() {
    setInterval(this.onClockNextTick.bind(this), 1000);
    this.onClockNextTick();
  }
}
