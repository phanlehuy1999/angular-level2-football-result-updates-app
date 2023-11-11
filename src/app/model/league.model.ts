import { Standing } from './standing.model';

export interface League {
  id: number;
  name: string;
  country: string;
  logo?: string;
  flag?: string;
  season?: number;
  standings?: Standing[][];
  round?: string;
}
