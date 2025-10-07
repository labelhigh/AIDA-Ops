import React from 'react';
import { KpiData } from '../types';
import { ArrowUpRightIcon, ArrowDownRightIcon } from './icons/Icons';

const KpiCard: React.FC<KpiData> = ({ title, value, change, changeType }) => {
  const isIncrease = changeType === 'increase';

  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-xl transition-colors duration-300">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
      <div className="mt-2 flex items-baseline justify-between">
        <p className="text-3xl font-bold text-gray-800 dark:text-white">{value}</p>
        <div className={`flex items-center text-sm font-semibold ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
          {isIncrease ? <ArrowUpRightIcon className="h-4 w-4" /> : <ArrowDownRightIcon className="h-4 w-4" />}
          <span className="ml-1">{change}</span>
        </div>
      </div>
    </div>
  );
};

export default KpiCard;
