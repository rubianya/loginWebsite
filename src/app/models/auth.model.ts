export interface LoginResponse {
  phone: string;
  email: string;
  token: string;
}

export interface ErrorResponse {
  error: string;
}