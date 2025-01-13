export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'operator' | 'viewer';
  lastActive: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive' | 'maintenance';
  location: {
    lat: number;
    lng: number;
  };
  lastUpdate: string;
}

export interface Alert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: string;
  vehicleId: string;
}

export interface Report {
  id: string;
  name: string;
  type: 'pdf' | 'excel';
  createdAt: string;
  status: 'ready' | 'generating';
  url?: string;
}