import React from 'react';
import { ScoreCardData } from '../../types';
import { ArrowUpRightIcon, ArrowDownRightIcon } from '../icons/Icons';

interface ScoreCardWidgetProps {
    data: ScoreCardData;
    widgetName: string;
    isEditing: boolean;
}

const ScoreCardWidget: React.FC<ScoreCardWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    const TrendIcon = data.trend === 'up' ? ArrowUpRightIcon : ArrowDownRightIcon;
    const trendColor = data.trend === 'up' ? 'text-green-500' : 'text-red-500';
    
    return (
        <div className="h-full flex flex-col">
            <div className={`p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow px-4 pb-4 flex flex-col items-center justify-center">
                <p className="text-5xl font-bold text-indigo-500">{data.score.toFixed(1)}</p>
                <div className={`flex items-center mt-2 ${trendColor}`}>
                    {data.trend !== 'flat' && <TrendIcon className="h-5 w-5" />}
                    <p className="text-sm font-semibold ml-1">{data.trend === 'up' ? '持續改善' : '需要關注'}</p>
                </div>
            </div>
        </div>
    );
};

export default ScoreCardWidget;
