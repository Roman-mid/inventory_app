import MetricItem from './MetricItem';
import getMetricsData from './getMetricsData';

const KeyMetrics = async () => {
  const { metricsData } = await getMetricsData();
  return (
    <div className='bg-white rounded-lg border border-gray-200 p-6'>
      <h2 className='text-lg font-semibold text-gray-900 mb-6'>Key Metrics</h2>
      <div className='grid grid-cols-3 gap-6'>
        {metricsData.map((item, ind) => (
          <MetricItem key={ind} label={item.label} value={Number(item.value)} />
        ))}
      </div>
    </div>
  );
};

export default KeyMetrics;
