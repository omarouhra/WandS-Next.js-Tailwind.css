function Links({ link, href, setIsMenuOpen }) {
  return (
    <div className='text-3xl  w-36  h-9 overflow-y-hidden group'>
      <button
        onClick={() => {
          const html = document.querySelector("html");
          html.style.scrollBehavior = "smooth";
          setIsMenuOpen(false);
        }}>
        <a
          href={href}
          className='group-hover:-translate-y-9 flex flex-col transition duration-500 '>
          <p className='font-poppins '>{link}</p>
          <p className='font-poppins'>{link}</p>
        </a>
      </button>
    </div>
  );
}

export default Links;
