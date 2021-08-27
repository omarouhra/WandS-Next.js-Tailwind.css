import Head from "next/head";
import { BeakerIcon, MenuAlt4Icon, XIcon } from "@heroicons/react/outline";
import Links from "../components/animation/Links";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
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
      <section className='px-6 py-12 flex items-center justify-between max-w-[90vw] mx-auto'>
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
      <section id='menu' className={isMenuOpen ? "bg bg-active" : "bg bg"}>
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
              <section className='space-y-8'>
                <Links link='About' />
                <Links link='Services' />
                <Links link='Projects' />
                <Links link='Contacts' />
              </section>
            </section>
          </section>

          <a className='font-poppins underline font-semibold cursor-pointer'>
            Contact@w&s.se
          </a>
        </section>
      </section>

      {/* hero Section */}
      <section className='max-w-[1200px] mx-auto px-6  py-36'>
        <article className='mb-12 animate-fade-in'>
          <h1 className='text-4xl  font-poppins leading-relaxed mb-8 md:text-6xl md:leading-relaxed  '>
            A <span className='span text-blue-dark'>Digital Agency</span>
            <br /> in Stockholm 👋!
          </h1>
          <a className='text-sm span' href='#'>
            Direction
          </a>{" "}
          |{" "}
          <a className='text-sm span' href='#'>
            Email
          </a>{" "}
          |{" "}
          <a className='text-sm span' href='#'>
            Call
          </a>
        </article>

        <article className='w-full flex flex-col items-end animate-fade-in-delay'>
          <p className='text-sm text-right leading-loose w-xs sm:max-w-md mb-4 md:text-base md:leading-loose'>
            We are a Tech Partner with a genuine passion for developing{" "}
            <span className='span'>great products</span> and services together
            with our clients.
          </p>
          <section className='flex gap-5 items-center '>
            <a target='_blank' href='https://www.instagram.com/willandskill/'>
              <Image
                width='18px'
                height='18px'
                src='https://www.svgrepo.com/show/303195/instagram-glyph-1-logo.svg'
                alt='instagram icon'
              />
            </a>
            <a target='_blank' href='https://www.facebook.com/WillAndSkill'>
              <Image
                width='22px'
                height='22px'
                src='https://www.svgrepo.com/show/332056/facebook.svg'
                alt='facebook icon'
              />
            </a>
            <a target='_blank' href='https://www.linkedin.com/company/3506216'>
              <Image
                width='18px'
                height='18px'
                src='https://www.svgrepo.com/show/128403/linkedin.svg'
                alt='twiter icon'
              />
            </a>
          </section>
        </article>
      </section>
    </div>
  );
}
