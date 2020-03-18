import { classifyTriangle } from '../src/classifyTriangle';
describe('triangleClassifier', () => {

  it('classifies an equilateral triangle', () => {
    const triangle = classifyTriangle([1, 1, 1])
    expect(triangle).toBe('equilateral')
  });
});