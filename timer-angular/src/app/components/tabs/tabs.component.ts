import { Component, OnInit } from '@angular/core';

enum Tabs {
  clock = 1,
  stopwatch = 2,
  timer = 3
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  constructor() {}
  Tabs = Tabs;
  currentTab: Tabs = Tabs.clock;

  htmlElements = {
    links: document.querySelectorAll('.container .links a'),
    tabs: document.querySelectorAll('.container .tabs > div')
  };

  ngOnInit() {
    this.init(Tabs.stopwatch);
  }

  init(mode) {
    this.enableTab(mode);
  }

  enableTab(mode: Tabs) {
    this.currentTab = mode;
  }
}
