'use client';

import { deleteProduct } from '@/lib/actions/deleteProduct';
import { TBodyProps } from './products.type';
import Td from './Td';

const TBody = ({ products }: TBodyProps) => {
  return (
    <tbody className='bg-white divide-y divide-gray-200'>
      {products.map((product) => (
        <tr key={product.id} className='hover:bg-gray-50'>
          <Td>{product.name}</Td>
          <Td>{product.sku || '-'}</Td>
          <Td>{`$${Number(product.price)}`}</Td>
          <Td>{product.quantity}</Td>
          <Td>{product.lowStockAt || '-'}</Td>
          <Td>
            <button
              className='text-red-600 hover:text-red-900 hover:cursor-pointer'
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </Td>
        </tr>
      ))}
    </tbody>
  );
};

export default TBody;
