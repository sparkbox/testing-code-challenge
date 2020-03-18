const isEquilateral = ([ sideA, sideB, sideC ]) =>
  sideA === sideB && sideB === sideC;

const isIsosceles = ([ sideA, sideB, sideC ]) =>
  sideA === sideB || sideB === sideC || sideA === sideC;

export function classifyTriangle(sides) {
  if (isEquilateral(sides)) return 'equilateral'
  if (isIsosceles(sides)) return 'isosceles'
  return 'scalene'
}