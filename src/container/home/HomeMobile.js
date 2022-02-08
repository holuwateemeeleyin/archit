import React from 'react';
import frontViewImage from '../../assets/6.png'
import './HomeMobile.css'
import archImage1 from '../../assets/arch4.jpg'

export default function homeMobile() {
    return <div className='homeMobile_container-parent' id='#home'>
        <div className='homeMobile_container'>
            <div className='homeMobile_container-text'>
                <div className='homeMobile_container-text-heading'>
                    <h1>
                        {/* We Build What Lasts Forever */}
                        Building Creative Communities
                    </h1>
                    <p>
                        Archfirm- a place where imagination and truth collides, let us help you visualize your dream.
                        Aimed for the best by building with us
                    </p>
                    <div className='button_container'>
                        <button>
                            SEE MORE
                        </button>
                    </div>
                </div>

            </div>
            <div className='homeMobile_frontView-image'>
                <img src={frontViewImage} alt='frontView' width='100%' />
            </div>
        </div>
        <div className='homeMobile_galleryView' id='#gallery'>
            <div className='galleryView_heading'>
                <h2>Gallery</h2>
                <p>
                    Lorem Ip Ipsum sum em Ip Ip orem Ip Ipsum su,
                    Lorem Ip Ipsum sum em Ip Ip orem Ip Ipsum su
                    If you open it directly in the browser, you will see an empty page.
                    You can add webfonts, meta tags, or analytics to this file.
                    The build step will place the bundled scripts into the tag.

                </p>
            </div>
            <div className='galleryView_cards'>
                <div className='galleryView_cards-1'>
                    <img src={archImage1} alt='archImage1' width='100%'/>
                    <div className='galleryView_cards-content'>
                        <h3> OLYMPIA DUMBO</h3>
                        <p> Location: <span> Dumbo, NY</span></p>
                        <p> Year: <span> 2018 - 2021</span> </p>
                        <p> Role: <span> Interior Design</span></p>
                        <p><button className='button'>Contact</button></p>
                    </div>
                </div>
                <div className='galleryView_cards-1'>
                    <img src={archImage1} alt='archImage1' width='100%'/>
                    <div className='galleryView_cards-content'>
                        <h3> OLYMPIA DUMBO</h3>
                        <p> Location: <span> Dumbo, NY</span></p>
                        <p> Year: <span> 2018 - 2021</span> </p>
                        <p> Role: <span> Interior Design</span></p>
                        <p><button className='button'>Contact</button></p>
                    </div>
                </div>
                <div className='galleryView_cards-1'>
                    <img src={archImage1} alt='archImage1' width='100%'/>
                    <div className='galleryView_cards-content'>
                        <h3> OLYMPIA DUMBO</h3>
                        <p> Location: <span> Dumbo, NY</span></p>
                        <p> Year: <span> 2018 - 2021</span> </p>
                        <p> Role: <span> Interior Design</span></p>
                        <p><button className='button'>Contact</button></p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='homeMobile_Events'>
            <h3>
                Events
            </h3>
        </div>
        <div className='homeMobile_aboutUs'>
            <h2>
                About Us
            </h2>
        </div>
    </div>;
}
