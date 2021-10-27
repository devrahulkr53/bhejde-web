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
            <React.Fragment>
                <section className="page-title" style={{backgroundImage: 'url(/images/company.jpg)'}}>
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
                {this.state.step === 3 && <Team data={this.state.team} />}
                
            </React.Fragment>

        )
    }
}
 