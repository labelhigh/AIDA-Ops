import React from 'react';
import { TopProduct, TopSupplier, Role } from '../../types';
import { BuildingStorefrontIcon } from '../icons/Icons';

interface TopListWidgetProps {
    data: {
        data: (TopProduct[] | TopSupplier[]);
        valueLabel: string;
    },
    role: Role;
    widgetName: string;
    isEditing: boolean;
}

const TopListWidget: React.FC<TopListWidgetProps> = ({ data, role, widgetName, isEditing }) => {
    
    const renderItemValue = (item: TopProduct | TopSupplier) => {
        const value = 'value' in item ? item.value : 0;
        const color = role === Role.CEO ? 'text-indigo-500' 
                    : role === Role.Sales ? 'text-green-500' 
                    : 'text-orange-500';
        return (
            <p className={`font-bold text-lg ${color}`}>
                {data.valueLabel === 'NT$' && `${data.valueLabel} `}{value.toLocaleString()} 
                {data.valueLabel !== 'NT$' && <span className="text-sm font-normal text-gray-500 ml-1">{data.valueLabel}</span>}
            </p>
        );
    }
    
    return (
        <div className="h-full flex flex-col">
            <div className={`p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow overflow-y-auto px-4 pb-4 -mr-2 pr-2">
                <ul className="space-y-4">
                    {data.data.map((item) => (
                        <li key={item.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <div className="flex items-center space-x-3">
                                {role === Role.Procurement && <BuildingStorefrontIcon className="w-6 h-6 text-gray-400 flex-shrink-0" />}
                                <div>
                                    <p className="font-semibold text-gray-700 dark:text-gray-200">{item.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">ID: {item.id}</p>
                                </div>
                            </div>
                            {renderItemValue(item)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TopListWidget;