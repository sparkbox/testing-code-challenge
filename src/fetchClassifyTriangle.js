import { getGeometry } from './getGeometry';
import { classifyTriangle } from './classifyTriangle';

export async function fetchClassifyTriangle() {
  const { sides } = await getGeometry(3);
  const classification = classifyTriangle(sides);
  return { sides, classification };
}
