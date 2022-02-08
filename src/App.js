import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './container/home/Home'

import NotFound from './container/notFound'
import Layout from './hoc/layout'
import './App.css'
import HeaderMobile from './container/Header/HeaderMobile'
import Header from './container/Header/Header'
import HomeMobile from './container/home/HomeMobile'


const App = () => {
  return (
    <div className='app__container'>
      <Layout>
        <Routes>
          {/* <Route exact path='/' element={<Home/>}/> */}
          <Route exact path='/' element={<HomeMobile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Layout>
      {/* <HeaderMobile/>
      <Header/> */}
      
    </div>

    // <Layout>


    //   <Routes>
    //     <Route exact path='/' element={<Home />} />
    //     <Route path="*" element={<NotFound />} />
    //     {/* <Route exact path="/home" element={} /> */}
    //   </Routes>
    // </Layout>
  )
}

export default App