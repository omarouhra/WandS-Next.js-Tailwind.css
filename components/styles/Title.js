function Title({ title, alignementRight }) {
  return (
    <div
      data-aos='fade-in'
      data-aos-duration='500'
      className={
        alignementRight
          ? "flex flex-col text-right items-end w-32"
          : "flex flex-col text-left"
      }>
      <h2 className='font-semibold w-full md:text-xl '>{title}</h2>
      <div className=' w-6 border-b-2 border-black '></div>
    </div>
  );
}

export default Title;
