import React, { useEffect, useState } from 'react'
import Cart from '../components/cart/index'
import Navbar from '../components/navbar'
const Checkout = () => {
  const [imgUrl, setImgUrl] = useState();
  const [Size, setSize] = useState();
  useEffect(() =>{
    if (window.localStorage.getItem('product') == null) return
    
    var obj = JSON.parse(window.localStorage.getItem('product'))
    setSize(obj.size)
    fetch('http://localhost:3001/products/'+ obj.id)
      .then(res => res.json())
      .then(data => setImgUrl(data.imgUrl))
  },[])

  if (imgUrl){
    return (
      <>
        <Navbar/>
        <Cart imgUrl={imgUrl} Size={Size}/>
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