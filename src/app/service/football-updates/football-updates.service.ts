import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { GameResult, Fixtures } from 'src/app/model/fixtures.model';
import { Standing } from 'src/app/model/standing.model';
import { Standings } from 'src/app/model/standings.model';
import { API, API_KEY, LAST_FIXTURES } from 'src/app/shared/constant';

@Injectable({
  providedIn: 'root',
})
export class FootballUpdatesService {
  readonly standingsMockUrl = 'assets/standings.mock.json';
  readonly fixturesMockUrl = 'assets/fixtures.mock.json';

  readonly standingsAPI = `${API}/standings`;
  readonly fixturesAPI = `${API}/fixtures`;

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('x-rapidapi-key', API_KEY);
  }

  fetchLeagueStandingsData(leagueId: number): Observable<Standing[]> {
    const httpOptions = {
      headers: this.headers,
      params: new HttpParams(),
    };
    const date = new Date();
    const currentSeason = date.getFullYear();
    httpOptions.params = httpOptions.params.set('league', leagueId);
    httpOptions.params = httpOptions.params.set('season', currentSeason);
    return this.http.get<Standings>(this.standingsMockUrl, httpOptions).pipe(
      map((standings) => {
        if (standings.response?.length > 0) {
          return standings.response[0].league?.standings?.[0] || [];
        }
        return [];
      }),
      catchError(() => of([]))
    );
    // return this.http.get<Standings>(this.standingsAPI, httpOptions).pipe(
    //   map((standings) => {
    //     if (standings.response?.length > 0) {
    //       return standings.response[0].league?.standings?.[0] || [];
    //     }
    //     return [];
    //   }),
    //   catchError(() => of([]))
    // );
  }

  fetchTeamGameResultsData(team: number): Observable<GameResult[]> {
    const httpOptions = {
      headers: this.headers,
      params: new HttpParams(),
    };
    httpOptions.params = httpOptions.params.set('team', team);
    httpOptions.params = httpOptions.params.set('last', LAST_FIXTURES);
    return this.http.get<Fixtures>(this.fixturesMockUrl, httpOptions).pipe(
      map((fixtures) => fixtures.response || []),
      catchError(() => of([]))
    );
    // return this.http.get<Fixtures>(this.fixturesAPI, httpOptions).pipe(
    //   map((fixtures) => fixtures.response || []),
    //   catchError(() => of([]))
    // );
  }
}
