import { TrendingUp } from 'lucide-react';
import React from 'react';

interface MetricItemProps {
  value: number;
  label: string;
}

const MetricItem = ({ value, label }: MetricItemProps) => {
  return (
    <div className='text-center'>
      <p className='text-3xl font-bold text-purple-600'>{value}</p>
      <p className='text-sm text-gray-600'>{label}</p>
      <div className='flex items-center justify-center mt-1'>
        <span className='text-xs text-green-600'>+{value}</span>
        <TrendingUp className='w-3 h-3 text-green-600 ml-1' />
      </div>
    </div>
  );
};

export default MetricItem;
