import axios from 'axios';

async function fetchWikiMap() {
  try {
    const res = await axios.get('https://upload.wikimedia.org/wikipedia/commons/2/23/Odisha_in_India_%28disputed_hatched%29.svg', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    const svg = res.data;
    const match = svg.match(/<path[^>]*id="[A-Za-z_-]*[O|o]disha[^"]*"[^>]*d="([^"]+)"/i);
    if (match) {
      console.log('ODISHA_PATH_START');
      console.log(match[1]);
      console.log('ODISHA_PATH_END');
    } else {
      console.log("Not found by ID. Searching all paths for one with title/desc.");
      // Just take the first path and print length.
    }
  } catch (e) {
    console.error(e.message);
  }
}
fetchWikiMap();
