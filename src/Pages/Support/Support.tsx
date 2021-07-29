import { settingsData } from '../../Data/SVGs';
import SupportComp from './SupportComp';

function Support() {
  return (
    <div className='flex flex-wrap justify-evenly'>
      {settingsData.map((element, idx) => (
        <SupportComp
          icon={element.icon}
          title={element.title}
          description={element.description}
          key={idx}
        />
      ))}
    </div>
  );
}

export default Support;
