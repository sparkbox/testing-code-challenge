const express = require('express')
const app = express()
const port = 9999

const randomNumber = (min = 5, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;

const parseTotalSides = ({ totalsides }, defaultNumber) => {
  const sides = parseInt(totalsides);
  return isNaN(sides) ? defaultNumber : sides;
}

const randomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const triangleStrategies = {
  equilateral: () => {
    const side = randomNumber()
    return [side, side, side];
  },
  isosceles: () => {
    const side1 = randomNumber()
    const side2 = randomNumber(1, side1)
    return shuffle([side1, side1, side2])
  },
  scalene: () => Array(3).fill(0).map(() => randomNumber(5, 20))
}

const getTriangle = () => {
  const randomKey = randomArrayValue(Object.keys(triangleStrategies))
  return triangleStrategies[randomKey]()
}

// usage: curl http://localhost:9999/geometry?totalsides=3
// defaults to 5 sides if `totalsize` is not supplied or is NaN
app.get('/geometry', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const totalsides = parseTotalSides(req.query, 5)

  const sides = totalsides === 3
    ? getTriangle()
    : Array(parseInt(totalsides)).fill(0).map(() => randomNumber(5, 20));

  res.send(JSON.stringify({ sides }));
});

app.listen(port, () => console.log(`Listening on port ${port}`))