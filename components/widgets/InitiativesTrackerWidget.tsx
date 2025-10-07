import React from 'react';
import { InitiativeData } from '../../types';
import { TargetIcon } from '../icons/Icons';

interface InitiativesTrackerWidgetProps {
    data: InitiativeData[];
    widgetName: string;
    isEditing: boolean;
}

const InitiativesTrackerWidget: React.FC<InitiativesTrackerWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    const getStatusColor = (status: InitiativeData['status']) => {
        if (status === 'on-track') return 'bg-green-500';
        if (status === 'at-risk') return 'bg-yellow-500';
        return 'bg-red-500';
    }

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <TargetIcon className="h-5 w-5 text-indigo-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow overflow-y-auto px-4 pb-4 -mr-2 pr-2">
                <ul className="space-y-4">
                    {data.map(item => (
                        <li key={item.id}>
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{item.name}</p>
                                <p className="text-sm font-semibold text-gray-800 dark:text-white">{item.progress}%</p>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className={`${getStatusColor(item.status)} h-2 rounded-full`} style={{ width: `${item.progress}%` }}></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InitiativesTrackerWidget;
