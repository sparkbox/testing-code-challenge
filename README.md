# "Mocking the Triangle" Kata

## Challenge
This challenge is a variation of the triangle kata. Given the length of 3 sides, determine whether a triangle is:

- Equilateral (all 3 sides are equal length)
- Isosceles (2 sides are equal length)
- Scalene (No sides are equal length)

This challenge is intended to focus on the following:
- Test Driven Development
- Code Design
- Mocking Dependencies

This repo provides an API which will return an array of sides. A working solution will:
- Fetch a response from the API
- Determine if the sides returned in the response forms an equilateral, isosceles or scalene triangle
- Log the results to the console

Things to consider while working on this challenge:
- How will you design your modules to facilate TDD?
- How will you mock API responses in your tests?
- How will you verify that the API is being called correctly?
- Have you covered all use cases and edge cases in your tests?
- Does the API response need to be validated? _hint: in order to form a triangle, the combined length of the two smallest sides must be greater than the length of the largest side._

## How to use this repo

### Setup
Install dependencies:
```
npm install
```

Run the API server:

```
npm start
```

Top start the API server and the Babel task in parallel you can use:

```
npm run start:dev
```

With the server running you should be able to hit the following endpoint, with `n` representing the total number of sides to return:

```
curl http://localhost:9999/geometry?totalsides=n
```

### Running

Running `node dist/triangleClassifier.js` should provide feedback about triangle status returned from the local triangle API.

### Fetching Data

[Axios](https://github.com/axios/axios) is included in the project in order to fetch data from the server. This is just for convenience, feel free to use another fetching library if you prefer.

Example usage:

```js
import axios from 'axios';

axios.get('http://localhost:9999/geometry')
  .then(({ data }) => console.log(data))
```

### Testing

This project is setup to use with [Mocha](https://mochajs.org/) or [Jest](https://jestjs.io/). Feel free to use either, or setup another test runner if you like.

### Mocha
1. Write tests in `/test`
1. npm test
1. 💰

### Jest
1. Write tests in `/test-jest`
1. npm run test:jest
1. 💰

