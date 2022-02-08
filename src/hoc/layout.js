import React from 'react'
import HeaderMobile from '../container/Header/HeaderMobile'
import Header from '../container/Header/Header'

const Layout = (props)=> {
    return (
        <div>
            <Header/>
            <HeaderMobile/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout