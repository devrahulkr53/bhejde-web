import React, { Component } from 'react'

export default class ContactUs extends Component {
    render() {
        return (
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-3">
                        <h3>Location</h3>
                        <div>
                        Main road ,Near Shiv mandir , Manoharpur,West Singhbhum , Jharkhand - 833104
                        </div>
                        <h3>Email</h3>
                        <div>Bhejdrindia@gmail.com</div>
                        <div>Support@bhejde.com</div>
                        <h3>Call</h3>
                        <div>900 6836383</div>
                    </div>
                    <div className="col-md-9">
                        <div className="">
                            <div className="row">
                                <div className="col-md-6 py-2">
                                    <input type="text" name="name" className="form-control" placeholder="Enter your name" />
                                </div>
                                <div className="col-md-6 py-2">
                                    <input type="text" name="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <div className="col-md-6 py-2">
                                    <input type="text" name="mobile" className="form-control" placeholder="Enter your mobile" />
                                </div>
                                <div className="col-md-6 py-2">
                                    <input type="text" name="purpose" className="form-control" placeholder="Enter your purpose" />
                                </div>
                                <div className="col-md-12 py-2">
                                    <textarea name="desc" cols="30" rows="5" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-warning">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}
