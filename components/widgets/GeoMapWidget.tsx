import React from 'react';
import { GeoMapData } from '../../types';
import { GlobeIcon } from '../icons/Icons';

interface GeoMapWidgetProps {
    data: GeoMapData;
    widgetName: string;
    isEditing: boolean;
}

const GeoMapWidget: React.FC<GeoMapWidgetProps> = ({ data, widgetName, isEditing }) => {
    if (!data) return null;

    // Fix: Explicitly type the parameter 'd' to resolve the 'unknown' type from Object.values().
    const maxVal = Math.max(...Object.values(data).map((d: { value: number }) => d.value));
    
    // Simplified positions for major markets on a conceptual map
    const countryPositions: Record<string, {x: string, y: string, name: string}> = {
        US: { x: '20%', y: '35%', name: '美國' },
        CN: { x: '70%', y: '40%', name: '中國' },
        JP: { x: '80%', y: '35%', name: '日本' },
        DE: { x: '48%', y: '30%', name: '德國' },
        GB: { x: '42%', y: '25%', name: '英國' },
    };

    return (
        <div className="h-full flex flex-col">
            <div className={`flex items-center p-4 ${isEditing ? 'drag-handle cursor-grab active:cursor-grabbing' : ''}`}>
                <GlobeIcon className="h-5 w-5 text-blue-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{widgetName}</h3>
            </div>
            <div className="flex-grow w-full px-4 pb-4 relative">
                <svg width="100%" height="100%" viewBox="0 0 500 250">
                    <path d="M250,5 C120,5 5,120 5,125 C5,200 120,245 250,245 C380,245 495,200 495,125 C495,120 380,5 250,5 Z" fill="#e0e7ff" className="dark:fill-gray-700" stroke="#c7d2fe" strokeWidth="1" />
                    {Object.keys(countryPositions).map(code => {
                        const countryData = data[code];
                        if (!countryData) return null;
                        const radius = 5 + (countryData.value / maxVal) * 20;
                        const {x, y, name} = countryPositions[code];
                        return (
                            <g key={code}>
                                <circle cx={x} cy={y} r={radius} fill="rgba(79, 70, 229, 0.6)" stroke="#4f46e5" strokeWidth="2" />
                                <text x={x} y={y} dy={radius + 12} textAnchor="middle" fontSize="10" fill="currentColor" className="font-semibold">{name}</text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};

export default GeoMapWidget;
