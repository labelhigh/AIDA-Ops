import React from 'react';
import { ChartData } from '../../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartBarIcon } from '../icons/Icons';

interface SimpleBarChartWidgetProps {
    data: ChartData[];
    color: string;
    widgetName: string;
    isEditing: boolean;
}

const SimpleBarChartWidget: React.FC<SimpleBarChartWidgetProps> = ({ data, color, widgetName, isEditing }) => {
    if (!data) return null;

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <ChartBarIcon className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow w-full px-4 pb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="name" tick={{ fill: 'currentColor', fontSize: 12 }} width={80} />
                        <Tooltip contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', borderColor: color, borderRadius: '0.5rem' }} />
                        <Bar dataKey="value" fill={color} radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SimpleBarChartWidget;
