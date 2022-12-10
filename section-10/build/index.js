import { MatchReader } from './MatchReader.js';
import { WinsAnalysis } from './analyzers/WinsAnalysis.js';
import { Summary } from './Summary.js';
import { HtmlReport } from './reportTargets/HtmlReport.js';
const reader = new MatchReader('football.csv');
reader.read();
const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summary.buildAndPrintReport(reader.data);
