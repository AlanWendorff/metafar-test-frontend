import { API_URL } from '@constants/env';
import { API_KEY } from '@constants/env';

const API_HEADERS = {
  Authorization: `apikey ${API_KEY}`
};

const http = {
  get: async (input: RequestInfo, init?: RequestInit) => {
    const response = await fetch(`${API_URL}${input}`, { ...init, method: 'GET', headers: API_HEADERS });
    return response.json();
  },
  post: async (input: RequestInfo, body: Record<string, any>, init?: RequestInit) => {
    const response = await fetch(`${API_URL}${input}`, {
      ...init,
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify(body)
    });
    return await response.json();
  },
  put: async (input: RequestInfo, body: Record<string, any>, init?: RequestInit) => {
    const response = await fetch(`${API_URL}${input}`, {
      ...init,
      method: 'PUT',
      headers: API_HEADERS,
      body: JSON.stringify(body)
    });
    return await response.json();
  },
  delete: async (input: RequestInfo, init?: RequestInit) => {
    const response = await fetch(`${API_URL}${input}`, { ...init, method: 'DELETE', headers: API_HEADERS });
    return await response.json();
  }
};

export default http;
