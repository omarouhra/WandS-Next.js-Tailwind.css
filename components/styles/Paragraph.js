function Paragraph({ firstPart, secondPart, span, blueSpane }) {
  return (
    <div data-aos='fade-up' data-aos-duration='500'>
      <p className=' text-lg md:text-2xl lg:text-3xl  px-2  md:max-w-3xl mx-auto text-center leading-loose md:leading-loose lg:leading-loose '>
        {firstPart}
        <span className={blueSpane ? "span text-blue-dark" : "span"}>
          {span}
        </span>{" "}
        {secondPart}
      </p>
    </div>
  );
}

export default Paragraph;
