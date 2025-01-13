import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart2,
  Radio,
  FileText,
  Truck
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Панель управления', path: '/' },
  { icon: Users, label: 'Пользователи', path: '/users' },
  { icon: Truck, label: 'Мониторинг', path: '/monitoring' },
  { icon: BarChart2, label: 'Аналитика', path: '/analytics' },
  { icon: Radio, label: 'Передача данных', path: '/data-transfer' },
  { icon: FileText, label: 'Отчёты', path: '/reports' },
  { icon: Settings, label: 'Настройки', path: '/settings' }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">Мониторинг транспорта</h1>
        </div>
        <nav className="mt-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}