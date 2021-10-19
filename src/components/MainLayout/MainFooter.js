import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function MainFooter() {

    const startDate = 2021
    const endDate = new Date().getFullYear() > startDate ? '- '+new Date().getFullYear() : ''

    return (
        <div className="bg-dark text-white mt-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12">
                        <div className="row my-2">
                            <div className="col-md-3">
                                <h5 className="text-secondary">Social Links</h5>
                            </div>
                            <div className="col-md-9">
                                <Link to=""><img src="./social/fb.svg" alt="Facebook" className="me-3" /></Link>
                                <Link to=""><img src="./social/insta.svg" alt="Instagram" className="me-3" /></Link>
                                <Link to=""><img src="./social/youtube.svg" alt="Youtube" className="me-3" /></Link>
                                <Link to=""><img src="./social/twitter.svg" alt="Twitter" className="me-3" /></Link>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-3">
                                <h5 className="text-secondary">Discover Bhejde</h5>
                            </div>
                            <div className="col-md-9 d-flex align-items-center">
                                <Link className="text-decoration-none pe-3" to="/about">About Bhejde</Link>
                                <Link className="text-decoration-none pe-3" to="/contactus">Contact Us</Link>
                                <Link className="text-decoration-none pe-3" to="/dashboard">Admin</Link>
                                <div className="ms-auto">
                                    <Link className="text-decoration-none ps-3" to="/driver">Become a Driver</Link>
                                    <Link className="text-decoration-none ps-3" to="/">Dowload app</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-3">
                                <Link to="/"><img src="/logo.png" alt="Logo" width="120px" /></Link>
                            </div>
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="ms-auto text-end">
                                    <div>
                                        <Link className="text-decoration-none ps-3" to="/faq">FAQ</Link>
                                        <Link className="text-decoration-none ps-3" to="/terms">Terms & Conditions</Link>
                                        <Link className="text-decoration-none ps-3" to="/privacy-policy">Privacy Policy</Link>
                                    </div>
                                    <p className="">Copyright © {startDate} {endDate} Bhejde Pvt. Ltd. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
