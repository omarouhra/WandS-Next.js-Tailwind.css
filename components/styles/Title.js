function Title({ title ,alignementRight }) {
  return (
    <div className={alignementRight ? 'flex flex-col items-end' :'flex flex-col'}>
      <h2 className='font-poppins font-semibold md:text-xl'>
        {title}
      </h2>
      <div className=' w-6 border-b-2 border-black '></div>
    </div>
  );
}

export default Title;
