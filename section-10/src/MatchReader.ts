import { CsvFileReader } from './CsvFileReader.js';
import { dateStringToDate } from './util.js';
import { MatchResults } from './MatchResults.js';
import { MatchData } from './MatchData.js';

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResults,
      row[6],
    ];
  }
}
