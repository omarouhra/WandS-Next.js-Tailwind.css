function Paragraph({ firstPart, secondPart, span }) {
  return (
    <div>
      <p className=' paragraph leading-relaxed font-poppin  text-center '>
        {firstPart}
        <span className='span'>{span}</span> {secondPart}
      </p>
    </div>
  );
}

export default Paragraph;
