import React, { Component } from 'react'

export default function Company(props) {
   
    return (
        <React.Fragment> 
            {/* Who we are */}
            <section className="who-we-are-section">
                <div className="top-content">
                    <div className="auto-container">
                        <div className="row">
                        <div className="col-lg-4">
                            <div className="sec-title mb-30">
                                <h3>Bhejde India Pvt ltd</h3>
                                <h6>India’s leading intra city logistics provider company, we are a based out of Jamshedpur, bhej de india works towards improving intra city logistic needs. Providing solution for complex and delayed logistics needs. It helps merchants or general public to shift there product from one point to other.
                                Our focus is to provide one click solution to all logistics needs, also we help driver to get more booking for there vehicles.</h6>
                            </div>
                            {/* <div className="experience-year">
                                <div className="icon"><i className="flaticon-package-1" /></div>
                                <div className="content">
                                    <h3>78 <span>+ Years</span></h3>
                                    <h5>Experience In Logistics</h5>
                                </div>
                            </div> */}
                            <div  onClick={e=>props.set('step',2)} className="link mb-30 text-white"><a className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Our History</span></a></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="image mb-30"><img src="assets/images/resource/image-34.jpg"  /></div>
                        </div>
                        </div>
                    </div>
                </div> 
            </section>
            {/* Statement */}
            <section className="statement-section pt-0">
                <div className="auto-container">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="image"><img src="assets/images/resource/image-35.jpg"  /></div>
                    </div>
                    <div className="col-lg-6">
                    <div className="content">  
                        <div className="badge"><img src="assets/images/resource/badge-3.png"  /></div>
                        {/* Tab panes */}
                        <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                        <div className="tab-pane fadeInUp animated active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                            <div className="text-block">
                            <div className="sec-title mb-30">
                                <div className="sub-title">Statements</div>
                                <h2>Mission Statement</h2>
                            </div>
                            <div className="text">Dedicated To Provide best and one click solutions for all the small scale Indian  logistics needs.      Shop owners, business Entrepreneur or any customer face the same problem every time when they Try to find Small Logistics like Auto, Mini Truck, Pick up Trucks to Transport Products to customers.   It’s Very time consuming and Hectic Job to find the Right Transportation for the Shipment moreover security of shipment is always challenging.</div>
                            </div>
                        </div>
                        <div className="tab-pane fadeInUp animated" id="tab-two" role="tabpanel" aria-labelledby="tab-two">
                            <div className="text-block">
                            <div className="sec-title mb-30">
                                <div className="sub-title">Statements</div>
                                <h2>Vision Statement</h2>
                            </div>
                            <div className="text">As we know “Faster the Logistics moves, Further the country Grows”. India is a developing county and fastest growing major Economy. Logistics is lifeline for the economy faster the products moves more we see the business growth. Shop owners, business Entrepreneur or any customer face the same problem every time when they Try to find Small Logistics like Auto, Mini Truck, Pick up Trucks to Transport Products to customers.   It’s Very time consuming and Hectic Job to find the Right Transportation for the Shipment moreover security of shipment is always challenging. On the other hand, Due to Growing Logistics Needs Young people are buying small Transportation vehicles like Auto’s , Pick upTruck’s, or Mini Trucks to make there lively hood.   We would like to help both interdependent sections to get more business and Hence become Worlds No.1 Logistics provider.</div>
                            </div>
                        </div>
                        <div className="tab-pane fadeInUp animated" id="tab-three" role="tabpanel" aria-labelledby="tab-three">
                            <div className="text-block">
                            <div className="sec-title mb-30">
                                <div className="sub-title">Statements</div>
                                <h2>Company Value</h2>
                            </div>
                            <div className="text">We value Our Drivers and Partners who works really hard to provide your Shipment from one point to other. We would like to help them get more bookings uplift the lifestyle. We believe in honesty and work ethics.</div>
                            </div>
                        </div>
                        </div>
                        <ul className="nav nav-tabs tab-btn-style-one" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="tab-one-area" data-toggle="tab" href="#tab-one" role="tab" aria-controls="tab-one" aria-selected="true">
                            <h4><i className="flaticon-up-arrow" />Mission</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="tab-two-area" data-toggle="tab" href="#tab-two" role="tab" aria-controls="tab-two" aria-selected="false">
                            <h4><i className="flaticon-up-arrow" />Vision</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="tab-three-area" data-toggle="tab" href="#tab-three" role="tab" aria-controls="tab-three" aria-selected="false">
                            <h4><i className="flaticon-up-arrow" />Value</h4>
                            </a>
                        </li>
                        </ul>                        
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </React.Fragment>

    ) 
}
 