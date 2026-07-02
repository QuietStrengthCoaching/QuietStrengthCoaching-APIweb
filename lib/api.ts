import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API endpoints
export const api = {
  // Clients
  getClients: () => apiClient.get('/clients'),
  getClient: (id: string) => apiClient.get(`/clients/${id}`),
  createClient: (data: any) => apiClient.post('/clients', data),
  updateClient: (id: string, data: any) => apiClient.put(`/clients/${id}`, data),
  deleteClient: (id: string) => apiClient.delete(`/clients/${id}`),

  // Sessions
  getSessions: () => apiClient.get('/sessions'),
  getSession: (id: string) => apiClient.get(`/sessions/${id}`),
  createSession: (data: any) => apiClient.post('/sessions', data),
  updateSession: (id: string, data: any) => apiClient.put(`/sessions/${id}`, data),
  deleteSession: (id: string) => apiClient.delete(`/sessions/${id}`),

  // Health check
  health: () => apiClient.get('/health'),
};
