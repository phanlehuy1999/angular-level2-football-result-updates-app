import { League } from '../model/league.model';

export const DEFAULT_LEAGUES: League[] = [
  {
    id: 39,
    name: 'Premier League',
    country: 'England',
  },
  {
    id: 140,
    name: 'La Liga',
    country: 'Spain',
  },
  {
    id: 61,
    name: 'Ligue 1',
    country: 'France',
  },
  {
    id: 78,
    name: 'Bundesliga',
    country: 'Germany',
  },
  {
    id: 135,
    name: 'Serie A',
    country: 'Italy',
  },
];

export const INIT_LEAGUE_ID = DEFAULT_LEAGUES[0].id;
