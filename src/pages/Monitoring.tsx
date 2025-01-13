import React from 'react';
import { Plus, Settings, AlertTriangle } from 'lucide-react';
import type { Vehicle } from '../types';

const mockVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Грузовик 001',
    type: 'Тяжелый грузовик',
    status: 'active',
    location: { lat: 51.5074, lng: -0.1278 },
    lastUpdate: '2024-03-10T15:30:00Z'
  },
  {
    id: '2',
    name: 'Фургон 002',
    type: 'Доставка',
    status: 'maintenance',
    location: { lat: 51.5074, lng: -0.1278 },
    lastUpdate: '2024-03-10T14:45:00Z'
  }
];

const statusNames = {
  active: 'Активен',
  maintenance: 'Обслуживание',
  inactive: 'Неактивен'
};

export default function Monitoring() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Мониторинг транспорта</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Добавить ТС
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Карта местоположения ТС</h2>
          <div className="bg-gray-100 h-96 rounded flex items-center justify-center">
            <p className="text-gray-500">Здесь будет отображаться карта</p>
          </div>
        </div>

        {/* Vehicle List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Подключенные ТС</h2>
          </div>
          <div className="p-4 space-y-4">
            {mockVehicles.map((vehicle) => (
              <div key={vehicle.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{vehicle.name}</h3>
                  <p className="text-sm text-gray-500">{vehicle.type}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    vehicle.status === 'active' ? 'bg-green-100 text-green-800' :
                    vehicle.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {statusNames[vehicle.status]}
                  </span>
                  <button className="text-gray-400 hover:text-gray-600" title="Настройки">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAN Bus Configuration */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Настройка CAN-шины</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-yellow-800">Требуется настройка</h3>
                    <p className="mt-1 text-sm text-yellow-700">
                      Выберите транспортное средство для настройки параметров CAN-шины
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-full px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                Настроить выбранное ТС
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}