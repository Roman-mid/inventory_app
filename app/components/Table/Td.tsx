import React from 'react';

const Td = ({
  children,
}: {
  children: string | number | null | React.ReactNode;
}) => {
  return <td className='px-6 py-4 text-sm text-gray-500'>{children}</td>;
};

export default Td;
