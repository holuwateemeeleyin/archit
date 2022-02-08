import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
export default function header() {
    return <div className='header_container_parent'>
        <div className="header_container">
            <div className="logo" >
                <AiFillHome size={25} color='green'/> 
                <span>ArchFirm</span>
            </div>
            <div className="navbar-link">
                <a href='/#gallery'>Home</a>
                <Link to='/#gallery'>Gallery</Link>
                <Link to='/events'>Events</Link>
                <Link to='/aboutUs'>About Us</Link>
            </div>
        </div>

    </div>;
}
