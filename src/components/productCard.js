import React from 'react'
import { NavLink } from 'react-router-dom' ;
import { useDispatch } from 'react-redux';
import { singleProduct } from '../store/Slices/productSlice';
import { addCart } from '../store/Slices/cartSlice';
import { addFav } from '../store/Slices/favSlice';

const ProductCard = (props) => {

    const dispatch = useDispatch() ;

    return (
        <>
            <div className='border border-none bg-white shadow-lg rounded-md flex space-y-1.5 flex-col items-center m-3 p-2 w-3/4 md:w-1/4 lg:1/5'>
                <div className='relative'>
                    <img className='h-[100px] w-full object-cover border border-none rounded-md' src={props.img} alt='' />
                </div>
                <h2 className='font-semibold line-clamp-1'>{props.title}</h2>
                <p className='font-bold text-xl'>$ {props.price}</p>
                <div className='space-x-1.5'>
                    <button className='px-2.5 py-1 bg-yellow-500 text-lg text-white font-semibold rounded-md' onClick={() => {dispatch(addCart(props))}}>Add to Cart</button>
                    <i className="fa-solid fa-heart text-white bg-gray-300 text-lg rounded-md px-2 py-1 hover:text-pink-500" onClick={() => {dispatch(addFav(props))}}></i>
                    <NavLink to={'/productpage'}><i className="fa-solid fa-eye text-white bg-gray-300 rounded-md px-2 py-1 text-lg hover:text-sky-300" onClick={() => {dispatch(singleProduct(props.id))}}></i></NavLink>
                </div>
            </div>
        </>
    )
}

export default ProductCard
