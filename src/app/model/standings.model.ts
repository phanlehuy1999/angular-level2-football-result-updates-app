import { League } from './league.model';
import { ResponseInfo } from './response-info.model';

export interface Standings extends ResponseInfo {
  response: League[];
}
