import { BarChart3 } from 'lucide-react';

const Logo = () => {
  return (
    <div className='mb-8'>
      <div className='flex items-center space-x-2 mb-4'>
        <BarChart3 className='w-7 h-7' />
        <span className='text-lg font-semibold'>Inventory App</span>
      </div>
    </div>
  );
};

export default Logo;
