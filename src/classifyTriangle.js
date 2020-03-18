const isEquilateral = ([ sideA, sideB, sideC ]) =>
  sideA === sideB && sideB === sideC;

const isIsosceles = ([ sideA, sideB, sideC ]) =>
  sideA === sideB || sideB === sideC || sideA === sideC;

const isTriangle = (sides) => sides.length === 3;

export function classifyTriangle(sides) {
  if (!isTriangle(sides)) return 'NaT'
  if (isEquilateral(sides)) return 'equilateral'
  if (isIsosceles(sides)) return 'isosceles'
  return 'scalene'
}