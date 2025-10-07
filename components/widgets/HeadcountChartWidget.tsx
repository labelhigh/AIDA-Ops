import React from 'react';
import { ChartData } from '../../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { UsersIcon } from '../icons/Icons';

interface HeadcountChartWidgetProps {
    data: ChartData[];
    widgetName: string;
    isEditing: boolean;
}

const HeadcountChartWidget: React.FC<HeadcountChartWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <UsersIcon className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow w-full px-4 pb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                        <XAxis dataKey="name" tick={{ fill: 'currentColor', fontSize: 11 }} />
                        <YAxis tick={{ fill: 'currentColor', fontSize: 11 }} />
                        <Tooltip contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', borderColor: '#818cf8', borderRadius: '0.5rem' }} />
                        <Bar dataKey="value" fill="#818cf8" radius={[4, 4, 0, 0]} name="員工人數"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default HeadcountChartWidget;