import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { RootComponent } from './components/root/root.component';
import { ClockComponent } from './components/clock/clock.component';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [RootComponent, TabsComponent, RootComponent, ClockComponent, StopwatchComponent, TimerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
