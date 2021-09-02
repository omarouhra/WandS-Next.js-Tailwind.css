import Image from "next/image";
import s1 from "../../images/skills/s1.png";
import s2 from "../../images/skills/s2.png";
import s3 from "../../images/skills/s3.png";
import s4 from "../../images/skills/s4.png";
import s5 from "../../images/skills/s5.png";
import s6 from "../../images/skills/s6.png";
import s7 from "../../images/skills/s7.png";
import s8 from "../../images/skills/s8.png";
import s9 from "../../images/skills/s9.png";
import s10 from "../../images/skills/s10.png";
import s11 from "../../images/skills/s11.png";
import s12 from "../../images/skills/s12.png";

function Slider() {
  return (
    <section className='py-12 mx-auto md:max-w-2xl lg:max-w-4xl w-screen overflow-hidden rounded-full '>
      <div className='flex  space-x-6  items-center w-[600vw] md:w-[200vw]  mx-auto overflow-x-hidden animate-scrollReverse'>
        <div className='relative h-full '>
          <Image src={s1} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s2} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s3} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s4} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s5} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s6} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s7} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s8} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s9} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s10} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s11} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s12} objectFit='cover' />
        </div>

        <div className='relative h-full '>
          <Image src={s1} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s2} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s3} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s4} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s5} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s6} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s7} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s8} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s9} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s10} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s11} objectFit='cover' />
        </div>
        <div className='relative h-full '>
          <Image src={s12} objectFit='cover' />
        </div>
      </div>
    </section>
  );
}

export default Slider;
