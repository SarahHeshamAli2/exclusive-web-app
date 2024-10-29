import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTopButton from '../BackToTop/BackToTop'

export default function Layout() {
  
  return <>
  
  <Navbar/>

  <Outlet/>

  <Footer/>
  <ScrollToTopButton/>
  </>


}
