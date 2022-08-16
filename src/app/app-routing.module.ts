import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './shared/layout/components/common-layout/common-layout.component';

const routes: Routes = [  {
  path: 'scoreboard',
  component: CommonLayoutComponent,
  children: [
    {
      path: 'bowling',
      loadChildren: () => import('./scoreBoards/bowling-scoreboard/bowling-scoreboard.module').then(m => m.BowlingScoreboardModule)
    },
    {
      path: '',
      redirectTo: 'bowling',
      pathMatch: 'full'
    }
   
  ]
}, 
{
  path: '**',
  redirectTo: 'scoreboard'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
