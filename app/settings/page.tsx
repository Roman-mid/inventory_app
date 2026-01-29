import React from 'react';
import HeaderPage from '../components/HeaderPage';
import { AccountSettings } from '@stackframe/stack';

const page = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='ml-64 p-8'>
        <HeaderPage title='Settings' subtitle='Set up your account' />
        <div className='max-w-2xl mt-5'>
          <div className='bg-white rounded-lg border border-gray-300 p-6'></div>
        </div>
        <div className='max-w-6xl'>
          <div className='bg-white rounded-lg border border-gray-200 p-6'>
            <AccountSettings />
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
