function Paragraph({ firstPart, secondPart, span }) {
  return (
    <div>
      <p className=' text-lg md:text-2xl lg:text-4xl  px-6  md:max-w-3xl mx-auto font-poppin  text-center leading-loose'>
        {firstPart}
        <span className='span'>{span}</span> {secondPart}
      </p>
    </div>
  );
}

export default Paragraph;
