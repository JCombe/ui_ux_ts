import { horizNavBarSVGs } from '../Data/SVGs';
import HorizNavBarBtn from './HorizNavBarBtn';

const HorizNavBar = () => {
  return (
    <div className='flex flex-wrap pl-10 justify-between w-full border-b-2 h-40 bg-white'>
      <div className='flex items-center'>
        <input
          type='text'
          placeholder='Type to search...'
          className='flex outline-none shadow-sm  p-3 border-2 bg-white h-10 w-60 rounded-xl'
        />
      </div>
      <div className='flex items-center mr-10 h-auto'>
        {horizNavBarSVGs.map((element: any, idx: number) => (
          <HorizNavBarBtn icon={element.icon} label={element.label} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default HorizNavBar;
