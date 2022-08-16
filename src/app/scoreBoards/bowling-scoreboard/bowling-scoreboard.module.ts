import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BowlingScoreboardRoutingModule } from './bowling-scoreboard-routing.module';
import { BowlingScoreboardComponent } from './bowling-scoreboard.component';


@NgModule({
  declarations: [
    BowlingScoreboardComponent
  ],
  imports: [
    CommonModule,
    BowlingScoreboardRoutingModule
  ]
})
export class BowlingScoreboardModule { }
