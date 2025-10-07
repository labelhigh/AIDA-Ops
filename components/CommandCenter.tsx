import React from 'react';
import { Role, DashboardState, Widget } from '../types';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import WidgetRenderer from './widgets/WidgetRenderer';
import { WIDGET_DATA, AVAILABLE_WIDGETS } from '../constants';
import { XIcon } from './icons/Icons';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface CommandCenterProps {
  role: Role;
  dashboard: DashboardState;
  onLayoutChange: (layout: Layout[]) => void;
  isEditing: boolean;
  onRemoveWidget: (widgetId: string) => void;
}

const CommandCenter: React.FC<CommandCenterProps> = ({ role, dashboard, onLayoutChange, isEditing, onRemoveWidget }) => {
  const roleData = WIDGET_DATA[role];
  const { widgets, layouts } = dashboard;

  return (
    <div>
        <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">你好，{role}</h1>
            <p className="text-gray-500 mt-1">
              {isEditing ? '您正處於編輯模式，可以拖曳、縮放、新增或移除卡片。' : '這是為您量身打造的智慧營運駕駛艙。'}
            </p>
        </div>
        <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: layouts }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={30}
            onLayoutChange={(_, allLayouts) => onLayoutChange(allLayouts.lg)}
            isDraggable={isEditing}
            isResizable={isEditing}
            draggableHandle=".drag-handle"
        >
            {widgets.map((widget: Widget) => (
                <div key={widget.id} className="bg-white dark:bg-gray-800 rounded-xl flex flex-col group relative transition-shadow duration-200 hover:shadow-lg">
                    {isEditing && (
                        <>
                           <div className="absolute inset-0 border-2 border-dashed border-indigo-400 rounded-xl pointer-events-none z-10"></div>
                           <button 
                                onClick={() => onRemoveWidget(widget.id)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-red-600"
                                aria-label="移除卡片"
                           >
                               <XIcon className="w-4 h-4" />
                           </button>
                        </>
                    )}
                    <WidgetRenderer 
                        widget={widget} 
                        role={role} 
                        roleData={roleData} 
                        isEditing={isEditing}
                        widgetName={AVAILABLE_WIDGETS[role].find(w => w.type === widget.type)?.name || ''}
                    />
                </div>
            ))}
        </ResponsiveGridLayout>
    </div>
  );
};

export default CommandCenter;