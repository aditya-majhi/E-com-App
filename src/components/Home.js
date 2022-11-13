import React, { useEffect, useState } from 'react'
import Carousel from './carousel'
import ProductCard from './productCard'
import Footer from './footer'

const Home = () => {

  const [items , setItems] = useState([]) ;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6').then((res) => {
      return res.json() ;
    }).then((data) => {
      setItems(data) ;
    })
  }, []);

  return (
    <>
      <Carousel />
      <div className='bg-sky-100 pt-4'>
        <h1 className='text-center font-bold text-2xl'>Featured Products</h1>
        <div className='flex flex-wrap justify-center items-center'>{
          items.map((elem) => {
            return (
              <ProductCard
                key={elem.id}
                id={elem.id}
                img={elem.image}
                title={elem.title}
                price={elem.price}
              />
            )
          })
        }</div>
      </div>
      <Footer />
    </>
  )
}

export default Home
