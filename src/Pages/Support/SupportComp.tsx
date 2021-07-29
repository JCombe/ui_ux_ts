function SupportComp({ icon, title, description }: any) {
  return (
    <div className='w-min border-2 shadow-sm text-center rounded-lg m-4 p-4 h-content cursor-pointer duration-200 hover:shadow-lg'>
      {icon}
      <br />
      <br />
      <p className='text-xl font-bold'>{title}</p>
      <br />
      <p className='text-gray-400'>{description}</p>
      <br />
    </div>
  );
}

export default SupportComp;
