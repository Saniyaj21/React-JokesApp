

import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <nav>
            <Link className='menu' to={'/'}>Home</Link>
            <Link className='menu' to={'/about'}>About Me</Link>
        </nav>
    )
}

export default Header