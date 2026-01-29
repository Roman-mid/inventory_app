import HeaderPage from '../components/HeaderPage';
import AddProductForm from '../components/AddProductForm/AddProductForm';

const AddProduct = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='ml-64 p-8'>
        <HeaderPage
          title='Add product'
          subtitle='Add a new product to your inventory.'
        />
        <div className='max-w-2xl mt-5'>
          <div className='bg-white rounded-lg border border-gray-300 p-6'>
            <AddProductForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
