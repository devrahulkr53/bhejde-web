import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function MainFooter() {

    const [slide,setSlide] = useState(1);
    const startDate = 2021
    const endDate = new Date().getFullYear() > startDate ? '- '+new Date().getFullYear() : ''

    useEffect(()=>{
        var slideInterval = setInterval(()=>{
            setSlide(slide=>{
                return window.innerWidth >= slide ? slide + 1 : 0;
            })
        },15)
        return function cleanup(){
            clearInterval(slideInterval)
        }
    },[])


    return (
        <React.Fragment>
        <footer className="main-footer">
            <div className="upper-box">
                <div className="auto-container">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="widget contact-widget style-two">
                        <h4>Do You Have Any Question? Please <br /> Contact Our Team</h4>
                        <div className="row">
                        <div className="col-md-6">
                            <div className="wrapper-box">
                            <div className="icon-box">
                                <div className="icon"><span className="flaticon-calling" /></div>
                                <div className="text"><strong>Phone</strong><a href="tel:(+61)3245689790">(+61)32456789</a></div>
                            </div>
                            <div className="icon-box">
                                <div className="icon"><span className="flaticon-mail" /></div>
                                <div className="text"><strong>Email</strong><a href="tel:(+61)32456789790">info@bhejde.com</a></div>
                            </div>
                            <ul className="social-icon">
                                <li><a href="https://www.facebook.com/Bhej-De-India-Move-with-us-106658531761194/"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="https://instagram.com/bhejdeindia?utm_medium=copy_link"><i className="fab fa-instagram" /></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                                <li><a href="#"><i className="fab fa-youtube" /></a></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="icon-box">
                            <div className="icon"><span className="flaticon-mail" /></div>
                            <div>
                                <div className="text"><strong>Mon - Friday</strong>08.00 am to 9.00pm</div>
                                <div className="text"><strong>Saturday</strong>10.00 am to 4.00pm</div>
                                <div className="text"><span>Sunday-Closed</span></div>
                            </div>                                    
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="widget links-widget">
                            <h4 className="widget_title">Useful Links</h4>
                            <div className="widget-content">
                            <ul className="list">
                                <li><Link to="/about">Our Team</Link></li>
                                <li><Link to="#">Press Releases</Link></li>
                                <li><Link to="/driver">Join Our Team</Link></li>
                                {/* <li><Link to="#">Packers & movers</Link></li> */}
                                <li><Link to="/dashboard">Admin</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="widget instagram-widget">
                            <h4 className="widget_title">Our Gallery</h4>
                            <div className="wrapper-box">
                            <div className="image">
                                <img src="/assets/images/gallery/gallery-1.jpg"  />
                                <div className="overlay-link"><a href="/assets/images/gallery/gallery-1.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></a></div>
                            </div>
                            <div className="image">
                                <img src="/assets/images/gallery/gallery-2.jpg"  />
                                <div className="overlay-link"><a href="/assets/images/gallery/gallery-2.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></a></div>
                            </div>
                            <div className="image">
                                <img src="/assets/images/gallery/gallery-3.jpg"  />
                                <div className="overlay-link"><a href="/assets/images/gallery/gallery-3.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></a></div>
                            </div>
                            <div className="image">
                                <img src="/assets/images/gallery/gallery-4.jpg"  />
                                <div className="overlay-link"><a href="/assets/images/gallery/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></a></div>
                            </div>
                            <div className="image">
                                <img src="/assets/images/gallery/gallery-5.jpg"  />
                                <div className="overlay-link"><a href="/assets/images/gallery/gallery-5.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></a></div>
                            </div>
                            <div className="image">
                                <img src="/assets/images/gallery/gallery-6.jpg"  />
                                <div className="overlay-link"><a href="/assets/images/gallery/gallery-6.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></a></div>
                            </div>
                            </div>{/* /.gallery-wrapper */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div> 
            </div>               
        </footer>
        <img src="/gif/moving-truck2.gif" className='d-none d-md-block' width="240px" alt="user" style={{marginLeft:slide+'px',marginTop:'-180px'}} />
        <img src="/gif/moving-truck2.gif" className='d-md-none' width="80px" alt="user" style={{marginLeft:slide+'px',marginTop:'-120px'}} />
        
        {/*End Main Footer*/}
        <div className="footer-bottom">
            <div className="auto-container">
                <div className="row m-0 align-items-center justify-content-between">
                <div className="copyright-text d-md-block d-none">Copyright © {startDate} {endDate} <a href="/" className='text-danger'> BhejDe India.</a> All Rights Reserved.</div>
                <div className="d-md-none text-white">
                    <div>Copyright © {startDate} {endDate}</div>
                    <div><a href="/" className='text-danger'> BhejDe India.</a> All Rights Reserved.</div>
                </div>
                <ul className="menu">
                    <li><Link to="/faq">  FAQ</Link></li>
                    <li><Link to="/terms">Terms &amp; Conditions</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy </Link></li>
                </ul>
                </div> 
                <div className="copyright-text d-none d-md-block text-end">Designed & Developed by <a target='_blank' className='text-danger' href="http://paultechsoftwareservices.com/">Paultech Software Services pvt ltd</a> </div>
                <div className='d-md-none text-end'>
                    <div className='text-white'>Designed & Developed by</div>
                    <div><a target='_blank' className='text-danger' href="http://paultechsoftwareservices.com/">Paultech Software Services pvt ltd</a></div>
                </div>
                <small></small>
            </div>
        </div>
    </React.Fragment>

    )
}
