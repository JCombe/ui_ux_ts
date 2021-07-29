const PeopleComp = ({ img, fname, lname, country, city }: any) => {
  return (
    <div className='flex-col w-100 p-2 m-2 border-1 rounded-lg shadow-sm hover:shadow-lg'>
      <div className='relative flex mb-6'>
        <div
          className='w-52 h-52 m-auto bg-center bg-cover bg-no-repeat rounded-full'
          style={{ backgroundImage: `url(${img})` }}
        />
        <svg
          className='absolute text-gray-400 border-1 rounded-lg right-0 top-0 w-6 h-6 hover:shadow-lg cursor-pointer'
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
      <div className='text-center mb-6'>
        <p className='text-xl font-bold'>
          {fname} {lname}{' '}
        </p>
        <p className='text-gray-400'>
          {city}, {country}
        </p>
      </div>
      <div className='flex flex-wrap w-full justify-between mb-4'>
        <span className='border-2 bg-gray-200 w-max h-content rounded-lg px-3 mx-3 mb-2 cursor-pointer hover:bg-opacity-60'>
          Coocking
        </span>
        <span className='border-2 bg-gray-200 w-max h-content rounded-lg px-3 mx-3 mb-2 cursor-pointer hover:bg-opacity-60'>
          Fashion
        </span>
        <span className='border-2 bg-gray-200 w-max h-content rounded-lg px-3 mx-3 mb-2 cursor-pointer hover:bg-opacity-60'>
          Nice pictures
        </span>
      </div>
      <hr />
      <div className='flex justify-evenly'>
        <span>FB 4m</span>
        <span className='border-l-1 border-r-1 px-16'>1.2m</span>
        <span>37k</span>
      </div>
    </div>
  );
};

export default PeopleComp;
