import React, { Component } from 'react'

export default class ContactUs extends Component {
    render() {
        return (
            <div>
                <section className="map-section">
                    <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd" width={600} height={490} style={{border: 0, width: '100%'}} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                </section> 
                {/* Contact Info section two */}
                <section className="contact-info-section-two">
                    <div className="auto-container">
                    <div className="nav-tabs-wrapper">
                        <div className="nav nav-tabs tab-btn-style-two">
                        <div className="theme_carousel owl-theme owl-carousel" data-options="{&quot;loop&quot;: false, &quot;margin&quot;: 0, &quot;autoheight&quot;:true, &quot;lazyload&quot;:true, &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 6000, &quot;smartSpeed&quot;: 1000, &quot;responsive&quot;:{ &quot;0&quot; :{ &quot;items&quot;: &quot;1&quot; }, &quot;600&quot; :{ &quot;items&quot; : &quot;1&quot; }, &quot;768&quot; :{ &quot;items&quot; : &quot;2&quot; } , &quot;992&quot;:{ &quot;items&quot; : &quot;2&quot; }, &quot;1200&quot;:{ &quot;items&quot; : &quot;3&quot; }}}">
                            <ul className="item">
                            <li><a className="active" data-toggle="tab" href="#tab-one">
                                <h4>Hoxton - HO</h4>
                                </a></li>
                            </ul>
                            <ul className="item">
                            <li><a data-toggle="tab" href="#tab-two">
                                <h4>Melbourne</h4>
                                </a></li>
                            </ul>
                            <ul className="item">
                            <li><a data-toggle="tab" href="#tab-three">
                                <h4>Houston</h4>
                                </a></li>
                            </ul>
                            <ul className="item">
                            <li><a className="active" data-toggle="tab" href="#tab-four">
                                <h4>Hoxton - HO</h4>
                                </a></li>
                            </ul>
                            <ul className="item">
                            <li><a data-toggle="tab" href="#tab-five">
                                <h4>Melbourne</h4>
                                </a></li>
                            </ul>
                            <ul className="item">
                            <li><a data-toggle="tab" href="#tab-six">
                                <h4>Houston</h4>
                                </a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        
                        <div className="tab-pane fadeInUp animated active" id="tab-two" role="tabpanel" aria-labelledby="tab-two">
                            <div className="row">
                                <div className="col-lg-6">
                                <div className="outer-box">
                                    <h4><span className="flaticon-cursor" />Main road near Shiv mandir <br /> Manoharpur, West Sighbhum, Jharkhand.</h4>
                                    <div className="row">
                                    <div className="col-md-6">
                                        <div className="wrapper-box">
                                        <div className="icon-box">
                                            <div className="icon"><span className="flaticon-calling" /></div>
                                            <div className="text-area">
                                            <div className="text"><strong>Phone</strong><a href="tel:(+61)3245689790">(+61)32456789</a></div>
                                            </div>
                                        </div>
                                        <div className="icon-box">
                                            <div className="icon"><span className="flaticon-mail" /></div>
                                            <div className="text-area">
                                            <div className="text"><strong>Email</strong><a href="tel:(+61)32456789790">info@bhejde.com</a></div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="icon-box">
                                        <div className="icon"><span className="flaticon-mail" /></div>
                                        <div className="text-area">
                                            <div className="text"><strong>Mon - Friday</strong>08.00 am to 9.00pm</div>
                                            <div className="text"><strong>Saturday</strong>10.00 am to 4.00pm</div>
                                        </div>                                    
                                        </div>
                                    </div>
                                    </div>
                                </div>                            
                                </div>
                                <div className="col-lg-6">
                                <div className="sec-title">
                                    <div className="sub-title">Get a Quote</div>
                                    <h2>Start Your Shipping</h2>
                                </div>
                                <div className="text">Indignation and dislike men who are so beguiled &amp; demoralized by <br /> the charms of pleasure of the moment.</div>
                                <div className="link">
                                    <a href="#" className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Get A Quote</span></a>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                        
                         
                    </div>
                    </div>
                </section>
                {/* Contact form section */}
                <section className="contact-form-section">
                    <div className="auto-container">
                    <div className="sec-title text-center">
                        <div className="sub-title">Drop a line</div>
                        <h2>We’re Always Here for You</h2>
                        <div className="text">Please do not hesitate to contact us if you require further information about our logisitc service.</div>
                    </div>
                    {/*Contact Form*/}
                    <div className="contact-form">
                        <form method="post" action="inc/sendemail.php" id="contact-form">
                        <div className="row">
                            <div className="form-group col-md-6">
                            <input type="text" name="form_name" defaultValue placeholder="Your Name" required />
                            </div>
                            <div className="form-group col-md-6">
                            <input type="text" name="company_name" defaultValue placeholder="Company Name" required />
                            </div>                        
                            <div className="form-group col-md-4">
                            <input type="text" name="email" defaultValue placeholder="Your Email" required />
                            </div>                        
                            <div className="form-group col-md-4">
                            <input type="text" name="form_phone" defaultValue placeholder="PHone Num" required />
                            </div>                        
                            <div className="form-group col-md-4">
                            <select className="selectpicker" name="form_subject">
                                <option value="*">Enquire About</option>
                                <option value=".category-1">About Company </option>
                                <option value=".category-3">Leadership Team</option>
                                <option value=".category-4">Global Networks</option>
                            </select>
                            </div>                        
                            <div className="form-group col-md-12">
                            <textarea name="form_message" placeholder="Massage" defaultValue={""} />
                            </div>                        
                            <div className="form-group text-center col-md-12">
                            <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" defaultValue />
                            <button className="theme-btn btn-style-one" type="submit" data-loading-text="Please wait..."><span><i className="flaticon-up-arrow" />Send Message</span></button>
                            </div>
                        </div>
                        </form>
                    </div>
                    {/*End Contact Form*/}
                    </div>
                </section>
            </div>
        )
    }
}
