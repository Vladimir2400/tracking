import React from 'react';
import { Wifi, Satellite, Database } from 'lucide-react';

export default function DataTransfer() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Передача данных</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Connection Status */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Состояние подключения</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <Wifi className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <p className="font-medium text-green-900">Мобильная сеть</p>
                  <p className="text-sm text-green-700">Подключено - 4G LTE</p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                Активно
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <Satellite className="w-5 h-5 text-gray-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Спутниковая связь</p>
                  <p className="text-sm text-gray-700">Режим ожидания</p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-full">
                Ожидание
              </span>
            </div>
          </div>
        </div>

        {/* Data Transfer Stats */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Статистика передачи данных</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <Database className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium">Передано данных сегодня</p>
                  <p className="text-2xl font-bold text-blue-600">2.5 ГБ</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-gray-600">Скорость отправки</p>
                <p className="text-lg font-semibold">1.2 Мбит/с</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-gray-600">Скорость получения</p>
                <p className="text-lg font-semibold">5.8 Мбит/с</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-gray-600">Отправлено пакетов</p>
                <p className="text-lg font-semibold">45,678</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-gray-600">Получено пакетов</p>
                <p className="text-lg font-semibold">89,012</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connection History */}
        <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">История подключений</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Время</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тип</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Объем данных</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10.03.2024 15:30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4G LTE</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                      Подключено
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">256 МБ</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10.03.2024 14:45</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Спутник</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
                      Отключено
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">128 МБ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}