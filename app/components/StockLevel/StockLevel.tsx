import React from 'react';
import getMetricsData from '../Metrics/getMetricsData';

const bgColor = ['bg-red-600', 'bg-yellow-600', 'bg-green-600'];
const textColor = ['text-red-600', 'text-red-600', 'text-green-600'];

const StockLevel = async () => {
  const { recent } = await getMetricsData();
  return (
    <div className='bg-white rounded-lg border border-gray-200 p-6'>
      <div className='flex place-items-center justify-between mb-6'>
        <h2 className='text-lg font-semibold text-gray-900'>Stock Levels</h2>
      </div>
      <div className='space-y-3'>
        {recent.map((product, ind) => {
          const stockLevel =
            product.quantity === 0
              ? 0
              : product.quantity <= (product.lowStockAt || 5)
                ? 1
                : 2;

          return (
            <div
              key={ind}
              className='flex items-center justify-between p-3 rounded-lg bg-gray-50'
            >
              <div className='flex items-center space-x-3'>
                <div
                  className={`w-3 h-3 rounded-full ${bgColor[stockLevel]}`}
                />
                <span className='text-sm font-medium text-gray-700'>
                  {product.name}
                </span>
              </div>
              <div className={`text-sm font-medium ${textColor[stockLevel]}`}>
                {product.quantity} units
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StockLevel;
