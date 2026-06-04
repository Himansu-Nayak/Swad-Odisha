const axios = require('axios');
const d3 = require('d3-geo');

async function run() {
  try {
    const res = await axios.get('https://raw.githubusercontent.com/geohacker/india/master/district/india_district.geojson');
    const geojson = res.data;
    
    // Check properties to filter correctly
    // geohacker/india district geojson uses NAME_1 for State, NAME_2 for District
    const odishaDistricts = geojson.features.filter(f => f.properties.NAME_1 === 'Orissa' || f.properties.NAME_1 === 'Odisha');
    
    if (odishaDistricts.length === 0) {
      console.log('No districts found. Here is a sample of properties:');
      console.log(geojson.features[0].properties);
      return;
    }

    const projection = d3.geoMercator().fitSize([500, 420], { type: 'FeatureCollection', features: odishaDistricts });
    const pathGen = d3.geoPath().projection(projection);

    const paths = {};
    for (const f of odishaDistricts) {
       const name = f.properties.NAME_2;
       // We also want an approximate center for the label
       const centroid = pathGen.centroid(f);
       paths[name] = {
          path: pathGen(f),
          labelX: Math.round(centroid[0]),
          labelY: Math.round(centroid[1])
       };
    }
    
    const fs = require('fs');
    fs.writeFileSync('odisha_paths.json', JSON.stringify(paths, null, 2));
    console.log("Successfully wrote odisha_paths.json");
    
  } catch(e) {
    console.error(e.message);
  }
}
run();
