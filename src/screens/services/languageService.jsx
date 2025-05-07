import data from '../../../app/data/data.json';

export async function fetchLanguageDetails(id) {
  return data[id] || null;
}
