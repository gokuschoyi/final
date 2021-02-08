import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-opponent-game',
  templateUrl: './opponent-game.component.html',
  styleUrls: ['./opponent-game.component.scss'],
})
export class OpponentGameComponent implements OnInit {
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
      .getGamesCurrentYear()
      .subscribe((games: { games: Game[] }) => {
        const aGames = games.games.filter(
          (game) => game.ateamid === this.teamsService.selectedTeam?.id
        );
        const hGames = games.games.filter(
          (game) => game.hteamid === this.teamsService.selectedTeam?.id
        );
        this.rowData = [...aGames, ...hGames];
        this.rowData = this.rowData.filter(game => {
          const t1 = Date.parse(game.date);
          console.log(t1);
          const t2 = Date.parse(new Date().toString());
          console.log(t2);
          return t1 > t2 ? true : false;

        });
        this.rowData.sort((a: Game, b: Game) => Date.parse(a.date) - Date.parse(b.date)).splice(5);
        // console.log(this.rowData);
      });
  }
}
