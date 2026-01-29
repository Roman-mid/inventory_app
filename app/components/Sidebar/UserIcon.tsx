import { UserButton } from '@stackframe/stack';
import React from 'react';

const UserIcon = () => {
  return (
    <div className='absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700'>
      <div className='flex items-center justify-between'>
        <UserButton showUserInfo />
      </div>
    </div>
  );
};

export default UserIcon;
