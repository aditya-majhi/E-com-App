import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeCart } from '../store/Slices/cartSlice';

const Cart = () => {

  const cart = useSelector(state => state.cart.value);
  const dispatch = useDispatch();

  const cartItems = (cartItems) => {
    return (
      <div className='border border-none bg-white shadow-lg rounded-md flex space-y-1.5 flex-col items-center m-3 p-2 w-3/4 md:w-1/4 lg:1/5'>
        <div className='relative'>
          <img className='h-[100px] w-full object-cover border border-none rounded-md' src={cartItems.img} alt='' />
        </div>
        <h2 className='font-semibold line-clamp-1'>{cartItems.title}</h2>
        <p className='font-bold text-xl'>$ {cartItems.price}</p>
        <div className='space-x-1.5'>
          <button className='px-2.5 py-1 bg-yellow-500 text-lg text-white font-semibold rounded-md' onClick={() => { dispatch(removeCart(cartItems))}}>Remove Item</button>
          <NavLink to={'/productpage'}><i className="fa-solid fa-eye text-white bg-gray-300 rounded-md px-2 py-1 text-lg hover:text-sky-300"></i></NavLink>
        </div>
      </div>
    );
  }

  const empty = () => {
    return (
      <div className='text-2xl font-bold mt-4 md:text-4xl md:mt-10'>
        Nothing in Cart..
      </div>
    );
  }

  return (
    <div className='flex flex-wrap justify-center items-center'>
      {
        cart.length === 0 ? empty() : cart.map(cartItems) 
      }
    </div>
  );
}

export default Cart ;
