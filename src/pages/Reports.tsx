import React from 'react';
import { FileText, Download, Loader } from 'lucide-react';
import type { Report } from '../types';

const mockReports: Report[] = [
  {
    id: '1',
    name: 'Ежемесячный отчет по использованию ТС',
    type: 'pdf',
    createdAt: '2024-03-10T15:30:00Z',
    status: 'ready',
    url: '#'
  },
  {
    id: '2',
    name: 'Анализ расхода топлива',
    type: 'excel',
    createdAt: '2024-03-10T14:45:00Z',
    status: 'generating'
  },
  {
    id: '3',
    name: 'График технического обслуживания',
    type: 'pdf',
    createdAt: '2024-03-10T13:15:00Z',
    status: 'ready',
    url: '#'
  }
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Отчеты</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FileText className="w-4 h-4 mr-2" />
          Создать новый отчет
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Доступные отчеты</h2>
        </div>

        <div className="divide-y">
          {mockReports.map((report) => (
            <div key={report.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${
                  report.type === 'pdf' ? 'bg-red-100' : 'bg-green-100'
                }`}>
                  <FileText className={`w-6 h-6 ${
                    report.type === 'pdf' ? 'text-red-600' : 'text-green-600'
                  }`} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{report.name}</h3>
                  <p className="text-sm text-gray-500">
                    Создан: {new Date(report.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  report.status === 'ready' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.status === 'ready' ? (
                    'Готов'
                  ) : (
                    <div className="flex items-center">
                      <Loader className="w-3 h-3 mr-1 animate-spin" />
                      Создается
                    </div>
                  )}
                </span>
                {report.status === 'ready' && (
                  <button className="text-blue-600 hover:text-blue-800" title="Скачать">
                    <Download className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Generation Form */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Создание нового отчета</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Тип отчета</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Отчет по использованию ТС</option>
              <option>Анализ расхода топлива</option>
              <option>График технического обслуживания</option>
              <option>Пользовательский отчет</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Период</label>
            <div className="grid grid-cols-2 gap-4 mt-1">
              <input
                type="date"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <input
                type="date"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Формат</label>
            <div className="mt-1 space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" name="format" className="form-radio text-blue-600" />
                <span className="ml-2">PDF</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="format" className="form-radio text-blue-600" />
                <span className="ml-2">Excel</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Создать отчет
          </button>
        </form>
      </div>
    </div>
  );
}
