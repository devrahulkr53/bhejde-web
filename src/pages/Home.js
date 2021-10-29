import React from 'react' 
import { Link } from 'react-router-dom'

export default function Home() {

    const whyBhejDe = [
        {
            img:'https://cms-web.olacabs.com/00000000368.jpg',
            title:'Cabs for Every Pocket',
            desc:'From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket'
        },
        {
            img:'https://cms-web.olacabs.com/00000000370.jpg',
            title:'Secure and Safer Rides',
            desc:'Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience.'
        },
        {
            img:'https://cms-web.olacabs.com/00000000374.jpg',
            title:'Ola Select',
            desc:'A membership program with Ola that lets you ride a Prime Sedan at Mini fares, book cabs without peak pricing and has zero wait time'
        },
        {
            img:'https://cms-web.olacabs.com/00000000371.jpg',
            title:'In Cab Entertainment',
            desc:'Play music, watch videos and a lot more with Ola Play! Also stay connected even if you are travelling through poor network areas with our free wifi facility.'
        },
    ]

    return (<React.Fragment>
        
        {/* Bnner Section */}
        <section className="banner-section mt-0 style-two">
        <div className="swiper-container banner-slider">
            <div className="swiper-wrapper">
            {/* Slide Item */}
            <div className="swiper-slide" style={{backgroundImage: 'url(/images/2.jpg'}}>
                <div className="content-outer">
                <div className="content-box">
                    <div className="inner">
                    <div className="logo"><img src="assets/images/resource/badge.png"  /></div>
                    <h1>Live Tracking <br /> for your Shipment.</h1>
                    <div className="text"><i className="far fa-meh" /> Check your Shipment anytime from anywhere</div>
                    <div className="link-box">
                        <a href="service.html" className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Track Now</span></a>
                    </div>
                    </div>                               
                </div>
                </div>
            </div>
            {/* Slide Item */}
            <div className="swiper-slide" style={{backgroundImage: 'url(/images/1.jpg'}}>
                <div className="content-outer">
                <div className="content-box">
                    <div className="inner">
                    <div className="logo"><img src="assets/images/resource/badge.png"  /></div>
                    <h1>Find best suited Packers <br /> & Movers in one click.</h1>
                    <div className="text"><i className="far fa-meh" /> Compare and Get best competitive Pricing.</div>
                    <div className="link-box">
                        <a href="#" className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Packers & Movers</span></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Slide Item */}
            <div className="swiper-slide" style={{backgroundImage: 'url(/images/shipment2.jpg'}}>
                <div className="content-outer">
                <div className="content-box">
                    <div className="inner">
                    <div className="logo"><img src="assets/images/resource/badge.png"  /></div>
                    <h1>Stop waiting <br /> for your Shipment</h1>
                    <div className="text"><i className="far fa-meh" /> Fast and One time Delivery</div>
                    <div className="link-box">
                        <a href="#" className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Get a Quote</span></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Slide Item */}
            <div className="swiper-slide" style={{backgroundImage: 'url(/images/car-insurance.jpg'}}>
                <div className="content-outer">
                <div className="content-box">
                    <div className="inner">
                    <div className="logo"><img src="assets/images/resource/badge.png"  /></div>
                    <h1>Easy and Low Prices <br /> Insurance for your Goods</h1>
                    <div className="text"><i className="far fa-meh" />1000+ Positive Reviews</div>
                    <div className="link-box">
                        <a href="#" className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Explore</span></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Slide Item */}
            <div className="swiper-slide" style={{backgroundImage: 'url(/images/packers-movers.jpg'}}>
                <div className="content-outer">
                <div className="content-box">
                    <div className="inner">
                    <div className="logo"><img src="assets/images/resource/badge.png"  /></div>
                    <h1>Best Mobile App to Book <br /> Any Commercial vehicles.</h1>
                    <div className="text"><i className="far fa-meh" />1000+ Positive Reviews</div>
                    <div className="link-box">
                        <a href="#" className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Download App</span></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Slide Item */}
            <div className="swiper-slide" style={{backgroundImage: 'url(/images/live-tracking.png'}}>
                <div className="content-outer">
                <div className="content-box">
                    <div className="inner">
                    <div className="logo"><img src="assets/images/resource/badge.png"  /></div>
                    <h1>Add labour to <br /> load your products</h1>
                    <div className="text"><i className="far fa-meh" /> Compare and Get best competitive Pricing.</div>
                    <div className="link-box">
                        <a href="#" className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Packers & Movers</span></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="banner-slider-nav style-three">
            <div className="banner-slider-control banner-slider-button-prev"><span><i className="flaticon-right-arrow-6" /></span></div>
            <div className="banner-slider-control banner-slider-button-next"><span><i className="flaticon-right-arrow-6" /></span> </div>
        </div>
        <div className="banner-slider-pagination" />
        </section>

        <section className="container py-5">
            <div className="row">
                <div className="col-md-7 my-auto">
                    {/* <div className="display-5">One click booking for your logistics needs</div>
                    <div className="text-secondary my-1" style={{fontSize:"22px"}}>India’s leading logistics provider.
                    Book mini trucks, auto, pick up trucks in one click.
                    </div>
                    <button className="btn btn-warning my-2 px-4 btn-lg">Download app</button> */}
                    <form className="contact-form">
                        <h1>Book a ride now</h1>
                        <input type="text" name="pickup" placeholder="Pick up location" className="w-100 p-3 border border-dark my-2" />
                        <input type="text" name="drop" placeholder="Drop location" className="w-100 p-3 border border-dark my-2" />
                        <div className="row">
                            <div className="col-md-6">
                                <input type="date" name="date" className="w-100 p-3 border border-dark my-2" />
                            </div>
                            <div className="col-md-6">
                                <input type="time" name="time" className="w-100 p-3 border border-dark my-2" />
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <button type="button" class="theme-btn btn-style-one"><span><i class="flaticon-up-arrow"></i>Book Now</span></button>
                            <Link to="/packers-movers"><button type="button" class="bg-danger text-white py-3 px-5 ms-auto">Packers & Movers</button></Link>
                        </div>            
                    </form>
                </div>
                <div className="col-md-5 py-4">
                    <img src="https://www.logisticadda.in/blog/wp-content/uploads/2020/07/advantage.png" alt="Taxi" width="100%" />
                </div>
            </div>
        </section>
 
        <section className="Whychooseus-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                {/* <div className="sub-title text-center">Why Choose Us</div> */}
                <h2>Why Ship with BhejDe India</h2>
                </div>
                <div className="row">
                <div className="col-lg-6 col-md-6 why-choose-block">
                    <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
                    {/* <div className="icon">
                        <span className="count">01</span><i className="flaticon-shield" />
                    </div> */}
                    <img src="/why/oneclicklogitech.png" alt="oneclicklogitech" width="150px" />
                    <div className="content">
                        <h4>Fast Booking</h4>
                        <div className="text">One click booking for your <br /> logistics needs</div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 why-choose-block">
                    <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
                    {/* <div className="icon"><span className="count">02</span><i className="flaticon-delivery" /></div> */}
                    <img src="/why/verified_drivers.jpg" alt="" width="150px" />
                    <div className="content">
                        <h4>Verified & trusted drivers</h4>
                        <div className="text">Verified & trusted drivers ( complex but <br /> straight process to register your vehicles)</div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 why-choose-block">
                    <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
                    {/* <div className="icon"><span className="count">03</span><i className="flaticon-24-hours" /></div> */}
                    <img src="/why/book_packers_movers.png" alt="book_packers_movers" width="150px" />
                    <div className="content">
                        <h4>Book Packers & Movers</h4>
                        <div className="text">Book packers & movers ( get <br /> best and competitive pricing from <br /> our trusted partners)</div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 why-choose-block">
                    <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
                    {/* <div className="icon"><span className="count">04</span><i className="flaticon-24-hours" /></div> */}
                    <img src="/why/insurance.png" alt="insurance" width="150px" />
                    <div className="content">
                        <h4>One click Insurance</h4>
                        <div className="text">Insure your shipment from our trusted <br /> insurance provider (one click insurance <br /> for your shipment)</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        {/* End Bnner Section */}

        {/* <div className="container">

            <div className="row">
                <div className="col-md-7 my-auto">
                    <div className="display-5">One click booking for your logistics needs</div>
                    <div className="text-secondary my-1" style={{fontSize:"22px"}}>India’s leading logistics provider.
                    Book mini trucks, auto, pick up trucks in one click.
                    </div>
                    <button className="btn btn-warning my-2 px-4 btn-lg">Download app</button>
                </div>
                <div className="col-md-5 py-4">
                    <img src="https://www.logisticadda.in/blog/wp-content/uploads/2020/07/advantage.png" ="Taxi" width="100%" />
                </div>
            </div>
            
            <div className="row my-4 py-4">
                <div className="col-md-12">
                    <h3 className="display-6">Why ride with BhejDe?</h3> 
                    <ul>
                        
                        <li>One click booking for your logistics needs</li>
                        <li>Verified & trusted drivers ( complex but straight process to register your vehicles)</li>
                        <li>Book packers & movers ( get best and competitive pricing from our trusted partners)</li>
                        <li>Insure your shipment from our trusted insurance provider (one click insurance for your shipment)</li>

                    </ul>
                </div>
            </div>  
            
        </div> */}
    </React.Fragment>)
}
