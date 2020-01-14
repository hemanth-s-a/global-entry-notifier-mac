const notifier = require('node-notifier');
const request = require('request');

setInterval(() => {
  request("https://ttp.cbp.dhs.gov/schedulerapi/slots?orderBy=soonest&limit=1&locationId=5446&minimum=1", function (error, response, body) {
    const jsonBody = JSON.parse(body);
    console.log("Body: ", jsonBody);
    if (jsonBody && jsonBody[0]) {
      console.log(`Slot available at ${jsonBody[0].startTimestamp}`);
      notifier.notify(`Slot available at ${jsonBody[0].startTimestamp}`);
    }
  });
}, 15000);
