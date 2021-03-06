import {
  ArrowCircleRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

function Project({
  projectImage,
  smallTitle,
  title,
  paragraph,
  link,
  setProjectId,
  id,
}) {
  const nextProject = () => {
    if (id < 2) {
      setProjectId(id + 1);
    }
  };
  const previousProject = () => {
    if (id) {
      setProjectId(id - 1);
    }
  };
  return (
    <div className='flex flex-col space-y-12 lg:flex-row lg:space-x-12 lg:space-y-0  '>
      <section className=' flex items-center justify-center lg:w-1/2'>
        <section
          data-aos='fade-up'
          data-aos-duration='500'
          id='image'
          className='w-full animate-fade-in  max-w-[400px] mx-auto bg-blue-light p-8 shadow-2xl   flex items-center justify-center'>
          <Image src={projectImage} height='300px' objectFit='contain' />
        </section>
      </section>

      <section
        data-aos='fade-up'
        data-aos-duration='500'
        className='w-full lg:w-1/2 flex flex-col justify-between '>
        <section id='projectContent' className='animate-fade-in-delay'>
          <small className='text-xs text-gray-300 font-poppins'>
            {smallTitle}
          </small>
          <h2 className='text-xl font-semibold mt-4 mb-8 lg:text-2xl'>
            {title}
          </h2>
          <p className='text-sm leading-loose mb-8 text-gray-500'>
            {paragraph}
          </p>
          <a
            className='text-blue-dark font-bold text-sm'
            target='_blank'
            href='#'>
            {link}
          </a>
        </section>
        <section className='flex items-end justify-between'>
          <section className='flex space-x-1 items-center'>
            <div className={id == 0 ? " dot-active" : "dot "}></div>
            <div className={id == 1 ? " dot-active" : "dot "}></div>
            <div className={id == 2 ? " dot-active" : "dot "}></div>
          </section>
          <section className='flex space-x-4'>
            <ArrowLeftIcon
              className=' cursor-pointer w-12 h-12 border p-3 border-black md:hover:bg-black md:hover:text-white transition divide-purple-100'
              onClick={previousProject}
            />

            <ArrowRightIcon
              className='cursor-pointer w-12 h-12 bg-black p-3 border border-transparent text-white md:hover:bg-white md:hover:text-black md:hover:border-black transition divide-purple-100'
              onClick={nextProject}
            />
          </section>
        </section>
      </section>
    </div>
  );
}

export default Project;
