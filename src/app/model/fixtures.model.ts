import { Fixture } from './fixture.model';
import { League } from './league.model';
import { ResponseInfo } from './response-info.model';
import { Team } from './team.model';

interface Score {
  home: number | null;
  away: number | null;
}

interface FixtureInfo {
  fixture: Fixture;
  league: League;
  teams: {
    home: Team;
    away: Team;
  };
  goals: Score;
  score: {
    halftime: Score;
    fulltime: Score;
    extratime: Score;
    penalty: Score;
  };
}

export interface Fixtures extends ResponseInfo {
  response: FixtureInfo[];
}
