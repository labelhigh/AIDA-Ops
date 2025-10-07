import React from 'react';
import { LeaderboardItem } from '../../types';
import { TrophyIcon } from '../icons/Icons';

interface LeaderboardWidgetProps {
    data: LeaderboardItem[];
    widgetName: string;
    isEditing: boolean;
}

const LeaderboardWidget: React.FC<LeaderboardWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                 <TrophyIcon className="h-5 w-5 text-yellow-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow overflow-y-auto px-4 pb-4 -mr-2 pr-2">
                <ul className="space-y-3">
                    {data.map((item, index) => (
                        <li key={item.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <div className="flex items-center space-x-3">
                                <span className={`font-bold text-lg w-6 text-center ${index < 3 ? 'text-yellow-500' : 'text-gray-400'}`}>{index + 1}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${item.avatar === 'M' ? 'bg-blue-500' : 'bg-pink-500'}`}>
                                    {item.name.charAt(0)}
                                </div>
                                <p className="font-semibold text-gray-700 dark:text-gray-200">{item.name}</p>
                            </div>
                            <p className="font-bold text-green-500">NT$ {item.value.toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LeaderboardWidget;
