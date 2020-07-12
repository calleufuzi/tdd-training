const API_URL = 'https://api.spotify.com/v1';
const API_TOKEN =
  'BQChI9vNMS6UtbzbyvYsHFOLliE8Tn3-KwwfkpAlg3UcsPMK3XpHcm8FA0nanJRu3iAdMNjJS6pzqijp3vk-CNxwKP7ivDuCS8wQvGjpVEiwg5vdb91HIsPD64WdyW2R4pUxMk8K33TSol89QUOPEjaCpTCIYB0&';
const HEADERS = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

module.exports = {
  API_TOKEN,
  API_URL,
  HEADERS,
};
