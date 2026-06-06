const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'db.json');

const readDB = () => {
  const data = fs.readFileSync(DB_FILE, 'utf-8');
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
};

module.exports = { readDB, writeDB };
