import React from "react";
import './HeaderMobile.css'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineMenuFold } from 'react-icons/ai';
import Sidenav from "../../components/Sidebar/Sidenav";

const HeaderMobile = (props)=> {
    console.log(props);
    return (
        <header>
            <div className="headerMobile_container_parent">
                <div className="headerMobile_container">
                    <div className="logoMobile" >
                        <AiOutlineHome size={27} />
                        <span>Arch</span>
                    </div>
                    <div className="navbar">
                       <AiOutlineMenuFold
                       onClick={props.onOpenNav}
                        size={25} 
                        color='#c200b8'
                        cursor='pointer'
                        />
                       <Sidenav {...props}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderMobile