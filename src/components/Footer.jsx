import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer.css'
export const Footer = () => {
  return (
    <footer className='relative text-white footer-bg'>
    <div className='absolute top-0 left-0 w-full overflow-hidden'>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d
          ="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
          </path>
        </svg>
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-10 gap-10 z-10 relative'>
      <div className='flex flex-col gap-5'>
        <img src='public/gdscLogo.png' className='w-auto max-w-full h-auto' ></img>
        <h2 className='C text-[20px] list-none font-semibold text-500 py-2 uppercase'>Sheridan College TRA</h2>
        <p className='text-3x1 text-white-500'>1430 Trafalgar Rd</p>
        <p className='text-3x1 text-white-500'>Oakville, ON L6H 2L1</p>
      </div>
      <div className='flex flex-col gap-5 md:items-center middle'>
        <ul>
          <ul className='G text-[22px] list-none font-semibold text-500 py-2 uppercase'>Take Me To</ul>
          <li className='my-4 list-none'>Home</li>
          <li className='my-4 list-none'>Teams</li>
          <li className='my-4 list-none'>Events</li>
          <li className='my-4 list-none'>Connect</li>
        </ul>
      </div>
      <div className='flex flex-col gap-5 md:items-center middle'>
       <ul>
          <ul className='D text-[22px] list-none font-semibold text-500 py-2 uppercase'>Explore  more</ul>
          <li className='my-4 list-none'>Chapters</li>
          <li className='my-4 list-none'>Privacy</li>
        </ul>
      </div>
    </div>

      <div className='h-full flex items-center justify-center mb-5'>
          <a className='mx-5 mt-5 mb-5'><FaGithub size={40}></FaGithub></a>
          <a className='mx-5 mt-5 mb-5'><FaDiscord size={40}></FaDiscord></a>
          <a className='mx-5 mt-5 mb-5'><FaInstagram size={40}></FaInstagram></a>
   

    </div>
    </div>
   
    </footer>
  )
}
