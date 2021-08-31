import {
  ArrowCircleRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

function Project({ projectImage, smallTitle, title, paragraph, link }) {
  return (
    <div className='flex flex-col space-y-12 lg:flex-row lg:space-x-12 lg:space-y-0  '>
      <section className=' flex items-center justify-center lg:w-1/2'>
        <section className='w-full  max-w-[400px] mx-auto bg-blue-light p-8 shadow-2xl   flex items-center justify-center'>
          <Image src={projectImage} height='300px' objectFit='contain' />
        </section>
      </section>

      <section className='w-full lg:w-1/2 flex flex-col justify-between'>
        <small className='text-xs text-gray-300 font-poppins'>
          {smallTitle}
        </small>
        <h2 className='text-xl font-poppins font-semibold mt-4 mb-8 lg:text-2xl'>
          {title}
        </h2>
        <p className='text-sm font-poppins leading-loose mb-8 text-gray-500'>
          {paragraph}
        </p>
        <a
          className='text-blue-dark font-poppins font-bold text-sm'
          target='_blank'
          href='#'>
          {link}
        </a>
        <section className='flex items-end justify-between'>
          <section className='flex space-x-1'>
            <div className='h-3 w-3 bg-blue-dark'></div>
            <div className='h-3 w-3 bg-blue-light'></div>
            <div className='h-3 w-3 bg-blue-light'></div>
            <div className='h-3 w-3 bg-blue-light'></div>
          </section>
          <section className='flex space-x-4'>
            <ArrowLeftIcon className=' cursor-pointer w-12 h-12 border p-3 border-black md:hover:bg-black md:hover:text-white transition divide-purple-100' />
            <ArrowRightIcon className='cursor-pointer w-12 h-12 bg-black p-3 border border-transparent text-white md:hover:bg-white md:hover:text-black md:hover:border-black transition divide-purple-100' />
          </section>
        </section>
      </section>
    </div>
  );
}

export default Project;
