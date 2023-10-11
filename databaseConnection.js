const Pool = require('pg').Pool;

const pool = new Pool({
  user: "pablojoyce",
  host: "localhost",
  database: "backend",
  password: "",
  port: 5432,
});

module.exports = pool;