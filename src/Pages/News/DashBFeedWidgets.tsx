import React from 'react';
import graph from '../../Resources/graph.png';

const DashBFeedWidgets = () => {
  return (
    <div className='flex-col h-content m-2 my-6 w-max border-1 rounded-lg '>
      <div className='flex m-2 items-center justify-between'>
        <p className='text-xl font-bold '>Article views</p>
        <svg
          className='text-gray-300 w-6 h-6 rounded-lg hover:shadow-lg  cursor-pointer border-2 shadow-sm'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
          ></path>
        </svg>
      </div>

      <br />
      <div className='flex m-2 items-baseline'>
        <p className='text-xl font-bold mr-4'>15.6K</p>
        <p className='text-gray-300'>views in last 30 days</p>
      </div>
      <div
        className='h-60 w-80 bg-center bg-cover bg-no-repeat rounded-b-lg'
        style={{ backgroundImage: `url(${graph})` }}
      />
    </div>
  );
};

export default DashBFeedWidgets;
