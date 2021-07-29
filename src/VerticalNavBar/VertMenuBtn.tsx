import { NavLink } from 'react-router-dom';

const VertMenuBtn = ({ icon, title, notification, link }: any) => {
  // const [notification, setNotification] = useState(0)

  // const generateRandom = () => {
  //    let randomNr = Math.floor(Math.random()*10)
  //    setNotification(randomNr)
  // }

  // useEffect(() => {
  //     generateRandom()

  // }, [])

  return (
    <NavLink
      activeStyle={{
        color: 'gray',
      }}
      to={link}
    >
      <div>
        <nav>
          <ul>
            <li>
              <div className='group relative flex rounded-lg justify-between p-3 my-4 transition delay-0 duration-300 ease-in-out hover:bg-blue-100 cursor-pointer focus:ring-2'>
                <div className='flex w-min'>
                  <div className='pr-2'>{icon}</div>
                  <p>{title}</p>
                </div>

                <svg
                  className={`text-transparent w-6 h-6 group-hover:text-black`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M19 9l-7 7-7-7'
                  ></path>
                </svg>
                {!notification ? (
                  ''
                ) : (
                  <div className='absolute right-2 bg-red-500 h-6 p-3 flex items-center justify-center rounded-full text-white group-hover:bg-transparent group-hover:text-transparent'>
                    {notification}
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </NavLink>
  );
};

export default VertMenuBtn;
