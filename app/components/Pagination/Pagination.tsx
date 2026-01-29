import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { getVisiblePages } from './getVisiblePages';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseURL: string;
  searchParams: Record<string, string>;
}

const Pagination = ({
  baseURL,
  currentPage,
  searchParams,
  totalPages,
}: PaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams({ ...searchParams, page: String(page) });
    return `${baseURL}?${params.toString()}`;
  };

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav className='flex items-center justify-center gap-1'>
      <Link
        href={getPageUrl(currentPage - 1)}
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${currentPage <= 1 ? 'pointer-events-none text-gray-400 bg-gray-100' : 'text.gray-700 hover:bg-gray-100 bg-white border border-gray-300'}`}
        aria-disabled={currentPage === 1}
      >
        <ChevronLeft /> Prevous
      </Link>
      {visiblePages.map((page, ind) => {
        if (page === '...') {
          return (
            <span key={ind} className='px-3 py-2 text-sm text-gray-500'>
              ...
            </span>
          );
        }
        const pageNumber = page as number;
        const isCurrentPage = pageNumber === currentPage;

        return (
          <Link
            key={ind}
            href={getPageUrl(pageNumber)}
            className={`px-3 py-2 font-medium rounded-lg ${isCurrentPage ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100 bg-white border border-gray-300'}`}
          >
            {pageNumber}
          </Link>
        );
      })}
      <Link
        href={getPageUrl(currentPage + 1)}
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${currentPage >= totalPages ? 'pointer-events-none text-gray-400 bg-gray-100' : 'text.gray-700 hover:bg-gray-100 bg-white border border-gray-300'}`}
        aria-disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight />
      </Link>
    </nav>
  );
};

export default Pagination;
