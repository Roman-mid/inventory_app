import KeyMetrics from '../components/Metrics/KeyMetrics';
import ProductsChartList from '../components/ProductsChart/ProductsChartList';
import StockLevel from '../components/StockLevel/StockLevel';
import Efficiency from '../components/Efficiency/Efficiency';
import HeaderPage from '../components/HeaderPage';

const Dashboard = async () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='ml-64 p-8'>
        <div className='mb-8'>
          <HeaderPage
            title='Dashboard'
            subtitle='Welcome back! Here is an overview of your inventory.'
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <KeyMetrics />
          <ProductsChartList />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <StockLevel />
          <Efficiency />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
