import image from "next/image";

function Service({ icon, title, paragraph }) {
  return (
    <div className='px-2 pt-6 pb-8 rounded-md  md:hover:shadow-lg transition duration-150'>
      <div className='h-8 w-8 relative'>{icon}</div>
      <h2 className='font-semibold mt-3 mb-6  font-poppins text-sm lg:text-md'>{title}</h2>
      <p className='text-sm lg:text-base font-poppins text-gray-700'>{paragraph}</p>
    </div>
  );
}

export default Service;
