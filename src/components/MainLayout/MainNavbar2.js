import React, { Component } from 'react'
import { Link } from 'react-router-dom'


// import useScript from '../../hooks/useScript';

export default function MainNavbar() {
      
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 px-4 position-sticky top-0" style={{zIndex:1000}}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
        <img src="/logoIco.png" width="50px" />
        <div className="p-2">
          <div className="">BhejDe India</div>
          <small className="text-secondary">Move with us</small>
        </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item font-medium">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item font-medium">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item font-medium">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
             
          </ul>
          <form className="d-flex align-items-center">
            
            <div className="sign-in pe-1">
              <button className="btn btn-light">Packers & Movers</button>
            </div>
            <div className="language">
              <Link to="/driver"><button style={{backgroundColor:"darkred"}} className="btn btn-danger">Become a Driver</button></Link>
            </div>
          </form>
        </div>
      </div>
    </nav>


    )
  }
    
 