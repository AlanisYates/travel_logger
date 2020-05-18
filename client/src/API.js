const API_URL = window.location.hostname === 'localhost' ? "http://localhost:1337" : 'https://travel-log-ay-cehdmzibi.now.sh';

export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}

export async function createLogEntry(entry) {
  const apiKey = entry.apiKey;
  delete entry.apiKey;
  const response = await fetch(`${API_URL}/api/logs`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-API-KEY": apiKey, 
    },
    body: JSON.stringify(entry),
  });
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  const error = new Error(json.message);
  error.response = json;
  throw error;
}

// "env": {
//   "NODE_ENV": "production",
//   "PORT": "1337",
//   "DATABASE_URL": "@travel-log-db",
//   "CORS_ORIGIN": "https://travel-log-ay-3w2bs9328.now.sh",
//   "API_KEY": "@travel-log-api-key"
// }