import Image from "next/image";
function Socials() {
  return (
    <section
      data-aos='fade-in'
      data-aos-duration='900'
      className='flex space-x-5 items-center'>
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
  );
}

export default Socials;
