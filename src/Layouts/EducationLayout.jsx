import React from 'react'
import EducationNavbar from '../Components/Navbar/EducationNavbar'
import { Outlet } from 'react-router'
import EduFooter from '../Components/Footer/EduFooter'

const EducationLayout = () => {
  return (
    <div>
      <EducationNavbar />
      <Outlet />
      <EduFooter />
    </div>
  )
}

export default EducationLayout
