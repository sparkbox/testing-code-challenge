const isEquilateral = ([ sideA, sideB, sideC ]) =>
  sideA === sideB && sideB === sideC;

const isIsosceles = ([ sideA, sideB, sideC ]) =>
  sideA === sideB || sideB === sideC || sideA === sideC;

const getLargestSide = (sides) => Math.max.apply(Math, sides)

const getOtherSides = (sides, sideToRemove) => {
  const copy = [...sides];
  copy.splice(sides.indexOf(sideToRemove), 1)
  return copy;
}

const sumArray = (array) => array.reduce((total, val) => total + val);

const isTriangle = (sides) => {
  if (sides.length !== 3) return false;
  const largeSide = getLargestSide(sides);
  const smallSides = getOtherSides(sides, largeSide);
  const sumOfSmallSides = sumArray(smallSides);
  return sumOfSmallSides > largeSide;
}

export function classifyTriangle(sides) {
  if (!isTriangle(sides)) return 'NaT'
  if (isEquilateral(sides)) return 'equilateral'
  if (isIsosceles(sides)) return 'isosceles'
  return 'scalene'
}