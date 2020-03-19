import { fetchClassifyTriangle } from './fetchClassifyTriangle';

fetchClassifyTriangle()
  .then(console.log)
  .catch(() => console.error("I've made a huge mistake. ¯\\_(ツ)_/¯"));