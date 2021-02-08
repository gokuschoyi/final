import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
import { Game } from '../models/game.model';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-team-win-predict',
  templateUrl: './team-win-predict.component.html',
  styleUrls: ['./team-win-predict.component.scss']
})
export class TeamWinPredictComponent implements OnInit {

  // rowData: Game[] = [];
  public totalNumberOfGames: number | undefined;
  public halfOfTotalGames = 0;
  public totalGameWins: number | undefined;
  public predictionTeamWin = false;
  public message = '';

  constructor(public teamsService: TeamsService) { }

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
        const totalGames = [...aGames, ...hGames];
        this.totalNumberOfGames = totalGames.length;
        this.totalGameWins = totalGames.filter(game => game.winnerteamid === this.teamsService.selectedTeam?.id).length;
        this.halfOfTotalGames = this.totalNumberOfGames ? this.totalNumberOfGames / 2 : 0;
        this.totalGameWins = this.totalGameWins ? Math.floor(this.totalGameWins / 2) : 0;
        if (this.halfOfTotalGames === this.totalGameWins) {
          this.message = 'Cannot predict. Because total number of wins is 50% of total match played.';
        }
        else if (this.halfOfTotalGames > this.totalGameWins) {
          this.message = 'Your team will may loose. Because total number of wins is less than 50% of total match played.';
        }
        else if (this.halfOfTotalGames < this.totalGameWins) {
          this.message = 'Your team will may win. Because total number of wins is greater than 50% of total match played.';
        }
        // this.rowData = [...aGames, ...hGames];
      });
  }

}
