import React from 'react' 

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
            <div className="swiper-slide" style={{backgroundImage: 'url(assets/images/main-slider/image-4.jpg)'}}>
                <div className="content-outer">
                <div className="content-box">
                    <div className="inner">
                    <div className="logo"><img src="assets/images/resource/badge.png"  /></div>
                    <h1>Delivering <br />service on time</h1>
                    <div className="text"><i className="far fa-meh" />4 Types of Freight Services</div>
                    <div className="link-box">
                        <a href="#" className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Get a Quote</span></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Slide Item */}
            <div className="swiper-slide" style={{backgroundImage: 'url(assets/images/main-slider/image-5.jpg)'}}>
                <div className="content-outer">
                <div className="content-box">
                    <div className="inner">
                    <div className="logo"><img src="assets/images/resource/badge.png"  /></div>
                    <h1>New track <br />                                     for our busines</h1>
                    <div className="text"><i className="far fa-meh" />4 Types of Freight Services</div>
                    <div className="link-box">
                        <a href="service.html" className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Our Services</span></a>
                    </div>
                    </div>                               
                </div>
                </div>
            </div>
            {/* Slide Item */}
            <div className="swiper-slide" style={{backgroundImage: 'url(assets/images/main-slider/image-6.jpg)'}}>
                <div className="content-outer">
                <div className="content-box">
                    <div className="inner">
                    <div className="logo"><img src="assets/images/resource/badge.png"  /></div>
                    <h1>Quality is <br />our first concern</h1>
                    <div className="text"><i className="far fa-meh" />1000+ Positive Reviews</div>
                    <div className="link-box">
                        <a href="#" className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Testimonials</span></a>
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
                    <h3 className="display-6">Why ride with Bhejde?</h3> 
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
