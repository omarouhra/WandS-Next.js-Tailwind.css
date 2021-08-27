import Head from "next/head";
import { BeakerIcon, MenuAlt4Icon } from "@heroicons/react/outline";
import Links from "../components/animation/Links";
import Image from "next/image";

export default function Home() {
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
      <section className='px-6 py-12 flex items-center justify-between'>
        <a href='#' className='font-logoFont text-md'>
          Will <br /> & Skill
        </a>
        <MenuAlt4Icon className='w-10 z-50 cursor-pointer hover:text-white hover:bg-black rounded-full p-1 transition duration-250' />
      </section>

      {/* Menu */}
      <section className='hidden absolute backdrop-blur-sm	 top-0  h-screen w-full  '>
        <section className='h-screen w-full bg-white flex flex-col justify-around  px-6 py-12  max-w-3xl ml-auto shadow-2xl  '>
          {/* socials */}
          <section className='flex md:space-x-24'>
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

          <p className='font-poppins underline font-semibold'>Contact@w&s.se</p>
        </section>
      </section>

      <section>
        <article>
          <h1 className='text-4xl  font-poppins leading-relaxed mb-8 '>
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

        <article className='w-full flex flex-col items-end'>
          <p className='text-sm text-right w-3/5 leading-relaxed'>
            We are a Tech Partner with a genuine passion for developing{" "}
            <span className='span'>great products</span> and services together
            with our clients.
          </p>
          <section>
            {/* <Image src='https://www.svgrepo.com/show/303195/instagram-glyph-1-logo.svg' /> */}
          </section>
        </article>
      </section>
    </div>
  );
}
