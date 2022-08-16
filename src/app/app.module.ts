import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BowlingScoreboardComponent } from './scoreBoards/bowling-scoreboard/bowling-scoreboard.component';
import { sharedModule } from './shared/layout/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    sharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
