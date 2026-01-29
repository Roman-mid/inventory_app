import React from 'react';

interface HeaderPageProps {
  title: string;
  subtitle: string;
}

const HeaderPage = ({ title, subtitle }: HeaderPageProps) => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h1 className='text-2xl font-semibold text-gray-900'>{title}</h1>
        <p className='txt-sm text-gray-500'>{subtitle}</p>
      </div>
    </div>
  );
};

export default HeaderPage;
