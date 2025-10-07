import React, { useState, useRef, useEffect } from 'react';
import { Role, AvailableWidget, WidgetType } from '../types';
import { UserCircleIcon, ChartPieIcon, LayoutDashboardIcon, PlusIcon, RefreshIcon, XIcon } from './icons/Icons';

interface HeaderProps {
  currentRole: Role;
  onRoleChange: (role: Role) => void;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  onAddWidget: (widgetType: WidgetType) => void;
  onResetDashboard: () => void;
  availableWidgetsToAdd: AvailableWidget[];
}

const Header: React.FC<HeaderProps> = ({ currentRole, onRoleChange, isEditing, setIsEditing, onAddWidget, onResetDashboard, availableWidgetsToAdd }) => {
  const roles = Object.values(Role);
  const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false);
  const addWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (addWidgetRef.current && !addWidgetRef.current.contains(event.target as Node)) {
        setIsAddWidgetOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <ChartPieIcon className="h-8 w-8 text-indigo-500" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">AIDA-Ops</span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* --- Edit Controls --- */}
            {isEditing && (
              <div className="flex items-center space-x-2 animate-fade-in">
                <div ref={addWidgetRef} className="relative">
                  <button onClick={() => setIsAddWidgetOpen(prev => !prev)} className="flex items-center px-3 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-green-600 transition-colors">
                    <PlusIcon className="w-4 h-4 mr-1.5" /> 新增卡片
                  </button>
                  {isAddWidgetOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-xl py-2 z-50">
                      {availableWidgetsToAdd.length > 0 ? (
                        availableWidgetsToAdd.map(widget => (
                          <button key={widget.type} onClick={() => { onAddWidget(widget.type); setIsAddWidgetOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                            {widget.name}
                          </button>
                        ))
                      ) : (
                        <p className="px-4 py-2 text-sm text-gray-500">沒有可新增的卡片</p>
                      )}
                    </div>
                  )}
                </div>
                <button onClick={onResetDashboard} className="flex items-center px-3 py-2 bg-yellow-500 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-yellow-600 transition-colors">
                  <RefreshIcon className="w-4 h-4 mr-1.5" /> 重設
                </button>
              </div>
            )}
             <button onClick={() => setIsEditing(!isEditing)} className={`flex items-center px-3 py-2 text-sm font-semibold rounded-lg shadow-sm transition-colors ${isEditing ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}>
                {isEditing ? <XIcon className="w-4 h-4 mr-1.5" /> : <LayoutDashboardIcon className="w-4 h-4 mr-1.5" />}
                {isEditing ? '完成編輯' : '編輯儀表板'}
             </button>

            {/* --- Role Switcher --- */}
            <div className="hidden md:flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => onRoleChange(role)}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-700 focus:ring-indigo-500 ${
                    currentRole === role
                      ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
            
            <div className="flex items-center md:hidden">
              <select
                value={currentRole}
                onChange={(e) => onRoleChange(e.target.value as Role)}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-none rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
              >
                {roles.map(role => <option key={role} value={role}>{role}</option>)}
              </select>
            </div>
            
            <UserCircleIcon className="h-9 w-9 text-gray-400 hover:text-indigo-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;