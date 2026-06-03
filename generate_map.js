import axios from 'axios';
import { geoMercator, geoPath } from 'd3-geo';

async function generateMap() {
  try {
    const res = await axios.get('https://raw.githubusercontent.com/datameet/maps/master/States/States.geojson');
    const geojson = res.data;
    
    // Find Odisha
    const odishaFeature = geojson.features.find(f => f.properties.ST_NM === 'Odisha' || f.properties.ST_NM === 'Orissa');
    if (!odishaFeature) throw new Error("Odisha not found in geojson");

    // Create a projection that fits the map into a 800x800 box
    const projection = geoMercator().fitSize([800, 800], odishaFeature);
    const pathGenerator = geoPath().projection(projection);
    
    const svgPath = pathGenerator(odishaFeature);
    console.log("SVG_PATH_START");
    console.log(svgPath);
    console.log("SVG_PATH_END");
  } catch (err) {
    console.error("Error fetching or generating map:", err.message);
  }
}

generateMap();
