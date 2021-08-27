import Links from "./animation/Links";

function Menu(isMenuOpen) {
  return (
    <section id='menu' className={isMenuOpen ? "bg bg-active" : "bg bg"}>
      <section
        className={ isMenuOpen  ? " menu menu-active" : " menu menu-hidden"}>
        {/* socials */}
        <section className='flex md:space-x-24'>
          <section className='hidden md:flex md:flex-col'>
            <p className='text-gray-dark font-poppins mb-12 text-sm'>Socials</p>
            <section className='space-y-4 flex flex-col text-sm font-poppins'>
              <a href=''>Facebook</a>
              <a href=''>Instagram</a>
              <a href=''>Twitter</a>
            </section>
          </section>

          {/* Menu */}
          <section>
            <p className='text-gray-dark font-poppins mb-12 text-sm'>Menu</p>
            <section className='space-y-8'>
              <Links link='About' />
              <Links link='Services' />
              <Links link='Projects' />
              <Links link='Contacts' />
            </section>
          </section>
        </section>

        <a className='font-poppins underline font-semibold cursor-pointer'>
          Contact@w&s.se
        </a>
      </section>
    </section>
  );
}

export default Menu;
