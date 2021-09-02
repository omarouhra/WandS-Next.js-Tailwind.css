import Image from "next/image";
function Blog({ src, date, title }) {
  return (
    <div data-aos='fade-in' data-aos-duration='500' className='cursor-pointer'>
      <div className='relative w-full h-52  mb-3 lg:w-[300px] lg:h-44'>
        <Image src={src} layout='fill' objectFit='cover' />
      </div>
      <small className='text-xs text-gray-400 '>{date}</small>
      <p className='text-sm font-semibold mt-8 '>{title}</p>
    </div>
  );
}

export default Blog;
