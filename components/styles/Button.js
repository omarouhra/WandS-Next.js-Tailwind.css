function Button({ link }) {
  return (
    <a title='blog page' href='#' className='text-sm font-semibold animate-pulse'>
      {link} <span>></span>
    </a>
  );
}

export default Button;
