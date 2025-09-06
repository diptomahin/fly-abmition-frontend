import React from 'react'
import EmploymentNavbar from '../Components/Navbar/EmploymentNavbar'
import { Outlet } from 'react-router'

const EmploymentLayout =()=> {
  return (
    <div>
      <EmploymentNavbar/>
      <Outlet></Outlet>
    </div>
  )
}

export default EmploymentLayout
