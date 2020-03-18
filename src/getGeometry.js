import { get } from 'axios';

const host = 'http://localhost';
const port = '9999';

export function getGeometry(totalsides) {
  const params = { totalsides }
  return get(`${host}:${port}/geometry`, { params }).then(({ data }) => data);
}