import { classifyTriangle } from '../src/classifyTriangle';
describe('triangleClassifier', () => {

  it('classifies an equilateral triangle', () => {
    const triangle = classifyTriangle([1, 1, 1])
    expect(triangle).toBe('equilateral')
  });

  it('classifies a scalene triangle', () => {
    const triangle = classifyTriangle([2, 3, 4])
    expect(triangle).toBe('scalene')
  });

  it('classifies an isosceles triangle', () => {
    const triangle = classifyTriangle([2, 3, 3])
    expect(triangle).toBe('isosceles')
  });
});