import React from 'react'
import { useState } from 'react'
import { Link , NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png'

const Navbar = (props) => {

  const [showMenu, setShowMenu] = useState("");

  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  const navLinkStyles = ({isActive}) => {
    return {
      color: isActive ? "#FFB200" : "#000000" ,
    }
  }

  return (
    <>
      <nav className='p-2 flex items-center justify-between w-[100%] space-x-4 shadow-md'>
        <div className='flex space-x-2.5 items-center justify-center'>
          <i className="fa-solid fa-bars text-xl cursor-pointer lg:hidden pl-1" onClick={handleClick}></i>
          <img className='h-8' src={logo} alt="logo" />
          <h1 className='hidden text-2xl font-semibold text-center text-yellow-500 lg:block'><span className='text-3xl text-[#338074]'>E</span>-Cart</h1>
        </div>
        <div className='flex space-x-2.5 lg:space-x-4'>
          <ul className='hidden lg:flex space-x-2 items-center text-lg font-semibold'>
            <NavLink to="/home" className='cursor-pointer' style={navLinkStyles}>
                Home
            </NavLink>
            <NavLink to="/products" className="cursor-pointer" style={navLinkStyles}>
              Products
            </NavLink>
            <NavLink to="/about" className='cursor-pointer' style={navLinkStyles}>
                About
            </NavLink>
            <NavLink to="/contact" className='cursor-pointer' style={navLinkStyles}>
                Contact
            </NavLink>
          </ul>
          <div className='flex items-center bg-white border border-none rounded-xl pl-2 space-x-1 justify-between'>
            <input placeholder='Search..' className='w-3/4 px-2 outline-none' value=''/>
            <i className="fa-solid fa-magnifying-glass bg-[#2e796f] text-white py-[5px] px-2.5 border border-[#2e796f] rounded-r-xl cursor-pointer"></i>
          </div>
          <Link to="/favorites"><i className="fa-regular fa-heart text-xl hover:text-pink-700 cursor-pointer"></i></Link>
          <Link to="/cart"><i className="fa-solid fa-cart-shopping text-lg cursor-pointer"></i></Link>
          <Link to="/login"><i className="fa-solid fa-circle-user text-lg cursor-pointer"></i></Link>
        </div>
      </nav>
      {showMenu && <div className='bg-black/70 absolute top-0 left-0 w-full h-full ease-in-out duration-500 z-10' onClick={handleClick}>
        <div className='bg-white h-full w-3/4 py-3 px-3'>
          <div className='flex justify-between items-center'>
            <div className='' onClick={handleClick}>
              <i className="fa-solid fa-xmark text-xl"></i>
            </div>
            <div className='text-lg font-semibold pr-4'>
              <h1 className='text-2xl font-semibold text-center text-yellow-500'><span className='text-3xl text-[#338074]'>E</span>-Cart</h1>
            </div>
          </div>
          <ul className='text-lg my-6 space-y-3 font-semibold flex flex-col'>
            <Link to="/home" className='cursor-pointer'>Home</Link>
            <Link to="/products" className='cursor-pointer'>Products</Link>
            <Link to="/about" className='cursor-pointer'>About</Link>
            <Link to="/contact" className='cursor-pointer'>Contact</Link>
          </ul>
        </div>
      </div>}
    </>
  )
}

export default Navbar
