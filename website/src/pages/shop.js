import React from 'react'
import { Background } from '../components/homestyle'
import ItemContainer from '../components/ItemOverview'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import '../pagestyling/shop.css'
function shop(){
  return (
    <div >
        <Navbar />
        <ItemContainer style={{overflowY: 'visible'}}/>
        <Footer close={true}/>
    </div>
  )
}

export default shop