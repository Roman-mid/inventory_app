import THeader from '../components/Table/THeader';
import SearchBar from '../components/Table/SearchBar';
import Pagination from '../components/Pagination/Pagination';
import TBody from '../components/Table/TBody';
import { getPaginationData } from '../components/Pagination/getPaginationData';
import HeaderPage from '../components/HeaderPage';

const InventoryPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) => {
  const params = await searchParams;

  const { products, totalPages, page, pageSize, q } =
    await getPaginationData(params);

  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='ml-64 p-8'>
        <HeaderPage
          title='Inventory'
          subtitle='Manage your products and track inventory levels.'
        />
        <div className='space-y-6'>
          <SearchBar />
          <div className='bg-white rounded-lg border border-gray-200 overflow-hidden'>
            <table className='w-full'>
              <THeader />
              <TBody products={products} />
            </table>
          </div>
          {totalPages > 1 && (
            <div className='bg-white rounded-lg border border-gray-200 p-6'>
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                baseURL='/inventory'
                searchParams={{
                  q,
                  pageSize: String(pageSize),
                }}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default InventoryPage;
