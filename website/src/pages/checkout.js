import React, { useEffect, useState } from 'react'
import Cart from '../components/cart/index'
import Navbar from '../components/navbar'
const Checkout = () => {
  const [imgUrl, setImgUrl] = useState();
  useEffect(() =>{
    if (window.localStorage.getItem('product') == null) return
    var id = JSON.parse(window.localStorage.getItem('product')).id
    fetch('http://localhost:3001/products/'+ id)
      .then(res => res.json())
      .then(data => setImgUrl(data.imgUrl))
  },[])

  if (imgUrl){
    return (
      <>
        <Navbar/>
          <Cart imgUrl={imgUrl}/>
      </>
    )
  }else{
    return(
      <>
        <Navbar/>
          <Cart />
      </>
    )
  }
  
}


export default Checkout