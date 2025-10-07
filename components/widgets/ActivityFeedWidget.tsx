import React from 'react';
import { ActivityItem } from '../../types';
import { MessageCircleIcon } from '../icons/Icons';

interface ActivityFeedWidgetProps {
    data: ActivityItem[];
    widgetName: string;
    isEditing: boolean;
}

const ActivityFeedWidget: React.FC<ActivityFeedWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;
    
    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <MessageCircleIcon className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow overflow-y-auto px-4 pb-4 -mr-2 pr-2">
                <ul className="space-y-4">
                    {data.map((item) => (
                        <li key={item.id} className="flex space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex-shrink-0"></div>
                            <div>
                                <p className="text-sm text-gray-800 dark:text-gray-200">
                                    <span className="font-semibold">{item.user}</span> {item.action} <span className="font-semibold text-indigo-500">{item.target}</span>
                                </p>
                                <p className="text-xs text-gray-400">{item.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ActivityFeedWidget;
