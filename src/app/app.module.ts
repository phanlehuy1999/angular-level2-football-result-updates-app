import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainBoardComponent } from './component/main-board/main-board.component';
import { LeagueStandingsComponent } from './component/league-standings/league-standings.component';
import { TeamGameResultsComponent } from './component/team-game-results/team-game-results.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    LeagueStandingsComponent,
    TeamGameResultsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
