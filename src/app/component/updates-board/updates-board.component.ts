import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs';
import { League } from 'src/app/model/league.model';
import { FootballUpdatesService } from 'src/app/service/football-updates/football-updates.service';

@Component({
  selector: 'app-updates-board',
  templateUrl: './updates-board.component.html',
  styleUrls: ['./updates-board.component.css'],
})
export class UpdatesBoardComponent implements OnInit {
  displayedLeagues: League[] = [];

  constructor(private footballUpdatesService: FootballUpdatesService) {}

  ngOnInit(): void {
    this.footballUpdatesService
      .getDisplayedLeagues()
      .pipe(take(1))
      .subscribe((value) => {
        this.displayedLeagues = value || [];
      });
  }
}
