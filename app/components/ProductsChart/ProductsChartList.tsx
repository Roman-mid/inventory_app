import ProductChart from './ProductsChart';
import { getWeeklyProductsData } from './getWeeklyProductsData';

const ProductsChartList = async () => {
  const weeklyProductsData = await getWeeklyProductsData();

  return (
    <div className='bg-white rounded-lg border border-gray-200 p-6'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-lg font-semibold text-gray-900 mb-6'>
          New products per week
        </h2>
      </div>
      <div className='h-48'>
        <ProductChart data={weeklyProductsData} />
      </div>
    </div>
  );
};

export default ProductsChartList;
