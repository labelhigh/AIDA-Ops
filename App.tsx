import React, { useState, useCallback, useEffect } from 'react';
import { Role, DashboardState, WidgetType } from './types';
import Header from './components/Header';
import CommandCenter from './components/CommandCenter';
import { DEFAULT_DASHBOARDS, AVAILABLE_WIDGETS } from './constants';
import { Layout } from 'react-grid-layout';

const App: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<Role>(Role.CEO);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [dashboards, setDashboards] = useState<Record<Role, DashboardState>>(() => {
    try {
      const savedDashboards = localStorage.getItem('aida-ops-dashboards');
      return savedDashboards ? JSON.parse(savedDashboards) : DEFAULT_DASHBOARDS;
    } catch (error) {
      console.error("Failed to parse dashboards from localStorage", error);
      return DEFAULT_DASHBOARDS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('aida-ops-dashboards', JSON.stringify(dashboards));
    } catch (error) {
      console.error("Failed to save dashboards to localStorage", error);
    }
  }, [dashboards]);

  const handleRoleChange = useCallback((role: Role) => {
    setCurrentRole(role);
    setIsEditing(false); // Exit edit mode on role change
  }, []);

  const handleLayoutChange = useCallback((newLayout: Layout[]) => {
    setDashboards(prevDashboards => ({
      ...prevDashboards,
      [currentRole]: {
        ...prevDashboards[currentRole],
        layouts: newLayout,
      }
    }));
  }, [currentRole]);
  
  const handleRemoveWidget = useCallback((widgetId: string) => {
    setDashboards(prevDashboards => {
      const currentDashboard = prevDashboards[currentRole];
      return {
        ...prevDashboards,
        [currentRole]: {
          ...currentDashboard,
          widgets: currentDashboard.widgets.filter(w => w.id !== widgetId),
          layouts: currentDashboard.layouts.filter(l => l.i !== widgetId),
        }
      }
    });
  }, [currentRole]);

  const handleAddWidget = useCallback((widgetType: WidgetType) => {
    setDashboards(prevDashboards => {
      const currentDashboard = prevDashboards[currentRole];
      const newWidget = {
        id: `${widgetType}-${Date.now()}`,
        type: widgetType,
      };
      const availableWidget = AVAILABLE_WIDGETS[currentRole].find(w => w.type === widgetType);
      const newLayoutItem = {
        i: newWidget.id,
        x: 0,
        y: Infinity, // This will place it at the bottom
        w: availableWidget?.defaultW ?? 6,
        h: availableWidget?.defaultH ?? 8,
      };
      return {
        ...prevDashboards,
        [currentRole]: {
          ...currentDashboard,
          widgets: [...currentDashboard.widgets, newWidget],
          layouts: [...currentDashboard.layouts, newLayoutItem],
        }
      }
    });
  }, [currentRole]);

  const handleResetDashboard = useCallback(() => {
    setDashboards(prevDashboards => ({
      ...prevDashboards,
      [currentRole]: DEFAULT_DASHBOARDS[currentRole],
    }));
  }, [currentRole]);

  const currentDashboard = dashboards[currentRole];
  const availableWidgetsToAdd = AVAILABLE_WIDGETS[currentRole].filter(
    available => !currentDashboard.widgets.some(w => w.type === available.type)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
      <Header 
        currentRole={currentRole} 
        onRoleChange={handleRoleChange}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        onAddWidget={handleAddWidget}
        onResetDashboard={handleResetDashboard}
        availableWidgetsToAdd={availableWidgetsToAdd}
      />
      <main className="p-4 sm:p-6 lg:p-8">
        <CommandCenter
          role={currentRole}
          dashboard={currentDashboard}
          onLayoutChange={handleLayoutChange}
          isEditing={isEditing}
          onRemoveWidget={handleRemoveWidget}
        />
      </main>
    </div>
  );
};

export default App;