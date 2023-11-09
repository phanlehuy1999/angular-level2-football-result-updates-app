import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fixtures } from 'src/app/model/fixtures.model';
import { League } from 'src/app/model/league.model';
import { Standings } from 'src/app/model/standings.model';
import { API, API_KEY, LAST_FIXTURES } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class FootballUpdatesService {
  leagueItemsUrl = 'assets/displayed-leagues.json';
  standingsMockUrl = 'assets/standings.mock.json';
  fixturesMockUrl = 'assets/fixtures.mock.json';

  standingsAPI = `${API}/standings`;
  fixturesAPI = `${API}/fixtures`;

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set(
      'x-rapidapi-host',
      'v3.football.api-sports.io'
    );
    this.headers = this.headers.set('x-rapidapi-key', API_KEY);
  }

  getDisplayedLeagues() {
    return this.http.get<League[]>(this.leagueItemsUrl);
  }

  getLeagueStandings(league: number, season: number) {
    const httpOptions = {
      headers: this.headers,
      params: new HttpParams(),
    };
    httpOptions.params = httpOptions.params.set('league', league);
    httpOptions.params = httpOptions.params.set('season', season);
    // return this.http.get<Standings>(this.standingsAPI, httpOptions);
    return this.http.get<Standings>(this.standingsMockUrl, httpOptions);
  }

  getTeamFixtures(team: number) {
    const httpOptions = {
      headers: this.headers,
      params: new HttpParams(),
    };
    httpOptions.params = httpOptions.params.set('team', team);
    httpOptions.params = httpOptions.params.set('last', LAST_FIXTURES);
    // return this.http.get<Fixtures>(this.fixturesAPI, httpOptions);
    return this.http.get<Fixtures>(this.fixturesMockUrl, httpOptions);
  }
}
