import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../pages/Cart'
import { useSelector } from 'react-redux'


export default function Navbar() {
    const item = useSelector((state) => state.cart);
  return (
    <>
    <span> Redux Store </span>
    <div>
        <Link to='/'> Home </Link>
        <Link to='/cart'> Cart </Link>
        <span > Cart item : {item.length} </span>
    </div>
    </>
  )
}
