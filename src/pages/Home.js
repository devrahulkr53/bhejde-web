import React from 'react' 

export default function Home() {

    const whyBhejDe = [
        {
            img:'https://cms-web.olacabs.com/00000000368.jpg',
            title:'Cabs for Every Pocket',
            desc:'From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket'
        },
        {
            img:'https://cms-web.olacabs.com/00000000370.jpg',
            title:'Secure and Safer Rides',
            desc:'Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience.'
        },
        {
            img:'https://cms-web.olacabs.com/00000000374.jpg',
            title:'Ola Select',
            desc:'A membership program with Ola that lets you ride a Prime Sedan at Mini fares, book cabs without peak pricing and has zero wait time'
        },
        {
            img:'https://cms-web.olacabs.com/00000000371.jpg',
            title:'In Cab Entertainment',
            desc:'Play music, watch videos and a lot more with Ola Play! Also stay connected even if you are travelling through poor network areas with our free wifi facility.'
        },
    ]

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 my-auto">
                    <div className="display-5">Book a City Taxi to your destination in town</div>
                    <div className="text-secondary my-1" style={{fontSize:"22px"}}>Choose from a range of categories and prices</div>
                    <button className="btn btn-warning my-2 px-4 btn-lg">Download app</button>
                </div>
                <div className="col-md-6">
                    <img src="/images/taxi.png" alt="Taxi" width="100%" />
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12">
                    <h3 className="display-6">Why ride with Bhejde?</h3>
                    <div className="text-secondary">The best way to travel to your destination</div>
                </div>
            </div>
            <div className="row">
                {whyBhejDe.map((e,k)=>(
                    <div key={k} className="col-md-6">
                        <div className="d-flex align-items-center">
                            <img src={e.img} alt="Gallery"  width="120px" />
                            <div className="p-3">
                                <h4> {e.title} </h4>
                                <div>{e.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
                 
            </div>
            
        </div>
    )
}
