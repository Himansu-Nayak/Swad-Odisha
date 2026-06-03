const https = require('https');

https.get('https://raw.githubusercontent.com/svg-maps/india/master/map.svg', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    // Find Odisha path
    const match = data.match(/<path[^>]*id="[^"]*odisha[^"]*"[^>]*d="([^"]+)"/i);
    if (match) {
      console.log('ODISHA_PATH_START');
      console.log(match[1]);
      console.log('ODISHA_PATH_END');
    } else {
      console.log('Not found by ID, trying name="Odisha"');
      const match2 = data.match(/<path[^>]*name="Odisha"[^>]*d="([^"]+)"/i);
      if (match2) {
         console.log('ODISHA_PATH_START');
         console.log(match2[1]);
         console.log('ODISHA_PATH_END');
      } else {
         console.log(data.substring(0, 1000)); // just see what the file looks like
      }
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
