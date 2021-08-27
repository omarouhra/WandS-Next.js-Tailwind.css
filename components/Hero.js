import Image from "next/image";

function Hero() {
  return (
    <section className='xl:max-w-[1300px] md:max-w-[1000px] mx-auto px-6  py-28 space-y-16'>
      <article className=' animate-fade-in'>
        <h1 className='text-4xl  font-poppins leading-relaxed mb-8 md:text-6xl md:leading-relaxed  '>
          A <span className='span text-blue-dark'>Digital Agency</span>
          <br /> in Stockholm 👋!
        </h1>
        <a className='text-sm span' href='#'>
          Direction
        </a>{" "}
        |{" "}
        <a className='text-sm span' href='#'>
          Email
        </a>{" "}
        |{" "}
        <a className='text-sm span' href='#'>
          Call
        </a>
      </article>

      <article className='w-full flex flex-col items-end animate-fade-in-delay'>
        <p className='text-sm text-right leading-loose w-xs sm:max-w-md mb-4 md:text-base md:leading-loose'>
          We are a Tech Partner with a genuine passion for developing{" "}
          <span className='span'>great products</span> and services together
          with our clients.
        </p>
        <section className='flex space-x-5 items-center '>
          <a target='_blank' href='https://www.instagram.com/willandskill/'>
            <Image
              width='18px'
              height='18px'
              src='https://www.svgrepo.com/show/303195/instagram-glyph-1-logo.svg'
              alt='instagram icon'
            />
          </a>
          <a target='_blank' href='https://www.facebook.com/WillAndSkill'>
            <Image
              width='22px'
              height='22px'
              src='https://www.svgrepo.com/show/332056/facebook.svg'
              alt='facebook icon'
            />
          </a>
          <a target='_blank' href='https://www.linkedin.com/company/3506216'>
            <Image
              width='18px'
              height='18px'
              src='https://www.svgrepo.com/show/128403/linkedin.svg'
              alt='twiter icon'
            />
          </a>
        </section>
      </article>
    </section>
  );
}

export default Hero;
