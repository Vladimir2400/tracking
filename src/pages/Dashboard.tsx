import React from 'react';
import { Bell, AlertTriangle } from 'lucide-react';

const mockAlerts = [
  {
    id: '1',
    type: 'warning',
    message: 'Низкий уровень топлива в грузовике #123',
    timestamp: '2024-03-10T10:30:00Z',
  },
  {
    id: '2',
    type: 'error',
    message: 'Неисправность двигателя в автомобиле #456',
    timestamp: '2024-03-10T09:15:00Z',
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Панель управления</h1>
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Активные ТС</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">24</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Общий пробег</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">1,234 км</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Расход топлива</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">2,145 л</p>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow-sm h-96">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Карта местоположения ТС</h2>
        <div className="bg-gray-100 h-full rounded flex items-center justify-center">
          <p className="text-gray-500">Здесь будет отображаться карта</p>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Последние оповещения</h2>
        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start p-4 bg-orange-50 rounded-lg"
            >
              <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-800">{alert.message}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(alert.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}