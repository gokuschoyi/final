import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import { TeamWinPredictComponent } from './team-win-predict/team-win-predict.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamResultsComponent } from './team-results/team-results.component';
import { OpponentGameComponent } from './opponent-game/opponent-game.component';
import { VenuesListComponent } from './venues-list/venues-list.component';
import { AdvanceResultComponent } from './advance-result/advance-result.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [
    AppComponent,
    SelectTeamComponent,
    TeamWinPredictComponent,
    DashboardComponent,
    TeamResultsComponent,
    OpponentGameComponent,
    VenuesListComponent,
    AdvanceResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
