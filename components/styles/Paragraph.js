function Paragraph({ firstPart, secondPart, span }) {
  return (
    <div>
      <p className='padding text-lg md:text-xl lg:text-3xl text-center px-6  md:max-w-3xl mx-auto leading-relaxed font-poppins'>
        {firstPart}
        <span className='span'>{span}</span> {secondPart}
      </p>
    </div>
  );
}

export default Paragraph;
