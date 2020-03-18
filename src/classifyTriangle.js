const isEquilateral = ([ sideA, sideB, sideC ]) =>
  sideA === sideB && sideB === sideC;

export function classifyTriangle(sides) {
  return isEquilateral(sides)
    ? 'equilateral'
    : 'scalene'
}