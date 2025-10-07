import React from 'react';
import { GaugeData, Role } from '../../types';
import { ScaleIcon } from '../icons/Icons';

interface GaugeWidgetProps {
    data: GaugeData;
    widgetName: string;
    isEditing: boolean;
}

const GaugeWidget: React.FC<GaugeWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    const { value, target, label } = data;
    const percentage = Math.min(Math.max((value / target) * 100, 0), 100);
    const angle = -90 + (percentage * 1.8);

    const color = percentage >= 80 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444';

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                 <ScaleIcon className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow w-full px-4 pb-4 flex flex-col items-center justify-center">
                <svg viewBox="0 0 120 70" className="w-full h-auto">
                    <path d="M10 60 A 50 50 0 0 1 110 60" stroke="#e5e7eb" className="dark:stroke-gray-700" strokeWidth="10" fill="none" />
                    <path d="M10 60 A 50 50 0 0 1 110 60" stroke={color} strokeWidth="10" fill="none" strokeDasharray="157" strokeDashoffset={157 - (percentage / 100) * 157} strokeLinecap="round" />
                    <text x="60" y="45" textAnchor="middle" className="text-2xl font-bold fill-current text-gray-800 dark:text-white">{`${percentage.toFixed(0)}%`}</text>
                    <text x="60" y="60" textAnchor="middle" className="text-xs fill-current text-gray-500">{`${value.toLocaleString()} / ${target.toLocaleString()} ${label}`}</text>
                </svg>
            </div>
        </div>
    );
};

export default GaugeWidget;
