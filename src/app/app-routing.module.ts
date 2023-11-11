import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBoardComponent } from './component/main-board/main-board.component';
import { LeagueStandingsComponent } from './component/league-standings/league-standings.component';
import { TeamGameResultsComponent } from './component/team-game-results/team-game-results.component';
import { INIT_LEAGUE_ID } from './shared/default-leagues';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/league-standings/${INIT_LEAGUE_ID}`,
    pathMatch: 'full',
  },
  {
    path: 'league-standings',
    component: MainBoardComponent,
    children: [
      {
        path: ':leagueId',
        component: LeagueStandingsComponent,
      },
    ],
  },
  {
    path: 'team-game-results/:teamId',
    component: TeamGameResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
