function Links({ link }) {
  return (
    <div className='text-3xl  w-36  h-10 overflow-y-hidden group'>
      <a
        href=''
        className='group-hover:-translate-y-9 flex flex-col transition duration-500 '>
        <p className='font-poppins '>{link}</p>
        <p className='font-poppins'>{link}</p>
      </a>
    </div>
  );
}

export default Links;
