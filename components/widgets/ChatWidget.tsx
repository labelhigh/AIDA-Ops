import React from 'react';
import { Role } from '../../types';
import ChatInterface from '../ChatInterface';
import { SparklesIcon } from '../icons/Icons';

interface ChatWidgetProps {
    role: Role;
    widgetName: string;
    isEditing: boolean;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ role, widgetName, isEditing }) => {
    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <SparklesIcon className="h-5 w-5 text-indigo-400 mr-3"/>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow px-4 pb-4 overflow-hidden">
                <ChatInterface role={role} />
            </div>
        </div>
    );
};

export default ChatWidget;