import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid navbar-light bg-light">
                <nav className="navbar navbar-expand-lg container p-0">
                    <div className="container-fluid p-0">
                        <a className="navbar-brand" href="#">
                            <Link to="/"><img src="/logo.png" alt="Logo" width="80px" /></Link>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item h6 px-2">
                            <Link className="nav-link text-warning active" to="/">Home</Link>
                            </li>
                            <li className="nav-item h6 px-2">
                            <Link className="nav-link text-warning" to="/driver">Driver</Link>
                            </li> 
                            <li className="nav-item h6 px-2">
                            <Link className="nav-link text-warning" to="/about">About</Link>
                            </li> 
                            <li className="nav-item">
                                <button className="btn btn-warning">Download aap</button>
                            </li>
                        </ul> 
                        </div>
                    </div>
                </nav>
            </div>
            

            )
        }
    }
 