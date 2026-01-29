interface StockDataProps {
  label: string;
  value: number;
}

const StockData = ({ label, value }: StockDataProps) => {
  return (
    <div className='flex items-center justify-between text-sm text-gray-600'>
      <div className='flex items-center space-x-2'>
        <div className='w-3 h-3 rounded-full bg-purple-200' />
        <span>
          {label} ({value}%)
        </span>
      </div>
    </div>
  );
};

export default StockData;
