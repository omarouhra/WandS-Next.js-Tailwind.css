import Image from "next/image";
import pictureUrl from "../../images/picture.png";

function Picture() {
  return (
    <section className='padding'>
      <div className='py-14 relative flex justify-center items-center'>
        <div className='absolute left-0 w-1/2  h-full bg-blue-light shadow-2xl '></div>
        <div className='relative w-[90vw] h-[20vh] md:h-[30vh] lg:h-[40vh] lg:max-w-4xl'>
          <Image src={pictureUrl} layout='fill' objectFit='cover' />
        </div>
      </div>
    </section>
  );
}

export default Picture;
