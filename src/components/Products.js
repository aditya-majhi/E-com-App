import React, { useEffect, useState } from 'react'
import ProductCard from './productCard';

const Products = () => {

  const [items , setItems] = useState([]) ;
  const [url , setUrl] = useState("https://fakestoreapi.com/products/") ;

  useEffect(() => {
    fetch(url).then((res) => {
      return res.json() ;
    }).then((data) => {
      setItems(data) ;
    })
  } , [url])

  return (
    <>
      <div className='bg-white pt-4 space-y-4 mb-4'>
        <h1 className='text-center font-bold text-2xl'>Our Products</h1>
        <div className='flex items-center justify-center md:space-x-3 space-x-1'>
          <button className='px-2.5 py-1 bg-gray-200 md:text-lg text-sm hover:bg-gray-400 font-semibold rounded-md' onClick={() => {setUrl("https://fakestoreapi.com/products")}}>All</button>
          <button className='px-2.5 py-1 bg-gray-200 md:text-lg text-sm hover:bg-gray-400 text-black font-semibold rounded-md' onClick={() => {setUrl("https://fakestoreapi.com/products/category/electronics")}}>Electronic</button>
          <button className='px-2.5 py-1 bg-gray-200 md:text-lg text-sm hover:bg-gray-400 text-black font-semibold rounded-md' onClick={() => {setUrl("https://fakestoreapi.com/products/category/jewelery")}}>Jewelry</button>
          <button className='px-2.5 py-1 bg-gray-200 md:text-lg text-sm hover:bg-gray-400 text-black font-semibold rounded-md' onClick={() => {setUrl("https://fakestoreapi.com/products/category/men's clothing")}}>Men</button>
          <button className='px-2.5 py-1 bg-gray-200 md:text-lg text-sm hover:bg-gray-400 text-black font-semibold rounded-md' onClick={() => {setUrl("https://fakestoreapi.com/products/category/women's clothing")}}>Women</button>
        </div>
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
    </>
  )
}

export default Products
