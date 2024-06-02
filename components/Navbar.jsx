"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './navbar.module.css'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logo from '@/public/logo.png'


const Navbar = () => {
    const [menuIcon, setIcon] = useState(false);

    const handleSmallScreen = () => {
        setIcon(!menuIcon);
    }
  return (
    <div className='border-b-2 border-gray-300 height-[45px]'>


        <nav className='flex justify-between items-center py-4 md:px-32 px-4'>

        <ul className={style.largeScreen}>
                <li className={style.largeLink}>
                Editor{"'"}s Picks
                </li>
                <li  className={style.largeLink}>
                Features
                </li>
                <li  className={style.largeLink}>
                  Reading Lists
                </li>
                <li  className={style.largeLink}>
                   Best Of
                </li>
            </ul>
           

            <div onClick={handleSmallScreen} className={style.logoContainer}>
              <Image src={logo} alt='' height={33} width={33} className={style.logoImage}></Image>
              <Link href="/" className={style.logo}>LONGREADS</Link>
            </div>

  
            <div className={style.largeScreen} >
                <Link href="/support" className={style.supportUs}>Support Us</Link>
            </div>




                <div onClick={handleSmallScreen} className={style.smallIcon}>
                    {menuIcon ? (<AiOutlineClose size={25} />) : (<AiOutlineMenu size={25} />)}
                </div>



                {menuIcon ? (
                    <div className={style.smallMenuOpen} >
                        <div className={style.smallMenu}>
                        <div>
                        <Link href="/support" onClick={handleSmallScreen} className={style.supportUs}>Support Us</Link>
                        </div>
                     
                            <ul className={style.smallMenuList}>
                            <li className={style.largeLink}>Editor{"'"}s Picks</li>
                            <li  className={style.largeLink}>Features</li>
                            <li  className={style.largeLink}>Reading Lists</li>
                            <li  className={style.largeLink}>Best Of </li>
                            </ul>

                            <div className={style.socialLinks}>
                                
                                <ul className={style.socialList}>
                                <li>Twitter</li>
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                    <li>Tumblr</li>
                                    <li>Mastodon</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={style.smallMenuClose}>

                    </div>)}
           

        </nav>
    </div>
  )
}

export default Navbar