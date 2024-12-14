const fs = require('fs');
const { IncomingWebhook } = require('@slack/webhook');
const path = require('path');
                        
//read the report
const reportData = JSON.parse(fs.readFileSync('./test-results.json', 'utf8'));

const summaryTable = [];

reportData.suites.forEach(testSuite => {
    const suiteName = path.basename(testSuite.title.replace(/\.spec\.js$/, ''));
    //const suiteName = testSuite.title.replace(/\.spec\.js$/, '');
    const totalTests = testSuite.specs.reduce((count, spec) => count + spec.tests.length, 0);
    const failed = testSuite.specs.reduce((count, spec) => count + spec.tests.filter(test => test.status === 'unexpected').length, 0);
    const passed = testSuite.specs.reduce((count, spec) => count + spec.tests.filter(test => test.status === 'expected').length, 0);
    const flaky = testSuite.specs.reduce((count, spec) => count + spec.tests.filter(test => test.status === 'flaky').length, 0);
    const Duration = testSuite.specs.reduce((acc, spec) => {
        return acc + spec.tests.reduce((specDuration, test) => specDuration + test.results[0].duration / 1000 / 60, 0);
   }, 0);

   summaryTable.push({
    suiteName,
    totalTests,
    failed,
    passed,
    flaky,
    Duration: `${Duration.toFixed(2)}m`,
   });
});

console.table(summaryTable);

const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

const titleRow = 'Suite Name\tTotal Tests\tFailed\tPassed\tFlaky\tDuration';
const tableText = [titleRow, ...summaryTable.map(row => Object.values(row).join('\t'))].join('\n');

const payload = {
    text: 'Summary Table',
    blocks: [
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: '```' +
                    `| Suite Name                    | Total Tests| Failed     | Passed     | Flaky  |\n` +
                    `| ----------------------------- | ---------- | ---------- | ---------- | ------ |\n` +
                    summaryTable.map(row =>
                        `| ${String(row.suiteName || '').padEnd(29)} | ${String(row.totalTests || '').padEnd(10)} | ${String(row.failed || '').padEnd(10)} | ${String(row.passed || '').padEnd(10)} | ${String(row.flaky || '').padEnd(6)} |`
                    ).join('\n') +
                    '```',
            },
        },
    ],
};


console.log(payload);

// Create a new webhook
const webhook = new IncomingWebhook(slackWebhookUrl);

// Send the message to Slack
webhook.send(payload)
  .then(() => console.log('Message sent to Slack'))
  .catch((error) => console.error('Error sending message to Slack:', error.message));
