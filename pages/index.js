import Head from "next/head";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/outline";
import Links from "../components/animation/Links";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";

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
      <div
        className={
          isMenuOpen
            ? "overflow-hidden h-screen w-screen  "
            : "backdrop-blur-sm "
        }>
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
        <section className='px-6 py-12 flex items-center justify-between lg:max-w-[90vw] mx-auto sticky top-0 z-50'>
          <a href='#' className='font-logoFont text-md'>
            Will <br /> & Skill
          </a>
          <div className='z-50 h-12 overflow-hidden cursor-pointer hover:text-white hover:bg-black rounded-full p-1 transition duration-50'>
            <MenuAlt4Icon
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
          className={
            isMenuOpen
              ? " h-screen w-full absolute top-0 right-0 filter backdrop-blur-sm z-10"
              : "background-hidden"
          }>
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
                <p className='text-gray-dark font-poppins mb-12 text-sm'>
                  Menu
                </p>
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
        </section>

        {/* hero Section */}
        <Hero />

        {/* test */}
        <section id='test' className='h-[90vh] w-full '></section>
        <section id='test2' className='h-[90vh] w-full'></section>
      </div>
    </>
  );
}
