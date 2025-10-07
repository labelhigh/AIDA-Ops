import React from 'react';
import { SpendVsBudgetData } from '../../types';
import { PiggyBankIcon } from '../icons/Icons';

interface SpendVsBudgetWidgetProps {
    data: SpendVsBudgetData[];
    widgetName: string;
    isEditing: boolean;
}

const SpendVsBudgetWidget: React.FC<SpendVsBudgetWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <PiggyBankIcon className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow w-full px-4 pb-4 space-y-3 overflow-y-auto">
                {data.map(item => {
                    const overBudget = item.spend > item.budget;
                    const percentage = (item.spend / item.budget) * 100;
                    return (
                        <div key={item.category}>
                            <div className="flex justify-between items-baseline mb-1">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{item.category}</p>
                                <p className={`text-sm font-semibold ${overBudget ? 'text-red-500' : 'text-gray-500'}`}>
                                    {item.spend.toLocaleString()} / {item.budget.toLocaleString()}
                                </p>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                                <div
                                    className={`h-4 rounded-full ${overBudget ? 'bg-red-500' : 'bg-orange-500'}`}
                                    style={{ width: `${Math.min(percentage, 100)}%` }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SpendVsBudgetWidget;