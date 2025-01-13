import React from 'react';
import { Calendar, Filter } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Аналитика</h1>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Calendar className="w-4 h-4 mr-2" />
            Последние 30 дней
          </button>
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Фильтр
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fault Prediction */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Прогноз неисправностей</h2>
          <div className="bg-gray-100 h-64 rounded flex items-center justify-center">
            <p className="text-gray-500">Здесь будет график прогноза неисправностей</p>
          </div>
        </div>

        {/* Vehicle Usage Optimization */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Оптимизация использования ТС</h2>
          <div className="bg-gray-100 h-64 rounded flex items-center justify-center">
            <p className="text-gray-500">Здесь будет график оптимизации использования</p>
          </div>
        </div>

        {/* Trip History */}
        <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">История поездок</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ТС</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Время начала</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Время окончания</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Расстояние</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Расход топлива</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Грузовик 001</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10.03.2024 09:00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10.03.2024 17:00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">150 км</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 л</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Фургон 002</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10.03.2024 08:30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10.03.2024 16:30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">120 км</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35 л</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}