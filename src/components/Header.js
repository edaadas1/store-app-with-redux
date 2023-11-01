import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

    const cartItems = useSelector(state => state.product.list)

    return (
        <div className='flex bg-white py-6 px-20 justify-end'>
            <Link to="/"><p className='hover:cursor-pointer mr-5 font-bold'>HOME</p></Link>
            <Link to="/cart"><p className='hover:cursor-pointer font-bold'>CART ({cartItems.length})</p></Link>
        </div>
    )
}

export default Header
