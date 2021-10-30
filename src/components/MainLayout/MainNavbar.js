import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './footer.css'


// import useScript from '../../hooks/useScript';

export default function MainNavbar() {
        
  const [showSidebar,setShowSidebar] = React.useState(false)
      
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
              <div className="right-column ml-md-auto">
                {/*Nav Box*/}
                <div className="nav-outer">
                  {/*Mobile Navigation Toggler*/}
                  <div onClick={e=>setShowSidebar(!showSidebar)} className="mobile-nav-toggler"> <img src="assets/images/icons/icon-bar-2.png"  /> </div>
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
                    <Link to="/packers-movers/register"><button className="p-2 px-4 border border-warning text-dark rounded">Packers & Movers</button></Link>
                  </div>
                  <div className="language">
                    <Link to="/driver/register"><button style={{backgroundColor:"darkred"}} className="p-3 px-5 rounded text-white">Become a Driver</button></Link>
                  </div>
                </div>
              </div>                        
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
        <div className="sidebar" style={{display:showSidebar ? 'block':'none',backgroundColor:'black'}}>
          <div className="text-end">
            <h1 className="text-danger p-4" style={{fontSize:'48px'}} onClick={e=>setShowSidebar(false)}>&times;</h1>
          </div>
          <div className="text-white p-2">
            <a href="/"><h2 className="p-2 px-3">Home</h2></a>
            <Link to="/about"><h2 className="p-2 px-3">About</h2></Link>
            <Link to="/contactus"><h2 className="p-2 px-3">Contact Us</h2></Link>
            <Link to="/packers-movers/register"><button className="btn btn-lg m-2 btn-light">Packers & Movers</button></Link>
            <Link to="/driver/register"><button className="btn btn-lg m-2 btn-danger">Become a driver</button></Link>
          </div>
        </div>
          

      </header>

    )
  }
  
 