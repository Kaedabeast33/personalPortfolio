import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const HomeSharedLayout = () => {
  return (
    <>
   <Navbar></Navbar>
   <Outlet> </Outlet>
   <Footer></Footer>
   </>
  )
}

export default HomeSharedLayout