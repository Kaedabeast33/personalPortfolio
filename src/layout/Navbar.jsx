import React, { useContext } from 'react'

import png from '../assets/png.png'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
import {motion} from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
   const [menu,setMenu]=useState(false)
   function handleClick(){
    console.log(menu)
       setMenu(!menu)
   }
   
  return (
    <>
    {/* <div className=''> <div className="w-[10vh] h-[10vh] bg-red-200 absolute top-0 left-0 z-50"  onClick={()=>console.log("hello")}></div></div> */}
   
    <nav className='fixed whiteColor w-[100%] overflow-auto justify-center  sm:justify-between  h-[50px] z-50 shadow-lg '>

            <ul className='hidden sm:flex h-full w-[40%] items-center p-2 gap-10'>
          <Link to={"/"}><li className='hover:primaryTextColor text-[16px]'>Home</li></Link>
           <Link to='/gallery'><li className='hover:primaryTextColor text-[16px]'>Gallery</li></Link>
                <li className='hover:primaryTextColor text-[16px]'>About Me</li>
                <li className='hover:primaryTextColor text-[16px]'>Contact Me</li>
            </ul>
            <div className='sm:hidden flex translate-x-[-20px] justify-between items-center px-[30px] w-full'>
                <ul  className=' flex justify-center items-center h-[20px] p-4 '   onClick={()=>setMenu(!menu)}><li>Menu</li></ul>
                
                <Link to={"/"}> <img height={"70px"} width={"70px"} src={png} alt="logo "></img></Link>
                <ul><li></li></ul>
            </div>
            
     
      
       
       
    </nav>
    <motion.div onClick={()=>setMenu(false)}  initial={{opacity:1,translateY:"-100%"}} animate={menu?{opacity:1,translateY:"0%"}:{opacity:0,translateY:"-100%"}} className='menu h-[100vh] gap-4 w-[100vw] fixed top-[50px] flex justify-center items-center left-0 bg-[#f5f5f5] z-40 fixed '>
    <ul  className='sm:flex text-center   h-full w-[40%] items-center p-2 gap-10'>
          <Link to={"/"}><li className='hover:primaryTextColor text-[16px]'>Home</li></Link>
           <Link to='/gallery'><li className='hover:primaryTextColor text-[16px]'>Gallery</li></Link>
                <li className='hover:primaryTextColor text-[16px]'>About Me</li>
                <li className='hover:primaryTextColor text-[16px]'>Contact Me</li>
            </ul>
    </motion.div>
    </>
  )
}

export default Navbar