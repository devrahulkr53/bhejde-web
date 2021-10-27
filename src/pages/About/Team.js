import React, { Component } from 'react'

export default class Company extends Component {
  
    constructor(props){
        super(props)
    }

    render() {
        return (
            <section className="team-section style-three">
                <div className="auto-container">
                    <div className="row">
                        
                        {this.props.data.length > 0 && this.props.data.map((val,key)=>(
                            <div key={key} className="col-lg-4 col-md-6 team-blcok">
                                <div className="inner-box wow fadeInDown" data-wow-duration="1500ms">
                                <div className="image"><img src="assets/images/resource/team-1.jpg" /></div>
                                <div className="content">
                                    <div className="designation">{val.position}</div>
                                    <h4>{val.name}</h4>
                                    <div className="hover-content">
                                    <ul className="social-icon">
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                    <div className="designation">{val.position}</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))}
                                     
                    </div>
                </div>
            </section>


        )
    }
}
 