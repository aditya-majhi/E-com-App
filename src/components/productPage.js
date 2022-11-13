import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCart } from '../store/Slices/cartSlice';
import { addFav } from '../store/Slices/favSlice';

const ProductPage = () => {

  const [item, setItem] = useState({});
  const url = useSelector(state => state.url.value) ;
  const dispatch = useDispatch() ;
  
  useEffect(() => {
      fetch(url).then((res) => {
        return res.json() ;
      }).then((data) => {
        setItem(data) ;
        console.log(data) ;
      })
  } , [url])

  return (
    <div className='h-screen bg-white flex flex-col items-center pt-12 space-y-3 md:flex-row md:justify-between'>
      <img src={item.image} alt='' className='h-[200px] w-[200px] md:w-[400px] md:h-[400px] md:mx-auto' />
      <div className='space-y-3 w-4/5 md:w-1/2 md:mx-auto'>
        <div className='space-y-2'>
          <h1 className='text-lg font-bold md:text-2xl'>{item.title}</h1>
          <p className='text-sm'>{item.description}</p>
        </div>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold md:text-3xl'>$ {item.price}</h2>
        </div>
        <div className='flex space-x-3'>
          <button className='px-2.5 py-1 bg-yellow-500 text-xl md:text-2xl text-white font-semibold rounded-md' onClick={() => {dispatch(addCart(item))}}>Add to Cart</button>
          <i className="fa-solid fa-heart text-white bg-gray-300 text-lg rounded-md px-2 md:text-2xl py-1 hover:text-pink-500" onClick={() => {dispatch(addFav(item))}}></i>
        </div>
      </div>
    </div>
  )
}

export default ProductPage

