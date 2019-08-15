import { Component, OnInit } from '@angular/core';

enum Mode {
  started,
  stopped,
  reset
}

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  myInterval;
  startTime;
  lastDifferenceSeconds = 0;
  differenceSeconds;
  initSeconds = 0;
  output;
  currentMode;
  Mode = Mode;

  constructor() {}

  ngOnInit() {
    this.startTime = new Date().getTime();
    this.onIntervalTick();
  }

  onStartButtonClick() {
    this.currentMode = Mode.started;
    this.myInterval = setInterval(this.onIntervalTick, 1000);
    this.startTime = new Date().getTime();
  }

  onStopButtonClick = () => {
    this.currentMode = Mode.stopped;
    clearInterval(this.myInterval);
    this.lastDifferenceSeconds = this.differenceSeconds;
    // tslint:disable-next-line: semicolon
  };

  onResetButtonClick = () => {
    this.currentMode = Mode.reset;
    this.lastDifferenceSeconds = this.initSeconds;
    this.startTime = new Date().getTime();
    clearInterval(this.myInterval);
    this.onIntervalTick();
    // tslint:disable-next-line: semicolon
  };

  onIntervalTick = () => {
    const differenceMilliseconds = new Date().getTime() - this.startTime;
    this.differenceSeconds = this.lastDifferenceSeconds + Math.round(differenceMilliseconds / 1000);

    let seconds = parseInt((this.differenceSeconds % 60).toString(), 10).toString();
    let minutes = parseInt(((this.differenceSeconds / 60) % 60).toString(), 10).toString();
    if (+minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (+seconds < 10) {
      seconds = `0${seconds}`;
    }

    this.output = `00:${minutes}:${seconds}`;
    // tslint:disable-next-line: semicolon
  };
}
