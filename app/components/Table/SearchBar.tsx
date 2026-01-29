import React from 'react';

const SearchBar = () => {
  return (
    <div className='bg-white rounded-lg border border-gray-200 p-6 mt-5'>
      <form action='/inventory' method='GET' className='flex gap-2'>
        <input
          name='q'
          placeholder='Search products...'
          className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent'
        />
        <button className='px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 hover:cursor-pointer'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
