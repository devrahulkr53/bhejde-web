import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class MainNavbar extends Component {
    render() {
        return (
            <div className="container-fluid navbar-light bg-light py-2">
                <nav className="navbar navbar-expand-lg container p-0">
                    <div className="container-fluid p-0">
                        <div className="navbar-brand d-flex align-items-center" href="#">
                            <Link to="/"><img src="/logoIco.png" alt="Logo" width="80px" /></Link>
                            <div className="px-3">
                                <div className="display-6">Bhejde India</div>
                                <small className="text-secondary">Move with us</small>
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item h6 px-2">
                            <Link className="nav-link text-warning active" to="/">Home</Link>
                            </li>
                            <li className="nav-item h6 px-2">
                            <Link className="nav-link text-warning" to="/driver">Driver</Link>
                            </li> 
                            <li className="nav-item h6 px-2">
                            <Link className="nav-link text-warning" to="/about">About</Link>
                            </li>  */}
                            <li className="nav-item me-1">
                                <button className="btn btn-warning">Become a driver</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-warning">Packers & Movers</button>
                            </li>
                        </ul> 
                        </div>
                    </div>
                </nav>
            </div>
            

            )
        }
    }
 