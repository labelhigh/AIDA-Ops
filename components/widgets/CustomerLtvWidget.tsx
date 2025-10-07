import React from 'react';
import { CustomerLtvData } from '../../types';
import { ArrowUpRightIcon, ArrowDownRightIcon } from '../icons/Icons';
import { SparklesIcon } from '../icons/Icons';


interface CustomerLtvWidgetProps {
    data: CustomerLtvData;
    widgetName: string;
    isEditing: boolean;
}

const CustomerLtvWidget: React.FC<CustomerLtvWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    const TrendIcon = data.trend === 'up' ? ArrowUpRightIcon : ArrowDownRightIcon;
    const trendColor = data.trend === 'up' ? 'text-green-500' : 'text-red-500';

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <SparklesIcon className="h-5 w-5 text-yellow-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow px-4 pb-4 flex flex-col items-center justify-center">
                <p className="text-4xl font-bold text-gray-800 dark:text-white">NT$ {data.ltv.toLocaleString()}</p>
                <div className={`flex items-center mt-2 ${trendColor}`}>
                    {data.trend !== 'flat' && <TrendIcon className="h-5 w-5" />}
                    <p className="text-sm font-semibold ml-1">{data.period}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerLtvWidget;