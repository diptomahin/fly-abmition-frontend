import React from 'react'
import EmploymentNavbar from '../Components/Navbar/EmploymentNavbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'

const EmploymentLayout =()=> {
  return (
    <div>
      <EmploymentNavbar/>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default EmploymentLayout
