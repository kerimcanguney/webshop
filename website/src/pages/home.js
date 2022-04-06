import React from 'react'
import Navbar from '../components/navbar/index'
import {Background} from '../components/homestyle'
import LandingFooter from '../components/LandingFooter/index'

const index = () => {
  return (
    <Background>
      <Navbar/>
      
      <LandingFooter/>
    </Background>
  )
}

export default index