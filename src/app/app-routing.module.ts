import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvanceResultComponent } from './advance-result/advance-result.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpponentGameComponent } from './opponent-game/opponent-game.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import { TeamResultsComponent } from './team-results/team-results.component';
import { TeamWinPredictComponent } from './team-win-predict/team-win-predict.component';
import { VenuesListComponent } from './venues-list/venues-list.component';

const routes: Routes = [
  {
    component: SelectTeamComponent,
    path: ''
  },
  {
    component: TeamWinPredictComponent,
    path: 'predict'
  },
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  {
    component: TeamResultsComponent,
    path: 'results'
  },
  {
    component: OpponentGameComponent,
    path: 'opponents'
  },
  {
    component: VenuesListComponent,
    path: 'venues'
  },
  {
    component: AdvanceResultComponent,
    path: 'advance-result'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
