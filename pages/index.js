import Head from "next/head";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/outline";
import Links from "../components/animation/Links";
import { useState, useEffect } from "react";
import Hero from "../components/layout/Hero";
import Slider from "../components/animation/Slider";
import Paragraph from "../components/styles/Paragraph";
import Picture from "../components/layout/Picture";

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
        <Paragraph
          firstPart='We guide and assist our clients in designing and developing '
          secondPart='digital experiences'
          span='seamless'
        />

        {/* Pics section */}
        <Picture />
      </div>
    </>
  );
}
