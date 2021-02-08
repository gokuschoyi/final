import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from './models/team.model';
import { TeamsService } from './services/teams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';

  constructor(public teamsService: TeamsService, private router: Router) {
  }

  public selectTeam(): void {
    this.teamsService.selectedTeam = undefined;
    this.router.navigate(['']);
  }
}
