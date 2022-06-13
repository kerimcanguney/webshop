import React, { useEffect, useState } from 'react'
import { Container,ProductsContainer } from './overviewstyle'
import Card from '../ProductItem'
import FilterBar from '../FilterBar/index'
export default function ItemContainer () {
  const [products, setProducts] = useState()
  useEffect(()=>{
    fetch('http://localhost:3001/products')
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setProducts(data)
    })
  }, [])

  console.log(products)

  return (
    <Container>
      <FilterBar/>
      <ProductsContainer className='overview' id='overview' >
      { products &&
        products.map((item, index)=>
          (<Card key={index} item={item}/>)
        )
      }
      </ProductsContainer>
    </Container>
  )
}
