import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BowlingScoreboardComponent } from './bowling-scoreboard.component';

const routes: Routes = [
  {
    path: '',
    component: BowlingScoreboardComponent
  },
  {
    path: '**',
    redirectTo: 'BowlingScoreboardComponent'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BowlingScoreboardRoutingModule { }
