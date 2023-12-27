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
            <div className="container-fluid herohero">
                <div className="row">
                    <div className="col-lg-6 col-12 text-center text-lg-start d-none d-lg-block" id='bigHero'>
                        <h1 className='heroText'>Discover a world where education meets excitement</h1>
                        <p className='smallHero mt-lg-4'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
                    </div>
                    <div className="col-lg-6 col-12 text-center p-5 p-lg-0">
                        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" data-bs-touch="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={image1} className="img-fluid p-lg-2 p-4" alt="child image 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={image2} className="img-fluid p-lg-2 p-4" alt="child image 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src={image3} className="img-fluid p-lg-2 p-4" alt="child image 3" />
                                </div>
                                <div className="carousel-item">
                                    <img src={image4} className="img-fluid p-lg-2 p-4" alt="child image 4" />
                                </div>
                                <div className="carousel-item">
                                    <img src={image5} className="img-fluid p-lg-2 p-4" alt="child image 5" />
                                </div>
                                <div className="carousel-item">
                                    <img src={image6} className="img-fluid p-lg-2 p-4" alt="child image 6" />
                                </div>
                            </div>
                            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button> */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 text-center text-lg-start d-lg-none d-md-block d-block" id='bigHero'>
                        <h1 className='heroText heroTextsm'>Discover a world where education meets excitement</h1>
                        <p className='smallHero smallHerosm mt-lg-4'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection