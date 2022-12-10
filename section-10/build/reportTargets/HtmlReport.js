import fs from 'fs';
export class HtmlReport {
    print(report) {
        const html = `
      <div>
        <h1>Analysis output</h1>
        <div>${report}</div>
      </div>   
    `;
        fs.writeFileSync('report.html', html);
    }
}
