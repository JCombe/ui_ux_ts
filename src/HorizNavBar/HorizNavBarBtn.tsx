const HorizNavBarBtn = ({ icon, label }: any) => {
  return (
    <div className='group flex items-center cursor-pointer'>
      <div className='group-hover:shadow-lg flex text-gray-400 shadow-sm items-center p-2 m-2 h-10 border-2 hover:shadow-lg  rounded-lg'>
        {icon}
      </div>
      {label === 'UserIcon' ? (
        <div className='text-sm'>
          <p className='font-bold'>Super Mario</p>
          <p className='text-gray-400'>Admin</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default HorizNavBarBtn;
