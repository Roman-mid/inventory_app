import React from 'react';

const Th = ({ children }: { children: string }) => {
  return (
    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
      {children}
    </th>
  );
};

export default Th;
