import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.scss']
})
export class VenuesListComponent implements OnInit {

  columnDefs = [
    // { field: 'roundname' },
    // { field: 'ateam' },
    // { field: 'hteam' },
    // { field: 'date' },
    // { field: 'updated' },
    // { field: 'hgoals' },
    // { field: 'agoals' },
    { field: 'winner'},
    // { field: 'year' },
    { field: 'venue' },
    // { field: 'ascore' },
    // { field: 'hscore' },
    // { field: 'complete' },
    // { field: 'round' },
    // { field: 'is_final' },
    // { field: 'localtime' },
  ];
  defaultColDef = {
    sortable: true,
    filter: true,
  };

  rowData: Game[] = [];


  constructor(public teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService
      .getCentPercentCompleteGames()
      .subscribe((games: { games: Game[] }) => {
        const teamWins = games.games.filter(
          (game) => game.winnerteamid === this.teamsService.selectedTeam?.id
        );
        // const hGames = games.games.filter(
        //   (game) => game.hteamid === this.teamsService.selectedTeam?.id
        // );
        this.rowData = [...teamWins];
      });
  }

  onGridReady(params: any): void {
    params.api.sizeColumnsToFit();
  }

}
