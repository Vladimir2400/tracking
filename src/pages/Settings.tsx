import React from 'react';
import { Save } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Настройки</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Save className="w-4 h-4 mr-2" />
          Сохранить изменения
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Общие настройки</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Часовой пояс</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>UTC (Всемирное координированное время)</option>
                <option>MSK (Московское время)</option>
                <option>YEKT (Екатеринбургское время)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Язык</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Русский</option>
                <option>English</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Формат даты</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>ДД.ММ.ГГГГ</option>
                <option>ММ.ДД.ГГГГ</option>
                <option>ГГГГ-ММ-ДД</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Настройки уведомлений</h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Email уведомления</span>
              </label>
            </div>

            <div>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">SMS оповещения</span>
              </label>
            </div>

            <div>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Push-уведомления</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Приоритет оповещений</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Только высокий приоритет</option>
                <option>Средний и высокий приоритет</option>
                <option>Все уведомления</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Settings */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Настройки данных</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Частота обновления данных</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Каждые 30 секунд</option>
                <option>Каждую минуту</option>
                <option>Каждые 5 минут</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Период хранения данных</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>30 дней</option>
                <option>60 дней</option>
                <option>90 дней</option>
                <option>180 дней</option>
              </select>
            </div>

            <div>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Включить сжатие данных</span>
              </label>
            </div>
          </div>
        </div>

        {/* Map Settings */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Настройки карты</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Вид карты по умолчанию</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Спутник</option>
                <option>Схема</option>
                <option>Гибрид</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Единицы измерения расстояния</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Километры</option>
                <option>Мили</option>
              </select>
            </div>

            <div>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Показывать слой пробок</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}