import Head from "next/head";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/outline";
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
import blogData from "../data/blogData";
import Project from "../components/layout/Project";
import Button from "../components/styles/Button";
import Blog from "../components/layout/Blog";
import Socials from "../components/styles/Socials";
import Companies from "../components/animation/Companies";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projectId, setProjectId] = useState(0);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <style jsx global>{`
        body {
          overflow-x: hidden;
          max-width: 100%;
          font-family: "poppins", sans serif;
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
          <a
            href='#'
            className='font-logoFont text-md '
            data-aos='fade-down'
            data-aos-duration='900'
            data-aos-delay='200'>
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
          id='menu'
          className={isMenuOpen ? " menu menu-active" : " menu menu-hidden"}>
          {/* socials */}
          <section className='flex md:space-x-24 '>
            <section className='hidden md:flex md:flex-col'>
              <p className='text-gray-dark  mb-12 text-sm'>Socials</p>
              <section className='space-y-4 flex flex-col text-sm '>
                <a href=''>Facebook</a>
                <a href=''>Instagram</a>
                <a href=''>Twitter</a>
              </section>
            </section>

            {/* Menu */}
            <section>
              <p className='text-gray-dark  mb-12 text-sm'>Menu</p>
              <section className='space-y-10'>
                <Links
                  onClick={openMenu}
                  href='#aboutUs'
                  link='About'
                  setIsMenuOpen={setIsMenuOpen}
                />
                <Links
                  link='Services'
                  setIsMenuOpen={setIsMenuOpen}
                  href='#services'
                />
                <Links
                  href='#projects'
                  link='Projects'
                  setIsMenuOpen={setIsMenuOpen}
                />
                <Links
                  link='Contacts'
                  setIsMenuOpen={setIsMenuOpen}
                  href='#contacts'
                />
              </section>
            </section>
          </section>

          <a className=' underline font-semibold cursor-pointer'>
            Contact@w&s.se
          </a>
        </section>

        {/* hero Section */}
        <Hero />

        {/* Companies */}
        <section data-aos='fade-in' data-aos-duration='500'>
          <section>
            <hr className='text-gray-400 ' />
            <p className='text-xs -mt-4 font-semibold text-blue-dark text-center bg-gray-100 py-2 w-36 lg:w-44 rounded-full mx-auto'>
              TRUSTED BY
            </p>
          </section>

          <Companies />
        </section>

        {/* Paragraph */}
        <section className='padding'>
          <Paragraph
            firstPart='We guide and assist our clients in designing and developing '
            span='seamless'
            secondPart='digital experiences'
            center={true}
            blueSpane={true}
          />
        </section>

        {/* Pics section */}
        <Picture
          image={
            <div className='relative w-[90vw] h-[20vh] md:h-[30vh] lg:h-[40vh] lg:max-w-4xl'>
              <Image
                data-aos='fade-in'
                data-aos-duration='1000'
                src={image1}
                layout='fill'
                objectFit='cover'
              />{" "}
            </div>
          }
        />

        {/* About us */}
        <section
          id='aboutUs'
          className='padding md:max-w-6xl mx-auto space-y-16 px-6'>
          <article data-aos='fade-in' data-aos-duration='500'>
            <p className='text-lg max-w-xl'>
              We help you succeed with your digital efforts by developing
              <span className='span'> solutions</span> tailored for your
              business
            </p>
            <button className='border px-3 py-1 rounded-sm border-black  mt-6 '>
              Contact us
            </button>
          </article>
          <article
            data-aos='fade-in'
            data-aos-duration='500'
            className=' flex flex-col justify-center items-end'>
            <Title title={"About us"} alignementRight={true} />
            <p className=' text-gray text-sm lg:text-md text-right  my-6 max-w-xl leading-loose md:leading-loose lg:leading-loose'>
              Our teams thrive on challenges and we enjoy crafting world class
              solutions that enable start-ups and established companies to
              streamline internal processes and build great products.
            </p>
          </article>
        </section>

        {/* Services */}
        <section id='services' className='padding md:max-w-6xl mx-auto px-6'>
          <small className='text-xs md:text-sm  text-gray-300'>
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
                data-aos='fade-in'
                data-aos-duration='1000'
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
        <section id='projects' className='padding md:max-w-6xl mx-auto px-6'>
          <Project
            projectImage={projectData[projectId].image}
            smallTitle={projectData[projectId].description}
            title={projectData[projectId].title}
            paragraph={projectData[projectId].paragraph}
            link={projectData[projectId].link}
            setProjectId={setProjectId}
            id={projectId}
          />
        </section>

        {/* Blog section */}
        <section className='padding md:max-w-6xl mx-auto px-6 '>
          <section className='py-12 px-6 bg-gray-light flex flex-col space-y-16 lg:flex-row lg:space-y-0 lg:space-x-12'>
            <section>
              <Title title='Our latest news and articles' />
              <p className='text-sm text-gray-400 leading-relaxed my-5'>
                For more information regarding our technologies and our work,
                please visit our tech blog.
              </p>
              <Button link='All Articles' />
            </section>

            <section className='flex flex-col space-y-16 lg:flex-row lg:space-y-0 lg:space-x-12'>
              {blogData.map(({ id, image, date, title }) => (
                <Blog key={id} src={image} date={date} title={title} />
              ))}
            </section>
          </section>
        </section>

        {/* Contact us */}
        <section
          data-aos='fade-in'
          data-aos-duration='500'
          id='contacts'
          className='padding md:max-w-6xl mx-auto px-6 '>
          <section className='py-12 px-6 md:px-12 bg-blue-dark text-white shadow-2xl md:flex md:space-x-12'>
            <p className=' text-3xl leading-loose mb-10 md:w-2/3'>
              NOW ABOUT YOUR <br />
              <span className='span'>PROJECT...</span>
            </p>
            <section>
              <p className='text-sm leading-loose mb-12 md:mb-10'>
                Do you want to discuss an idea, develop your technical platform
                or have thoughts on how to begin your digital journey? Do not
                hesitate to get in touch.
              </p>
              <a href='mailto=contact@will&skill.se' className='underline'>
                contact@will&skill.se <span className='animate-pulse'> > </span>{" "}
              </a>
            </section>
          </section>
        </section>

        {/* Carrer section */}
        <section className='pb-12 md:max-w-6xl mx-auto px-6  flex flex-col space-y-12 md:flex-row md:space-y-0 md:justify-between'>
          <p data-aos='fade-in' data-aos-duration='500'>
            Looking for a <span className='span'>job?</span>
          </p>

          <section
            data-aos='fade-in'
            data-aos-duration='500'
            className='md:w-1/2'>
            <p className='text-gray-dark text-xs md:text-md leading-loose mb-8 '>
              We are constantly looking for more colleagues who want to help us
              help our customers build the IT systems of the future.
            </p>
            <Button link='Carrer Page' />
          </section>
        </section>

        {/* footer section */}
        <footer className='pt-12 pb-4 md:max-w-6xl mx-auto px-6 '>
          <section className='py-12 px-6 lg:px-12 bg-gray-light '>
            <a href='#' className='font-logoFont text-md'>
              Will <br /> & Skill
            </a>
            <section className=' mt-12 flex flex-col space-y-20 lg:flex-row-reverse lg:justify-between lg:space-y-0'>
              <section className='text-sm space-y-4 lg:space-x-0'>
                <p>556893-5273</p>
                <p>Långholmsgatan 27, 7 tr</p>
                <p>117 33 Stockholm</p>
                <p>08 410 99 141</p>
                <Socials />
              </section>
              <section className='grid gap-8 md:grid-cols-3'>
                <section className='flex flex-col space-y-3'>
                  <p className='font-semibold'>Company</p>
                  <a className='text-sm text-gray-dark' href=''>
                    About us
                  </a>
                  <a className='text-sm text-gray-dark' href=''>
                    Services
                  </a>
                  <a className='text-sm text-gray-dark' href=''>
                    Our Customers
                  </a>
                </section>
                <section className='flex flex-col space-y-3'>
                  <p className='font-semibold'>Contact</p>
                  <a className='text-sm text-gray-dark' href=''>
                    Email
                  </a>
                  <a className='text-sm text-gray-dark' href=''>
                    Support
                  </a>
                  <a className='text-sm text-gray-dark' href=''>
                    Career
                  </a>
                </section>
                <section className='flex flex-col space-y-3'>
                  <p className='font-semibold'>Products</p>
                  <a className='text-sm text-gray-dark' href=''>
                    Toochbase
                  </a>
                  <a className='text-sm text-gray-dark' href=''>
                    Yrkesdörren
                  </a>
                  <a className='text-sm text-gray-dark' href=''>
                    Our Customers
                  </a>
                </section>
              </section>
            </section>
          </section>
          <section className='flex items-center justify-center py-3 bg-blue-dark text-white text-sm font-semibold'>
            <p>© 2021 Will & Skill</p>
          </section>
        </footer>
      </div>
    </>
  );
}
