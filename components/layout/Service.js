import image from "next/image";

function Service({ icon, title, paragraph }) {
  return (
    <div className='px-2 pt-6 pb-8 rounded-md  md:hover:shadow-lg transition duration-150'>
      {icon}
      <h2 className='font-bold mt-3 mb-6 text-sm lg:text-md'>{title}</h2>
          <p className='text-sm lg:text-base text-gray-700'>{ paragraph }</p>

    </div>
  );
}

export default Service;
