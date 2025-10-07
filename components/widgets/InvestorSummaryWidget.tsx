import React from 'react';
import { InvestorSummaryData } from '../../types';
import { TrendingUpIcon, ArrowUpRightIcon, ArrowDownRightIcon } from '../icons/Icons';

interface InvestorSummaryWidgetProps {
    data: InvestorSummaryData;
    widgetName: string;
    isEditing: boolean;
}

const InvestorSummaryWidget: React.FC<InvestorSummaryWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    const isPositive = data.change >= 0;

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <TrendingUpIcon className="h-5 w-5 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow px-4 pb-4 flex flex-col justify-between">
                <div>
                    <p className="text-3xl font-bold text-gray-800 dark:text-white">NT$ {data.stockPrice.toFixed(2)}</p>
                    <div className={`flex items-center text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                        {isPositive ? <ArrowUpRightIcon className="h-4 w-4" /> : <ArrowDownRightIcon className="h-4 w-4" />}
                        <span className="ml-1">{isPositive ? '+' : ''}{data.change.toFixed(2)} ({((data.change / (data.stockPrice - data.change)) * 100).toFixed(2)}%)</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm mt-4">
                    <div>
                        <p className="text-gray-500">市值</p>
                        <p className="font-semibold text-gray-700 dark:text-gray-200">{data.marketCap}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">本益比</p>
                        <p className="font-semibold text-gray-700 dark:text-gray-200">{data.peRatio.toFixed(1)}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-gray-500">下次財報會議</p>
                        <p className="font-semibold text-gray-700 dark:text-gray-200">{data.nextEarnings}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestorSummaryWidget;