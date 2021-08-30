import Image from "next/image";

function Picture({ alignementRight, image }) {
  return (
    <section className='padding'>
      <div className='py-14 lg:py-36 relative flex justify-center items-center'>
        <div
          className={
            alignementRight
              ? "absolute right-0 w-1/2  h-full bg-blue-light shadow-2xl "
              : "absolute left-0 w-1/2  h-full bg-blue-light shadow-2xl "
          }></div>

        {image}
      </div>
    </section>
  );
}

export default Picture;
