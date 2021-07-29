import { url } from 'inspector';
import fbImg from '../../Resources/fb-wallpaper.png';
import mario from '../..//Resources/mario.png';

const DashBFeedComp = () => {
  return (
    <div className='flex-col h-content w-2/3 m-2 my-6 border-1 rounded-lg shadow-sm'>
      <div
        className='relative w-full h-80 bg-center bg-cover bg-no-repeat rounded-t-lg'
        style={{ backgroundImage: `url(${fbImg})` }}
      >
        <div className='absolute -bottom-16 px-4 flex w-full justify-between items-center'>
          <div className='group flex duration-200 cursor-pointer rounded-lg'>
            <div
              className='group-hover:shadow-lg h-20 w-20 bg-center bg-cover bg-no-repeat rounded-lg'
              style={{ backgroundImage: `url(${mario})` }}
            ></div>
            <div className='mt-8 ml-4'>
              <p className='font-bold'> Todd</p>
              <p className='text-gray-300'>@Booster</p>
            </div>
          </div>

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
      </div>
      <div className='mt-28 w-full flex-col px-4'>
        <div className='my-10'>
          <div className='flex mb-6 items-center'>
            <span className='border-2 bg-green-200 h-content rounded-lg px-6 mr-4 cursor-pointer hover:bg-opacity-60'>
              Tips
            </span>
            <span className='border-2 bg-blue-200 h-content rounded-lg px-6 mr-4 cursor-pointer hover:bg-opacity-60'>
              Development
            </span>
          </div>
          <div className='mb-6'>
            <p className='text-xl font-bold'>
              How communication increases the chances of victory
            </p>
            <br />
            <p className='text-gray-400'>
              My wealth and treasures? If you want it, you can have it! Search
              for it! I left it all at that place!
            </p>
          </div>
          <div className='text-gray-400'>
            <span className='mr-6'>9 mins read</span>
            <span>7 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBFeedComp;
