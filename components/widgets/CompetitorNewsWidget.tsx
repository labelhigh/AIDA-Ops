import React from 'react';
import { CompetitorNewsData } from '../../types';
import { RssIcon } from '../icons/Icons';

interface CompetitorNewsWidgetProps {
    data: CompetitorNewsData[];
    widgetName: string;
    isEditing: boolean;
}

const CompetitorNewsWidget: React.FC<CompetitorNewsWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <RssIcon className="h-5 w-5 text-orange-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow overflow-y-auto px-4 pb-4 -mr-2 pr-2">
                <ul className="space-y-4">
                    {data.map(item => (
                        <li key={item.id}>
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.headline}</p>
                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                <span>{item.source}</span>
                                <span>{item.time}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CompetitorNewsWidget;