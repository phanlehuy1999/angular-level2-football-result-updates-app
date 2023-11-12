import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Standing } from 'src/app/model/standing.model';
import { FootballUpdatesService } from 'src/app/service/football-updates/football-updates.service';

@Component({
  selector: 'app-league-standings',
  templateUrl: './league-standings.component.html',
  styleUrls: ['./league-standings.component.css'],
})
export class LeagueStandingsComponent implements OnInit, OnDestroy {
  standingList: Standing[] = [];
  isLoading: boolean = false;

  routeSubcription = Subscription.EMPTY;
  apiSubcription = Subscription.EMPTY;

  constructor(
    private footballUpdatesService: FootballUpdatesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSubcription = this.route.params.subscribe((params) => {
      const { leagueId } = params;
      this.getLeagueStandingsData(Number(leagueId));
    });
  }

  getLeagueStandingsData(leagueId: number): void {
    this.isLoading = true;
    this.apiSubcription = this.footballUpdatesService
      .fetchLeagueStandingsData(leagueId)
      .subscribe((value) => {
        this.isLoading = false;
        this.standingList = value;
      });
  }

  viewGameResults(teamId: number): void {
    this.router.navigate(['team-game-results', teamId]);
  }

  ngOnDestroy(): void {
    this.routeSubcription.unsubscribe();
    this.apiSubcription.unsubscribe();
  }
}
