import { useEffect, useState } from 'react';
import { GetUserData } from '../../Data/RandomUser';
import PeopleComp from './PeopleComp';
import PeopleNavBar from './PeopleNavBar';

const People = () => {
  const [userData, setUserData] = useState([]);

  const setRandomUserData = async () => {
    const data: any = await GetUserData;
    setUserData(data);
  };

  console.log(userData);

  useEffect(() => {
    setRandomUserData();
  }, []);
  return (
    <div>
      <PeopleNavBar />
      <div className='flex flex-wrap justify-evenly'>
        {userData.map((user: any, idx: number) => (
          <PeopleComp
            img={user.picture.large}
            fname={user.name.first}
            lname={user.name.last}
            country={user.location.country}
            city={user.location.city}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default People;
