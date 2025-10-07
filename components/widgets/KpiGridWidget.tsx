import React from 'react';
import { KpiData } from '../../types';
import KpiCard from '../KpiCard';

interface KpiGridWidgetProps {
    data: KpiData[];
    widgetName: string;
    isEditing: boolean;
}

const KpiGridWidget: React.FC<KpiGridWidgetProps> = ({ data, widgetName, isEditing }) => {
    return (
        <div className="h-full flex flex-col">
            <div className={`p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow px-4 pb-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                    {data.map((kpi) => (
                        <KpiCard key={kpi.title} {...kpi} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KpiGridWidget;