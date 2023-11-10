import React from 'react';
import image1 from '../assets/images/hyra1.png'
import image2 from '../assets/images/hyra2.png'
import image3 from '../assets/images/hyra3.png'
import image4 from '../assets/images/hyra4.png'
import image5 from '../assets/images/hyra5.png'
import image6 from '../assets/images/hyra6.png'

const Herosection = () => {
    return (
        <>
            <div className="container-fluid mt-lg-5">
                <div className="row">
                    <div className="col-lg-6 col-12 text-center text-lg-start d-none d-lg-block" id='bigHero'>
                        <h1 className='heroText'>Discover a world where education meets excitement</h1>
                        <p className='smallHero mt-lg-4'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
                    </div>
                    <div className="col-lg-6 col-12 text-center p-5 p-lg-0">
                        <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="3000">
                                    <img src={image1} class="img-fluid p-lg-2 p-4" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                <img src={image2} class="img-fluid p-lg-2 p-4" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <img src={image3} class="img-fluid p-lg-2 p-4" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <img src={image4} class="img-fluid p-lg-2 p-4" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <img src={image5} class="img-fluid p-lg-2 p-4" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <img src={image6} class="img-fluid p-lg-2 p-4" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 text-center text-lg-start d-lg-none d-md-none" id='bigHero'>
                        <h1 className='heroText'>Discover a world where education meets excitement</h1>
                        <p className='smallHero mt-lg-4'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection