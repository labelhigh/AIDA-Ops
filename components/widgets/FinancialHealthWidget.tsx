import React from 'react';
import { FinancialHealthData } from '../../types';
import { LibraryIcon } from '../icons/Icons';

interface FinancialHealthWidgetProps {
    data: FinancialHealthData[];
    widgetName: string;
    isEditing: boolean;
}

const FinancialHealthWidget: React.FC<FinancialHealthWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    const getStatusColor = (status: FinancialHealthData['status']) => {
        if (status === 'healthy') return 'bg-green-500';
        if (status === 'warning') return 'bg-yellow-500';
        return 'bg-red-500';
    }

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <LibraryIcon className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow overflow-y-auto px-4 pb-4 -mr-2 pr-2">
                <ul className="space-y-3">
                    {data.map(item => (
                        <li key={item.metric} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <p className="font-medium text-gray-700 dark:text-gray-200">{item.metric}</p>
                            <div className="flex items-center space-x-2">
                                <span className="font-bold text-lg text-gray-800 dark:text-white">{item.value}</span>
                                <span className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FinancialHealthWidget;