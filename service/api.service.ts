import api from './api';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  error?: string | boolean;
  data: string;
}

export async function login(params: Pick<LoginRequest, 'email' | 'password'>) {
  return api.post<LoginResponse>('/login', { ...params });
}
