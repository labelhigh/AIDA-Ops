import React from 'react';
import { SupplierRiskData } from '../../types';
import { AlertTriangleIcon } from '../icons/Icons';

interface SupplierRiskWidgetProps {
    data: SupplierRiskData[];
    widgetName: string;
    isEditing: boolean;
}

const SupplierRiskWidget: React.FC<SupplierRiskWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    const getPosition = (risk: SupplierRiskData['riskLevel'], spend: number) => {
        const x = spend > 400000 ? '75%' : '25%'; // High/Low spend
        const y = risk === 'high' ? '25%' : risk === 'medium' ? '50%' : '75%'; // High/Medium/Low risk
        return { x, y };
    }

    const getRiskColor = (risk: SupplierRiskData['riskLevel']) => {
        if (risk === 'high') return 'fill-red-500';
        if (risk === 'medium') return 'fill-yellow-500';
        return 'fill-green-500';
    }

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <AlertTriangleIcon className="h-5 w-5 text-orange-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow w-full px-4 pb-4 relative">
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                    {/* Axes */}
                    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" />

                    {/* Labels */}
                    <text x="50" y="5" textAnchor="middle" fontSize="5" fill="currentColor">高採購額</text>
                    <text x="50" y="98" textAnchor="middle" fontSize="5" fill="currentColor">低採購額</text>
                    <text x="5" y="50" textAnchor="start" dominantBaseline="middle" fontSize="5" fill="currentColor">低風險</text>
                    <text x="95" y="50" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="currentColor">高風險</text>

                    {/* Data points */}
                    {data.map(supplier => {
                       const { x, y } = getPosition(supplier.riskLevel, supplier.spend);
                       return (
                           <g key={supplier.id}>
                               <circle cx={x} cy={y} r="4" className={getRiskColor(supplier.riskLevel)} opacity="0.7" />
                               <text x={x} y={y} dy="7" textAnchor="middle" fontSize="4" fill="currentColor">{supplier.name.substring(0,4)}</text>
                           </g>
                       )
                    })}
                </svg>
            </div>
        </div>
    );
};

export default SupplierRiskWidget;
