import React from "react";
import './HeaderMobile.css'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineMenuFold } from 'react-icons/ai';
import SideBarNav from "./SideBarNav";

const HeaderMobile = ()=> {
    return (
        <header>
            <div className="headerMobile_container_parent">
                <div className="headerMobile_container">
                    <div className="logoMobile" >
                        <AiOutlineHome size={27} />
                    </div>
                    <div className="navbar">
                       <AiOutlineMenuFold size={25} color='green'/>
                       <SideBarNav/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderMobile