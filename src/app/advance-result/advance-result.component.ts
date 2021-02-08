import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-advance-result',
  templateUrl: './advance-result.component.html',
  styleUrls: ['./advance-result.component.scss']
})
export class AdvanceResultComponent implements OnInit {

  constructor(public teamsService: TeamsService) { }

  ngOnInit(): void {
  }

}
