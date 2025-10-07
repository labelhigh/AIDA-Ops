import React from 'react';
import { PieChartData, Role } from '../../types';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PieChartWidgetProps {
    data: {
        data: PieChartData[];
    },
    role: Role;
    widgetName: string;
    isEditing: boolean;
}

const CEO_COLORS = ['#4f46e5', '#818cf8', '#a5b4fc', '#c7d2fe'];
const SALES_COLORS = ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0'];
const PROC_COLORS = ['#f97316', '#fb923c', '#fdba74', '#fed7aa'];

const PieChartWidget: React.FC<PieChartWidgetProps> = ({ data, role, widgetName, isEditing }) => {
    const colors = role === Role.CEO ? CEO_COLORS : role === Role.Sales ? SALES_COLORS : PROC_COLORS;

    return (
        <div className="h-full flex flex-col">
            <div className={`p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow w-full px-4 pb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie 
                            data={data.data} 
                            cx="50%" 
                            cy="50%" 
                            labelLine={false} 
                            outerRadius={'80%'}
                            innerRadius={'50%'}
                            fill="#8884d8" 
                            dataKey="value" 
                            nameKey="name"
                            label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                        >
                            {data.data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', borderColor: '#4f46e5', borderRadius: '0.5rem' }} />
                        <Legend wrapperStyle={{ fontSize: "14px" }} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PieChartWidget;