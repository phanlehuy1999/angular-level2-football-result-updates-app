import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameResult } from 'src/app/model/fixtures.model';
import { FootballUpdatesService } from 'src/app/service/football-updates/football-updates.service';

@Component({
  selector: 'app-team-game-results',
  templateUrl: './team-game-results.component.html',
  styleUrls: ['./team-game-results.component.css'],
})
export class TeamGameResultsComponent implements OnInit, OnDestroy {
  gameResults: GameResult[] = [];
  isLoading: boolean = false;

  routeSubcription = Subscription.EMPTY;
  apiSubcription = Subscription.EMPTY;

  constructor(
    private footballUpdatesService: FootballUpdatesService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSubcription = this.route.params.subscribe((params) => {
      const { teamId } = params;
      this.getTeamGameResultsData(Number(teamId));
    });
  }

  getTeamGameResultsData(teamId: number): void {
    this.isLoading = true;
    this.apiSubcription = this.footballUpdatesService
      .fetchTeamGameResultsData(teamId)
      .subscribe((value) => {
        this.isLoading = false;
        this.gameResults = value;
      });
  }

  handleBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.routeSubcription.unsubscribe();
    this.apiSubcription.unsubscribe();
  }
}
