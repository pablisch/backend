const express = require('express');
const pool = require('./databaseConnection');
const port = 3001;

// const name = "chiara";
// const email = "m.chiarap@gmail.com"
// const username = "Kiki"
// const dob = "1982-09-29"

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  const getUsersQuery = "SELECT * FROM users";
  pool.query(getUsersQuery, (error, results) => {
    console.log(results)
    res.status(200).json(results.rows);
  })
})

app.post("/", (req, res) => {
  const { name, email, username, dob } = req.body;
  const getUsersQuery = "INSERT INTO users(name,email,username,dob)VALUES($1, $2, $3, $4)";
  pool.query(getUsersQuery, [name, email, username, dob], (error, results) => {
    console.log(results)
    res.status(201).send('created user');
  })
})



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})


