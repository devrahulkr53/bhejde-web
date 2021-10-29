import React, { Component } from 'react'
import { Link } from 'react-router-dom'


// import useScript from '../../hooks/useScript';

export default function MainNavbar() {
        
      
        return (
            <header className="main-header header-style-two">
              {/* Header Top */}
              <div className="header-top d-none d-md-block">
                <div className="auto-container">
                  <div className="inner-container">
                    <div className="left-column">
                      <ul className="social-icon">
                        <li><a href="https://www.facebook.com/Bhej-De-India-Move-with-us-106658531761194/"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="https://instagram.com/bhejdeindia?utm_medium=copy_link"><i className="fab fa-instagram" /></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                        <li><a href="#"><i className="fab fa-youtube" /></a></li>
                      </ul> 
                    </div>
                    <div className="right-column"> 
                      <div className="phone-number"><i className="flaticon-calling" /><a href="tel:(+61)32456789" />(+61) 324 56 789</div>
                      <div className="mail-address"><i className="flaticon-mail" /><a href="tel:(+61)32456789790">info@bhejde.com</a></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Header Upper */}
              <div className="header-upper">
                <div className="auto-container">
                  <div className="inner-container">
                    {/*Logo*/}
                    <div className="logo-box">
                      <div className="logo">
                        <a href="/" className="d-flex align-items-center">
                          <img src="/logoIco2.png" width="80px"  /> 
                          <div className="p-2">
                            <h3 className="text-white">BhejDe India</h3>
                            <h6 className="text-secondary">Move with us</h6>

                          </div>
                          {/* <img src="assets/images/logo-v2.png"  /> */}
                        </a>
                      </div>
                    </div>
                    <div className="header-left-option">
                      <div className="option-box">
                        <div className="icon"><span className="flaticon-tracking" /></div>
                        <h4>Track Shipment <i className="flaticon-up-arrow" /></h4>
                        <div className="order-form-area">
                          <div className="wrapper-box">
                            <h4>Track Your Shipment</h4>
                            <form className="order-form">
                              <div className="form-group">
                                <input type="text" placeholder="Enter Shipment Number *" />
                              </div>
                              <div className="form-group">
                                <select className="selectpicker" name="make">
                                  <option value="*">Type of Reference *</option>
                                  <option value=".category-1">Package</option>
                                  <option value=".category-3">Freight</option>
                                  <option value=".category-4">Mail of Innovations</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <button type="submit" className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Track Now</span></button>
                              </div>
                            </form>
                          </div>                        
                        </div>
                      </div>
                      <div className="option-box">
                        <a href="request-quote.html">
                          <div className="icon"><span className="flaticon-test" /></div>
                          <h4>Get A Quote <i className="flaticon-up-arrow" /></h4>
                        </a>
                      </div>
                    </div>
                    <div className="right-column ml-md-auto">
                      {/*Nav Box*/}
                      <div className="nav-outer">
                        {/*Mobile Navigation Toggler*/}
                        <div className="mobile-nav-toggler"><img src="assets/images/icons/icon-bar-2.png"  /></div>
                        {/* Main Menu */}
                        <nav className="main-menu navbar-expand-md navbar-light">
                          <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation">
                              <li><a href="/">Home</a></li>
                              <li><Link to="/about">About Us</Link></li>
                              <li><Link to="/contactus">Contact</Link></li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                      <div className="navbar-right-info">
                        <div className="sign-in">
                          <Link to="/packers-movers"><button className="p-2 px-4 border border-warning text-dark rounded">Packers & Movers</button></Link>
                        </div>
                        <div className="language">
                          <Link to="/driver"><button style={{backgroundColor:"darkred"}} className="p-3 px-5 rounded text-white">Become a Driver</button></Link>
                        </div>
                      </div>
                    </div>                        
                  </div>
                </div>
              </div>
              {/*End Header Upper*/}
              {/* Sticky Header  */}
              {/* <div className="sticky-header">
                <div className="header-upper">
                  <div className="auto-container">
                    <div className="inner-container">
                      
                      <div className="logo-box">
                        <div className="logo"><a href="index.html"><img src="assets/images/logo-v2.png"  /></a></div>
                      </div>
                      <div className="header-left-option">
                        <div className="option-box">
                          <div className="icon"><span className="flaticon-tracking" /></div>
                          <h4>Track Shipment <i className="flaticon-up-arrow" /></h4>
                          <div className="order-form-area">
                            <div className="wrapper-box">
                              <h4>Track Your Shipment</h4>
                              <form className="order-form">
                                <div className="form-group">
                                  <input type="text" placeholder="Enter Shipment Number *" />
                                </div>
                                <div className="form-group">
                                  <select className="selectpicker" name="make">
                                    <option value="*">Type of Reference *</option>
                                    <option value=".category-1">Package</option>
                                    <option value=".category-3">Freight</option>
                                    <option value=".category-4">Mail of Innovations</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <button type="submit" className="theme-btn btn-style-one"><span><i className="flaticon-up-arrow" />Track Now</span></button>
                                </div>
                              </form>
                            </div>                        
                          </div>
                        </div>
                        <div className="option-box">
                          <a href="request-quote.html">
                            <div className="icon"><span className="flaticon-test" /></div>
                            <h4>Get A Quote<i className="flaticon-up-arrow" /></h4>
                          </a>
                        </div>
                      </div>
                      <div className="right-column"> 
                        <div className="nav-outer"> 
                          <div className="mobile-nav-toggler"><img src="assets/images/icons/icon-bar-2.png"  /></div>
                          <nav className="main-menu navbar-expand-md navbar-light">
                          </nav>
                        </div>
                        <div className="navbar-right-info">
                          <div className="sign-in"><a href="#"><i className="flaticon-delivery-man-1" />Sign In</a></div>
                          <div className="language">
                            <span className="icon"><img src="assets/images/resource/flags/de.png"  /></span>
                            <form action="#" className="language-switcher">
                              <select className="selectpicker">
                                <option value={1}>Eng</option>
                                <option value={2}>Fre</option>
                                <option value={3}>Ita</option>
                                <option value={4}>Spa</option>
                              </select>
                            </form>
                          </div>
                        </div>
                      </div>                        
                    </div>
                  </div>
                </div>
              </div> */}
              {/* End Sticky Menu */}
              {/* Mobile Menu  */}
              <div className="mobile-menu">
                <div className="menu-backdrop" />
                <div className="close-btn"><span className="icon flaticon-remove" /></div>
                <nav className="menu-box">
                  <div className="nav-logo"><a href="index.html"><img src="assets/images/logo-v2.png" /></a></div>
                  <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
                  {/*Social Links*/}
                  <div className="social-links">
                    <ul className="clearfix">
                      <li><a href="#"><span className="fab fa-twitter" /></a></li>
                      <li><a href="#"><span className="fab fa-facebook-square" /></a></li>
                      <li><a href="#"><span className="fab fa-pinterest-p" /></a></li>
                      <li><a href="#"><span className="fab fa-instagram" /></a></li>
                      <li><a href="#"><span className="fab fa-youtube" /></a></li>
                    </ul>
                  </div>
                </nav>
              </div>{/* End Mobile Menu */}
              <div className="nav-overlay">
                <div className="cursor" />
                <div className="cursor-follower" />
              </div>

            </header>

          )
        }
    
 