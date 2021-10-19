import React, { Component } from 'react'

export default class About extends Component {
 
    constructor(props) {
        super(props)
    
        this.state = {
            team:[
                {name:'Mohit Gupta',email:'guptamohit26@gmail.com',position:'Founder & CEO'},
                {name:'Harshit Gupta',email:'4564654685',position:'Operations Head'},
                {name:'AnkitDiwan',email:'4564654685',position:'Market & business development'},
            ]            
        }
    }
    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="py-4">
                            <h1 className="display-6">About Bhejde</h1>
                            <p>
                            India’s leading intra city logistics provider company, we are a based out of Jamshedpur, bhej de india works towards improving intra city logistic needs. Providing solution for complex and delayed logistics needs. It helps merchants or general public to shift there product from one point to other.
                            Our focus is to provide one click solution to all logistics needs, also we help driver to get more booking for there vehicles.

                            </p>
                        </div>
                    </div>
                    {/* <div className="col-md-3">
                        <img src="/logo.png" alt="Logo" width="100%" />
                    </div> */}
                </div> 
                <h1 className="display-6">Our Team</h1>
                <div className="row">
                    {this.state.team.map((val,key)=>(
                        <div key={key} className="col-md-4">
                            <div className="card mb-3">
                                <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/icons/avatar.png" className="img-fluid rounded-start" alt="Avatar" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title">{val.name}</h5>
                                    <div className="card-text">{val.email}</div>
                                    <div className="card-text">{val.position}</div>
                                    <p className="card-text"><small className="text-muted">Bhejde India pvt ltd</small></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}
