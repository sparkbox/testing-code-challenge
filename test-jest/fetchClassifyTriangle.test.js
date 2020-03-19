import { fetchClassifyTriangle } from '../src/fetchClassifyTriangle';
import { getGeometry as mockGetGeometry } from '../src/getGeometry';

jest.mock('../src/getGeometry');

describe('triangleClassifier', () => {
  const mockResponse = { sides: [1, 1, 1] };

  beforeEach(() => {
    mockGetGeometry.mockImplementation(() => Promise.resolve(mockResponse))
  });

  it('fetches a triangle', async () => {
    await fetchClassifyTriangle();
    expect(mockGetGeometry).toBeCalledWith(3);
  });

  it('returns the sides of the triangle', async () => {
    const { sides } = await fetchClassifyTriangle();
    expect(sides).toMatchObject(mockResponse.sides);
  });

  it('returns the classification of the triangle', async () => {
    const { classification } = await fetchClassifyTriangle();
    expect(classification).toBe('equilateral');
  });
});