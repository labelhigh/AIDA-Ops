import React from 'react';
import { PurchaseOrderData } from '../../types';
import { ReceiptIcon } from '../icons/Icons';

interface RecentPoWidgetProps {
    data: PurchaseOrderData[];
    widgetName: string;
    isEditing: boolean;
}

const RecentPoWidget: React.FC<RecentPoWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;
    
    const getStatusChip = (status: PurchaseOrderData['status']) => {
        switch(status) {
            case 'completed': return <span className="text-xs font-medium text-green-800 bg-green-100 dark:text-green-300 dark:bg-green-900 px-2 py-1 rounded-full">已完成</span>;
            case 'shipped': return <span className="text-xs font-medium text-blue-800 bg-blue-100 dark:text-blue-300 dark:bg-blue-900 px-2 py-1 rounded-full">已出貨</span>;
            case 'pending': return <span className="text-xs font-medium text-yellow-800 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900 px-2 py-1 rounded-full">待審批</span>;
        }
    }

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <ReceiptIcon className="h-5 w-5 text-gray-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow overflow-y-auto px-4 pb-4 -mr-2 pr-2">
                <ul className="space-y-3">
                    {data.map(item => (
                        <li key={item.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <div>
                                <p className="font-semibold text-gray-700 dark:text-gray-200">{item.id}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.supplier}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-orange-500">NT$ {item.amount.toLocaleString()}</p>
                                {getStatusChip(item.status)}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecentPoWidget;
