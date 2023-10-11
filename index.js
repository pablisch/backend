const express = require('express');
const pool = require('./databaseConnection');
const port = 3001;

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  const getUsersQuery = "SELECT * FROM users";
  pool.query(getUsersQuery, (error, results) => {
    console.log(results)
    res.status(200).json(results.rows);
  })
})



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})


