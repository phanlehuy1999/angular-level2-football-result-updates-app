import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { League } from 'src/app/model/league.model';
import {
  DEFAULT_LEAGUES,
  INIT_LEAGUE_ID,
} from 'src/app/shared/default-leagues';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css'],
})
export class MainBoardComponent implements OnInit {
  defaultLeagues: League[] = DEFAULT_LEAGUES;
  activeLeagueId: number = INIT_LEAGUE_ID;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.children[0].params.subscribe((params) => {
      const { leagueId } = params;
      this.activeLeagueId = Number(leagueId);
    });
  }
}
