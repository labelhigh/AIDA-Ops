import React from 'react';
import { TimeSeriesData } from '../../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface MainChartWidgetProps {
    data: {
        data: TimeSeriesData[];
        keys: { name: string; color: string }[];
    },
    widgetName: string;
    isEditing: boolean;
}

const MainChartWidget: React.FC<MainChartWidgetProps> = ({ data, widgetName, isEditing }) => {
    return (
        <div className="h-full flex flex-col">
            <div className={`p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow w-full px-4 pb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data.data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                        <XAxis dataKey="month" tick={{ fill: 'currentColor', fontSize: 12 }} />
                        <YAxis tick={{ fill: 'currentColor', fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', borderColor: '#4f46e5', borderRadius: '0.5rem' }} />
                        <Legend wrapperStyle={{ fontSize: "14px" }} />
                        {data.keys.map((key) => (
                            <Line key={key.name} type="monotone" dataKey={key.name} stroke={key.color} strokeWidth={2} activeDot={{ r: 8 }} />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MainChartWidget;