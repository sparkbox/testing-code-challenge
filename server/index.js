const express = require('express')
const app = express()
const port = 9999

const randomNumber = () => Math.ceil(Math.random() * 10);

const parseTotalSides = ({ totalsides }, defaultNumber) => {
  const sides = parseInt(totalsides);
  return isNaN(sides) ? defaultNumber : sides;
}

// usage: curl http://localhost:9999/geometry?totalsides=3
// defaults to 5 sides if `totalsize` is not supplied or is NaN
app.get('/geometry', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const totalsides = parseTotalSides(req.query, 5)

  const sides = Array(parseInt(totalsides)).fill(0).map(randomNumber)

  const responseData = { sides };

  res.send(JSON.stringify(responseData));
});

app.listen(port, () => console.log(`Listening on port ${port}`))