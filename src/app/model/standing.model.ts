import { Team } from './team.model';

interface SummaryResult {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: {
    for: number;
    against: number;
  };
}

export interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: SummaryResult;
  home: SummaryResult;
  away: SummaryResult;
  update: string;
}
