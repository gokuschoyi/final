import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.scss'],
})
export class TeamResultsComponent implements OnInit {
  columnDefs = [
    { field: 'roundname' },
    { field: 'ateam' },
    { field: 'hteam' },
    { field: 'date' },
    { field: 'updated' },
    { field: 'hgoals' },
    { field: 'agoals' },
    { field: 'winner' },
    { field: 'year' },
    { field: 'venue' },
    { field: 'ascore' },
    { field: 'hscore' },
    { field: 'complete' },
    { field: 'round' },
    { field: 'is_final' },
    { field: 'localtime' },
  ];
  defaultColDef = {
    sortable: true,
    filter: true,
  };

  rowData: Game[] = [];
  constructor(public teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService
      .getCentPercentCompleteGames()
      .subscribe((games: { games: Game[] }) => {
        const aGames = games.games.filter(
          (game) => game.ateamid === this.teamsService.selectedTeam?.id
        );
        const hGames = games.games.filter(
          (game) => game.hteamid === this.teamsService.selectedTeam?.id
        );
        this.rowData = [...aGames, ...hGames];
      });
  }
}
