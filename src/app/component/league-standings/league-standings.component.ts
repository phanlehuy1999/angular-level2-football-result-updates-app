import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Standing } from 'src/app/model/standing.model';
import { FootballUpdatesService } from 'src/app/service/football-updates/football-updates.service';

@Component({
  selector: 'app-league-standings',
  templateUrl: './league-standings.component.html',
  styleUrls: ['./league-standings.component.css'],
})
export class LeagueStandingsComponent implements OnInit {
  standingList: Standing[] = [];
  isLoading: boolean = false;

  constructor(
    private footballUpdatesService: FootballUpdatesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { leagueId } = params;
      this.getLeagueStandingsData(Number(leagueId));
    });
  }

  getLeagueStandingsData(leagueId: number): void {
    this.isLoading = true;
    this.footballUpdatesService
      .fetchLeagueStandingsData(leagueId)
      .subscribe((value) => {
        this.isLoading = false;
        this.standingList = value;
      });
  }

  viewGameResults(teamId: number): void {
    this.router.navigate(['team-game-results', teamId]);
  }
}
