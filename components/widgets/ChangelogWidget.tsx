import React from 'react';
import Changelog from '../Changelog';
import { NewspaperIcon } from '../icons/Icons';

interface ChangelogWidgetProps {
    widgetName: string;
    isEditing: boolean;
}

const ChangelogWidget: React.FC<ChangelogWidgetProps> = ({ widgetName, isEditing }) => {
    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <NewspaperIcon className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow px-4 pb-4 overflow-hidden">
                <Changelog />
            </div>
        </div>
    );
};

export default ChangelogWidget;