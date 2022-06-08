import React from 'react'
import Navbar from '../components/navbar/index'
import {Background} from '../components/homestyle'
import LandingFooter from '../components/LandingFooter/index'
import '../pagestyling/home.css'
const index = ({logged}) => {
  return (
    <Background>
      <Navbar logged={logged}/>
      
      <LandingFooter/>
    </Background>
  )
}

export default index