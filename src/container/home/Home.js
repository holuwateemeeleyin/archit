




import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className='home-container' id="home">
            {/* Aimed for the best, Build with us  */}
            <div className='row'>
                <div className='column'>
                    <h2>
                        We  <br />
                        Build that <br />
                        Last Forever
                    </h2>
                    <p className='desc'>
                        Archfirm- a place where imagination and truth collides, let us help you visualize your dream.
                        Aimed for the best by building with us.
                    </p>
                    
                </div>
                <div className='column'>
                    <img src='../images/6.png' alt='arch' style={{width:'100%'}} className='responsive' />
                </div>
            </div>
            <div>
                Carousel
            </div>
        </div>
    )
}

export default Home