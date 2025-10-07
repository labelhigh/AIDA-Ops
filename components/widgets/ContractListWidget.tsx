import React from 'react';
import { ContractData } from '../../types';
import { FileTextIcon } from '../icons/Icons';

interface ContractListWidgetProps {
    data: ContractData[];
    widgetName: string;
    isEditing: boolean;
}

const ContractListWidget: React.FC<ContractListWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    const getUrgencyColor = (days: number) => {
        if (days < 30) return 'bg-red-500';
        if (days < 90) return 'bg-yellow-500';
        return 'bg-green-500';
    }

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <FileTextIcon className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow overflow-y-auto px-4 pb-4 -mr-2 pr-2">
                <ul className="space-y-3">
                    {data.map(item => (
                        <li key={item.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <div>
                                <p className="font-semibold text-gray-700 dark:text-gray-200">{item.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.client}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className={`text-sm font-bold text-white px-2 py-1 rounded-full ${getUrgencyColor(item.expiresInDays)}`}>
                                    {item.expiresInDays} 天
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContractListWidget;
