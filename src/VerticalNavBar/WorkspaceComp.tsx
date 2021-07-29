import React from 'react';

const WorkspaceComp = ({ iconMain, label, iconSec }: any) => {
  return (
    <div className='flex border-2 items-center p-2 rounded-lg w-full justify-between transition delay-0 duration-300 ease-in-out hover:bg-blue-100 cursor-pointer'>
      <div className='flex'>
        {iconMain}
        <div className='flex-col'>
          <p>{label}</p>
          <p className='text-gray-400'>Workspace</p>
        </div>
      </div>

      <div>{iconSec}</div>
    </div>
  );
};

export default WorkspaceComp;
