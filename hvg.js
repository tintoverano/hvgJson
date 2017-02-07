var fs = require ("fs");
var orig = require ("./hvg.json");
var newHvg = {};

for (let item of orig.places) {
  newHvg[item.id] = {
    "nev": item.nev,
    "kedvezmeny": item.kedvezmeny,
    "kategoria": item.kategoria,
    "varos": item.varos,
    "lat": item.lat,
    "lng": item.lng};
}

var writeStream;

try {
  writeStream = fs.createWriteStream ("cmpHvg.json");
  writeStream.write (JSON.stringify (newHvg));
} catch (err) {
  console.log (err);
} finally {
  writeStream.end ();
}
