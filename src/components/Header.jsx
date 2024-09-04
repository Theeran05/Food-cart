import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";

export const Header = ({cart}) => {
    return (
        <div className='navbar'>
            <h1 className="logo">
                Food Cart
            </h1>
            <ul>
                <li>
                    <Link to={"/"}  className='view'>
                    <a href="#"className='nav'>Home</a>
                    </Link>
                </li>
                <li>
                    <Link to={"/Cart"} className='view'>
                    <a href="#"className='nav'>View Cart<span className='span'><FaShoppingCart /></span></a>  <sup>{cart.length}</sup>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
