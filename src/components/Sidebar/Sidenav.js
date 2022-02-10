import React from 'react';
import { SideNav } from 'react-simple-sidenav';
import { Link } from 'react-router-dom'
import './Sidenav.css'

export default function sidenav(props) {
    console.log(props);
  return <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        openFromRight
        navStyle={{
            background: '#fff',
            maxWidth: '250px',
        }}
        > 
        <div className='sidebar_container'>
            <div className='sidebar_close-button'>
                <button onClick={props.onHideNav} className='close'>
                    X
                </button>
            </div>
            <div className='sidebar_link'>
            <Link to='/'>Home</Link>
            <Link to='/'>Gallery</Link>
            <Link to='/'>Event</Link>
            <Link to='/'>About US</Link>
            </div>
        </div>
        </SideNav>
  </div>;
}