const PeopleNavBar = () => {
  return (
    <div className='flex pl-6 flex-wrap w-full h-auto border-b-2 justify-between items-center p-10'>
      <div className='flex mb-6 items-center'>
        <div className='p-6 mr-6 bg-blue-100 items-center rounded-lg'>
          <svg
            className='w-8 h-8 '
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
            ></path>
          </svg>
        </div>
        <div className='flex-col text-lg'>
          <p className='font-bold'>Manage Influencers</p>
          <p className='text-gray-400'>
            Monitor key metrics, check reporting and review insights
          </p>
        </div>
      </div>
      <div className='flex flex-wrap items-center'>
        <input
          type='text'
          placeholder='Find influencer...'
          className='flex outline-none shadow-sm my-2 mr-6 p-3 border-2 bg-white h-10 w-60 rounded-xl'
        />
        <button className='flex bg-blue-500 text-white shadow-sm  p-2 my-2 mr-6  px-6 outline-none rounded-lg duration-300 hover:bg-blue-50 hover:text-blue-500'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            ></path>
          </svg>
          Invite Influencer
        </button>
        <div className='border-2 p-2 my-2  h-10 rounded-xl text-gray-400 hover:shadow-lg cursor-pointer shadow-sm'>
          <svg
            className='w-6 h-6'
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
      </div>
    </div>
  );
};

export default PeopleNavBar;
