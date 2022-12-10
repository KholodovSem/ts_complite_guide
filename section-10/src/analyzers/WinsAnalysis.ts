import { MatchData } from './../MatchData.js';
import { Analyzer } from '../Summary.js';
import { MatchResults } from '../MatchResults.js';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResults.HomeWIN) {
        wins += 1;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResults.AwayWIN
      ) {
        wins += 1;
      }
    }

    return `Team: ${this.teamName} have ${wins} wins`;
  }
}
