import Input from './Input';
import { createProduct } from '@/lib/actions/createProduct';
import Link from 'next/link';

const AddProductForm = () => {
  return (
    <form action={createProduct} className='space-y-6'>
      <Input
        label='Product Name'
        type='text'
        name='name'
        required
        placeholder='Enter Product Name'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Input
          label='Quantity'
          type='number'
          name='quantity'
          placeholder='0'
          min='0'
          required
        />
        <Input
          label='Price'
          type='number'
          name='price'
          placeholder='0.0'
          min='0'
          step='0.01'
          required
        />
      </div>
      <Input label='SKU' type='text' name='sku' placeholder='Enter SKU' />
      <Input
        label='Low Stock At'
        type='number'
        name='lowStockAt'
        placeholder='Enter Low Stock'
        min='0'
      />
      <div className='flex gap-5'>
        <button
          type='submit'
          className='px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 hover:cursor-pointer'
        >
          Add Product
        </button>
        <Link
          href='/inventory'
          className='px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300'
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default AddProductForm;
