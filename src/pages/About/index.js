import React, { Component } from 'react'
import Company from './Company'
import Team from './Team'

export default class About extends Component {
 
    constructor(props) {
        super(props)
    
        this.state = {
            step:1,
            team:[
                {name:'Mohit Gupta',email:'guptamohit26@gmail.com',position:'Founder & CEO'},
                {name:'Harshit Gupta',email:'4564654685',position:'Operations Head'},
                {name:'AnkitDiwan',email:'4564654685',position:'Market & business development'},
            ]            
        }
    }
    

    render() {
        return (
            <div>
                <section className="page-title" style={{backgroundImage: 'url(assets/images/background/bg-20.jpg)'}}>
                    <div className="background-text">
                    <div data-parallax="{&quot;x&quot;: 100}">
                        <div className="text-1">transida</div>
                        <div className="text-2">transida</div>
                    </div>                
                    </div>
                    <div className="auto-container">
                    <div className="content-box">
                        <div className="content-wrapper">
                        <div className="title">
                            <h1>About Company</h1>
                        </div>
                        <ul className="bread-crumb style-two">
                            <li className={this.state.step === 1 && 'active'}><a onClick={e=>this.setState({...this.state,step:1})}>About Company <i className="flaticon-up-arrow" /></a></li>
                            <li className={this.state.step === 2 && 'active'}><a onClick={e=>this.setState({...this.state,step:2})}>Our History <i className="flaticon-up-arrow" /></a></li>
                            <li className={this.state.step === 3 && 'active'}><a onClick={e=>this.setState({...this.state,step:3})}>Leadership Team<i className="flaticon-up-arrow" /></a></li>
                            <li className={this.state.step === 4 && 'active'}><a onClick={e=>this.setState({...this.state,step:4})}>Global Network <i className="flaticon-up-arrow" /></a></li>
                        </ul>
                        </div>                    
                    </div>
                    </div>
                </section>
                {this.state.step === 1 && <Company set={(key,val)=>this.setState({...this.setState,[key]:val})} />}
                {this.state.step === 3 && <Team />}
                
            </div>

        )
    }
}

            // <div className="container">
            //     <div className="row">
            //         <div className="col-md-9">
            //             <div className="py-4">
            //                 <h1 className="display-6">About Bhejde</h1>
            //                 <p>
            //                 India’s leading intra city logistics provider company, we are a based out of Jamshedpur, bhej de india works towards improving intra city logistic needs. Providing solution for complex and delayed logistics needs. It helps merchants or general public to shift there product from one point to other.
            //                 Our focus is to provide one click solution to all logistics needs, also we help driver to get more booking for there vehicles.

            //                 </p>
            //             </div>
            //         </div>
            //         {/* <div className="col-md-3">
            //             <img src="/logo.png" alt="Logo" width="100%" />
            //         </div> */}
            //     </div> 
            //     <h1 className="display-6">Our Team</h1>
            //     <div className="row">
            //         {this.state.team.map((val,key)=>(
            //             <div key={key} className="col-md-4">
            //                 <div className="card mb-3">
            //                     <div className="row g-0">
            //                     <div className="col-md-4">
            //                         <img src="/icons/avatar.png" className="img-fluid rounded-start" alt="Avatar" />
            //                     </div>
            //                     <div className="col-md-8">
            //                         <div className="card-body">
            //                         <h5 className="card-title">{val.name}</h5>
            //                         <div className="card-text">{val.email}</div>
            //                         <div className="card-text">{val.position}</div>
            //                         <p className="card-text"><small className="text-muted">Bhejde India pvt ltd</small></p>
            //                         </div>
            //                     </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         ))}
            //     </div>

            // </div>