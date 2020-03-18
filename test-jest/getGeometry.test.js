import { getGeometry } from '../src/getGeometry';
import { get as mockGet } from 'axios';

jest.mock('axios');

describe('getGeometry', () => {
  const mockResponse = { sides: [1, 1, 1] };

  beforeEach(() => {
    mockGet.mockImplementation(() => Promise.resolve({ data: mockResponse }))
  });

  afterEach(() => {
    mockGet.mockReset()
  });

  it('fetches data using the endpoint and query params', async () => {
    await getGeometry(3);
    const endpoint = "http://localhost:9999/geometry";
    const params = { totalsides: 3 };
    expect(mockGet).toBeCalledWith(endpoint, { params });
  });

  it('returns the response', async () => {
    const response = await getGeometry(3);
    expect(response).toMatchObject(mockResponse);
  });
});