import React from 'react';
import { SalesFunnelData } from '../../types';
import { FilterIcon } from '../icons/Icons';

interface SalesFunnelWidgetProps {
    data: SalesFunnelData[];
    widgetName: string;
    isEditing: boolean;
}

const SalesFunnelWidget: React.FC<SalesFunnelWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    const colors = ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'];
    const maxVal = Math.max(...data.map(d => d.value));

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <FilterIcon className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow w-full px-4 pb-4 flex flex-col justify-center space-y-2">
                {data.map((item, index) => (
                    <div key={item.stage} className="flex items-center">
                        <div className="w-1/3 text-right pr-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.stage}</p>
                        </div>
                        <div className="w-2/3">
                            <div
                                className="h-8 flex items-center justify-end pr-2 rounded"
                                style={{
                                    width: `${(item.value / maxVal) * 100}%`,
                                    backgroundColor: colors[index % colors.length],
                                }}
                            >
                                <p className="text-sm font-bold text-white">{item.value.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalesFunnelWidget;