import React from 'react' 

export default function FAQ() {

    const [activeTab,setActiveTab] = React.useState(0)
    const [activeItem,setActiveItem] = React.useState(null)

    const data = [
        {id:1,type:0,ques:'What are the charger to pay ?',ans:'Bhej de India provides booking of pickup trucks, mini trucks and auto for intra-city transport. Prices are minimum, and depends on the distance you are shifting'},
        {id:2,type:0,ques:'How can I pay ?',ans:'You can pay cash, online or through your Bhej de India wallet, directly to driver after shifting is complete.Toll, parking and night charges will be charged extra'},
        {id:3,type:0,ques:'How long does it takes to deliver ?',ans:'Drivers will be allocated with in no time, You will get 30 mins to 1 hr to load/unload your product/goods (depending on vehicles) Time of delivery may vary depending upon distance, traffic and obstacles '},
        {id:4,type:0,ques:'How can I contact bhej de India ?',ans:'You can contact to Bhej de India chat support, or write to us on info@bhejde.com.'},
        {id:5,type:1,ques:'How can I book intercity transport ?',ans:'BHEJ DE INDIA provides inter-city, intra-city and outside transportation in its platform. Download app or visit our website to book your auto,pickup truck, our mini truck for your transportation'},
        {id:6,type:1,ques:'Does Bhej de provides packers &movers ?',ans:'Bhej de India provides packers and movers as well. Select packers and moves and ask for quotation for your home/office shifting'},
        {id:7,type:2,ques:'How can I list my vehicles on Bhej de India ?',ans:'Download Bhej de India app from app store, or visit our website  Select I am driver, provide your driver and vehicles details on platform After verification from our team you are good to receive booking'},
        {id:8,type:2,ques:'Does bhej de india labor for loading & unloading ?',ans:'You can get add labor option before you confirm your booking. Driver can also load and unload, you can add extra. Extra charges for loading will be charged'},
        {id:9,type:3,ques:'WHAT IS BHEJ DE INDIA ?',ans:'BHEJ DE INDIA is a mobile app/website, where you can book mini truck, auto or pickup trucks, in one click. It also provide packers and movers in its platform'},
        {id:10,type:3,ques:'How can I use BHEJ DE APP ?',ans:'Install bhej de app form app store or visit our website.Verify your details ( phone number)Select pick up and drop location.Select type of vehicles you want to rent.Confirm your booking, driver will come and pick up your goods'},
    ]


    return (<React.Fragment>
                {/* Faq Section */}
            <section className="faq-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <div className="sub-title">Get Answers</div>
                        <h2>Things You Need to Know and <br />We Know Your’s</h2>
                    </div>
                    <div className="tab-area">
                        <ul className="nav nav-tabs tab-btn-style-one" role="tablist">
                            <li className="nav-item">
                            <a className={`nav-link ${activeTab === 0 && 'active'}`} id="tab-one-area" onClick={e=>setActiveTab(0)} >
                                <h4>I am a  Customer <i className="flaticon-up-arrow" /></h4>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className={`nav-link ${activeTab === 1 && 'active'}`} id="tab-two-area" onClick={e=>setActiveTab(1)} >
                                <h4>I am a Supplier <i className="flaticon-up-arrow" /></h4>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className={`nav-link ${activeTab === 2 && 'active'}`} id="tab-three-area" onClick={e=>setActiveTab(2)} >
                                <h4>I am a Job Applicant <i className="flaticon-up-arrow" /></h4>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className={`nav-link ${activeTab === 3 && 'active'}`} id="tab-four-area" onClick={e=>setActiveTab(3)} >
                                <h4>About Company <i className="flaticon-up-arrow" /></h4>
                            </a>
                            </li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div className={`tab-pane fadeInUp animated active`} id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                                <ul className="accordion-box style-two mb-30">
                                    {/*Accordion Block*/}
                                    {data.filter(e=>e.type === activeTab).map((val,key)=>(
                                        <li className="accordion block" onClick={e=>setActiveItem(val.id)}>
                                            <div className={`acc-btn ${activeItem === val.id && 'active'}`}><div className="icon-outer"><span className="icon icon_plus far fa-plus" /> <span className="icon icon_minus far fa-plus " /></div><strong>{key+1}.</strong>   {val.ques}</div>
                                            <div className={`acc-content  ${activeItem === val.id && 'current'}`}>
                                                <div className="content">
                                                    <div className="text">{val.ans}</div>
                                                </div>
                                            </div>
                                        </li>                      
                                    ))}
                                    {/* End Block */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </React.Fragment>)
}
