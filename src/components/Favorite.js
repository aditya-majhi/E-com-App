import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeFav } from '../store/Slices/favSlice';
import { addCart } from '../store/Slices/cartSlice' ;
import { singleProduct } from '../store/Slices/productSlice';

const Favorite = () => {

  const favorite = useSelector(state => state.favorite.value);
  const dispatch = useDispatch();

  const favItems = (favItem) => {
    return (
      <div className='border border-none bg-white shadow-lg rounded-md flex space-y-1.5 flex-col items-center m-3 p-2 w-3/4 md:w-1/4 lg:1/5'>
        <div className='relative'>
          <img className='h-[100px] w-full object-cover border border-none rounded-md' src={favItem.img} alt='' />
        </div>
        <h2 className='font-semibold line-clamp-1'>{favItem.title}</h2>
        <p className='font-bold text-xl'>$ {favItem.price}</p>
        <div className='space-x-1.5'>
          <button className='px-2.5 py-1 bg-yellow-500 text-lg text-white font-semibold rounded-md' onClick={() => { dispatch(addCart(favItem)) }}>Add to cart</button>
          <i className="fa-solid fa-heart-circle-minus text-white bg-gray-300 text-lg rounded-md px-2 md:text-xl py-1 hover:text-pink-500" onClick={() => {dispatch(removeFav(favItem))}}></i>
          <NavLink to={'/productpage'}><i className="fa-solid fa-eye text-white bg-gray-300 rounded-md px-2 py-1 text-lg hover:text-sky-300" onClick={() => {dispatch(singleProduct(favItem.id))}}></i></NavLink>
        </div>
      </div>
    );
  }

  const empty = () => {
    return (
      <div className='text-2xl font-bold mt-4 md:text-4xl md:mt-10'>
        Nothing in favorite..
      </div>
    );
  }

  return (
    <div className='flex flex-wrap justify-center items-center'>
      {
        favorite.length === 0 ? empty() : favorite.map(favItems) 
      }
    </div>
  );
}

export default Favorite ;
