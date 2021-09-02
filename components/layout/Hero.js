import Socials from "../styles/Socials";

function Hero() {
  return (
    <section className='  lg:max-w-[80vw] xl:max-w-[70vw] mx-auto px-6 py-14   md:py-20 space-y-10 md:space-y-16'>
      <article data-aos='fade-up' data-aos-duration='700'>
        <h1 className='text-4xl leading-relaxed mb-8 md:text-6xl md:leading-relaxed  '>
          A <span className='span text-blue-dark'>Digital Agency</span>
          <br /> in Stockholm 👋!
        </h1>
        <a className='text-sm span hover:underline' href='#'>
          Direction
        </a>{" "}
        |{" "}
        <a className='text-sm span hover:underline' href='#'>
          Email
        </a>{" "}
        |{" "}
        <a className='text-sm span hover:underline' href='#'>
          Call
        </a>
      </article>

      <article
        className='w-full flex flex-col items-end '
        data-aos='fade-up'
        data-aos-duration='500'
      data-aos-delay="200">
        <p className='text-sm text-right  leading-loose w-xs sm:max-w-md mb-4 md:text-base md:leading-loose'>
          We are a Tech Partner with a genuine passion for developing{" "}
          <span className='span'>great products</span> and services together
          with our clients.
        </p>
        <Socials />
      </article>
    </section>
  );
}

export default Hero;
