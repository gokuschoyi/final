import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../models/team.model';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.scss'],
})
export class SelectTeamComponent implements OnInit {
  public teams: Team[] = [];
  constructor(private teamsService: TeamsService, private router: Router) {}

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe((data) => (this.teams = data.teams));
    if (this.teamsService.selectedTeam) {
      this.router.navigate(['dashboard']);
    }
  }

  public teamClicked(index: number): void {
    this.teamsService.selectedTeam = this.teams[index];
    this.router.navigate(['dashboard']);
  }
}
