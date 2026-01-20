
import type { Specialty, CreateStaffPayload, Staff } from './types/types';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

async function http<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const res = await fetch(input, {
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
    ...init,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`${res.status} ${res.statusText} - ${text || 'Request failed'}`);
  }
  return res.json();
}

export const api = {
  getSpecialties(): Promise<Specialty[]> {
    return http<Specialty[]>(`${API_BASE}/specialties`);
  },

  createStaff(payload: CreateStaffPayload): Promise<Staff> {
    return http<Staff>(`${API_BASE}/staff`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  getStaff(): Promise<Staff[]> {
    return http<Staff[]>(`${API_BASE}/staff`);
  },

  removeStaffSpecialty(staffId: number, specialtyId: number): Promise<Staff> {
    return http<Staff>(`${API_BASE}/staff/${staffId}/specialties/${specialtyId}`, {
      method: 'DELETE',
    });
  },

  deleteStaff(staffId: number): Promise<{ deleted: true }> {
    return http<{ deleted: true }>(`${API_BASE}/staff/${staffId}`, {
      method: 'DELETE',
    });
  },
};
``
