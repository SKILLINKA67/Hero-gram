const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL ?? "";
export function getApiBaseUrl() { return API_BASE_URL; }
export async function apiRequest<T>(_path: string, _init?: RequestInit): Promise<T> {
  if (!API_BASE_URL) throw new Error("FastAPI URL is not configured.");
  throw new Error("Real API integration is not implemented yet.");
}
