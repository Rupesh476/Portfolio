import React,{useState,useRef} from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

const Nav = () => {
        
    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    
  return (
    
    <>
    <nav className={`w-full fixed px-5 lg:px-8 xl:-[8%] py-4 flex items-center justify-between z-50  ${
            isScroll
            ? 'text-black dark:text-white bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-sm'
            : 'bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-sm'
        } `}>
<a href="#top">
    <p className='cursor-pointer text-xl mr-14 hover:text-'>Rupesh <span className='text-3xl text-red-600'>.</span></p>
</a>
 
    <ul  className={`hidden md:flex items-center gap-6 lg:gap-10 rounded-full px-6 lg:px-8 py-2 text-sm font-medium transition-all ${
            isScroll
            ? 'text-black dark:text-white bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-sm'
            : 'bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-sm'
          }`}>
        <li><a href="#top"  className='hover:translate-y-1 duration-300 hover:text-red-600'>Home</a></li>
        <li><a href="#about"  className='hover:translate-y-1 duration-300 hover:text-red-600'>About Me</a></li>
        <li><a href="#services"  className='hover:translate-y-1 duration-300 hover:text-red-600'>Services</a></li>
        <li><a href="#work"  className='hover:translate-y-1 duration-300 hover:text-red-600'>My Work</a></li>
        <li><a href="#contact"  className='hover:translate-y-1 duration-300 hover:text-red-600'>Contact Me</a></li>
    </ul>

<div className='flex items-center gap-4'>
    <a href="#contact" className="hidden md:flex lg:flex items-center gap-1 px-6 py-2 border border-rose-500 text-rose-500 dark:text-rose-400 dark:border-rose-400 rounded-full text-sm font-medium hover:bg-rose-50 dark:hover:bg-rose-900/50 transition-colors duration-300">
        Contact <Image src={assets.arrow_icon} alt='' className="w-3 hover:translate-x-1 transition-transform duration-300" />
    </a>

    <button onClick={openMenu} className='block md:hidden ml-3'>
        <Image src={assets.menu_white} alt='' className='w-6' />
    </button>
</div>

{/*-----mobile menu -------*/}

<ul ref={sideMenuRef} className ='flex md:hidden flex-col rounded-2xl gap-4 py-20 px-10 fixed text-black -right-64 top-1 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
    
    <div onClick={closeMenu} className='absolute right-6 top-6'>
        <Image src={assets.close_black}  alt=''  width={24}   height={24}   className='w-5 cursor-pointer' />
        
    </div>

        <li><a onClick={closeMenu}  href="#top" className='hover:translate-y-1 hover:text-red-600'>Home</a></li>
        <li><a onClick={closeMenu}  href="#about" className='hover:translate-y-1 hover:text-red-600'>About Me</a></li>
        <li><a onClick={closeMenu}  href="#services" className='hover:translate-y-1 hover:text-red-600'>Services</a></li>
        <li><a onClick={closeMenu}  href="#work" className='hover:translate-y-1 hover:text-red-600'>My Work</a></li>
        <li><a onClick={closeMenu}  href="#contact" className='hover:translate-y-1 hover:text-red-600'>Contact Me</a></li>
</ul>
    </nav>
    </>
  )
}

export default Nav