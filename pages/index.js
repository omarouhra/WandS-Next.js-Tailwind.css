import Head from "next/head";
import {
  AdjustmentsIcon,
  BeakerIcon,
  DesktopComputerIcon,
  MenuAlt4Icon,
  NewspaperIcon,
  XIcon,
} from "@heroicons/react/outline";
import Links from "../components/animation/Links";
import { useState, useEffect } from "react";
import Hero from "../components/layout/Hero";
import Slider from "../components/animation/Slider";
import Paragraph from "../components/styles/Paragraph";
import Picture from "../components/layout/Picture";
import Title from "../components/styles/Title";
import Service from "../components/layout/Service";
import ServiceData from "../data/serviceData";
import image1 from "../images/picture.png";
import Image from "next/image";
import projectData from "../data/projectData";
import Project from "../components/layout/Project";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <style jsx global>{`
        body {
          overflow-x: hidden;
          max-width: 100%;
        }
      `}</style>
      <div>
        <Head>
          <title>A Digital Agency in Stockholm</title>
          <link rel='icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@700&family=Poppins:ital,wght@0,400;0,600;0,700;1,100&display=swap'
            rel='stylesheet'
          />
        </Head>
        {/* Navigation */}
        <section className='relative flex items-center justify-start px-4 py-8 md:py-12 md:px-6 lg:py-16  max-w-[90vw] lg:mx-auto'>
          <a href='#' className='font-logoFont text-md'>
            Will <br /> & Skill
          </a>
          <div className=' fixed right-4 lg:right-[6vw]  z-50 h-12 overflow-hidden cursor-pointer md:hover:text-white md:hover:bg-black rounded-full p-1 transition duration-50'>
            <MenuAlt4Icon
              className=''
              className={isMenuOpen ? "menuButton" : "menuButton-active"}
              onClick={openMenu}
            />
            <XIcon
              className={isMenuOpen ? "menuButton" : "menuButton-active"}
              onClick={openMenu}
            />
          </div>
        </section>

        {/* Menu */}
        <section
          className={isMenuOpen ? " menu menu-active" : " menu menu-hidden"}>
          {/* socials */}
          <section className='flex md:space-x-24 '>
            <section className='hidden md:flex md:flex-col'>
              <p className='text-gray-dark font-poppins mb-12 text-sm'>
                Socials
              </p>
              <section className='space-y-4 flex flex-col text-sm font-poppins'>
                <a href=''>Facebook</a>
                <a href=''>Instagram</a>
                <a href=''>Twitter</a>
              </section>
            </section>

            {/* Menu */}
            <section>
              <p className='text-gray-dark font-poppins mb-12 text-sm'>Menu</p>
              <section className='space-y-10'>
                <Links
                  onClick={openMenu}
                  href='#menu'
                  link='About'
                  setIsMenuOpen={setIsMenuOpen}
                />
                <Links link='Services' setIsMenuOpen={setIsMenuOpen} />
                <Links
                  href='#test2'
                  link='Projects'
                  setIsMenuOpen={setIsMenuOpen}
                />
                <Links link='Contacts' setIsMenuOpen={setIsMenuOpen} />
              </section>
            </section>
          </section>

          <a className='font-poppins underline font-semibold cursor-pointer'>
            Contact@w&s.se
          </a>
        </section>

        {/* hero Section */}
        <Hero />

        {/* Companies */}
        <section>
          <section>
            <hr className='text-gray-400 ' />
            <p className='text-xs -mt-4 font-semibold text-blue-dark text-center bg-gray-100 py-2 w-36 lg:w-44 rounded-full mx-auto'>
              TRUSTED BY
            </p>
          </section>

          <Slider />
        </section>

        {/* Paragraph */}
        <section className='padding'>
          <Paragraph
            firstPart='We guide and assist our clients in designing and developing '
            span='seamless'
            secondPart='digital experiences'
            center={true}
          />
        </section>
        {/* Pics section */}
        <Picture
          image={
            <div className='relative w-[90vw] h-[20vh] md:h-[30vh] lg:h-[40vh] lg:max-w-4xl'>
              <Image src={image1} layout='fill' objectFit='cover' />{" "}
            </div>
          }
        />

        {/* About us */}
        <section className='padding md:max-w-6xl mx-auto space-y-16 px-6'>
          <article>
            <p className='font-poppins text-lg max-w-xl'>
              We help you succeed with your digital efforts by developing
              <span className='span'> solutions</span> tailored for your
              business
            </p>
            <button className='border px-3 py-1 rounded-sm border-black  mt-6 '>
              Contact us
            </button>
          </article>
          <article className=' flex flex-col justify-center items-end'>
            <Title title={"About us"} alignementRight={true} />
            <p className='font-poppins text-gray text-right  my-6 max-w-xl leading-loose'>
              Our teams thrive on challenges and we enjoy crafting world class
              solutions that enable start-ups and established companies to
              streamline internal processes and build great products.
            </p>
          </article>
        </section>

        {/* Services */}
        <section className='padding md:max-w-6xl mx-auto px-6'>
          <small className='text-xs md:text-sm text-gray-300'>
            Take a look on{" "}
          </small>
          <Title
            title='What do we bring to the table ?'
            alignementRight={false}
          />
          <section className=' grid gap-7 mt-12 md:grid-cols-2 md:gap-16 '>
            {ServiceData?.map(({ id, icon, title, paragraph }) => (
              <Service
                key={id}
                icon={icon}
                title={title}
                paragraph={paragraph}
              />
            ))}
          </section>
        </section>

        {/* Pics section */}
        <Picture
          alignementRight={true}
          image={
            <div className='relative w-[80vw] h-[25vh] md:h-[40vh]  lg:h-[50vh] lg:max-w-4xl'>
              <Image
                src='https://images.unsplash.com/photo-1560264418-c4445382edbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
                layout='fill'
                objectFit='cover'
              />
            </div>
          }
        />

        {/* Paragraph  */}
        <section className='padding'>
          <Paragraph
            firstPart='We are a team of naturally curious '
            span='designers & developers'
            secondPart='with different skills and experiences'
            blueSpane={true}
          />
        </section>

        {/* Slider */}
        <Slider />

        {/* Projects */}

        <section className='padding md:max-w-6xl mx-auto px-6'>
          <Project
            projectImage={projectData[0].image}
            smallTitle={projectData[0].description}
            title={projectData[0].title}
            paragraph={projectData[0].paragraph}
            link={projectData[0].link}
          />
        </section>
      </div>
    </>
  );
}
