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

    return (<React.Fragment>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://picsum.photos/1200/410" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="https://i.picsum.photos/id/180/1200/450.jpg?hmac=zttMhfn8TfguDUDCb78R4QCEP93zsYVj4KYwOx2qLGM" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="https://i.picsum.photos/id/484/1200/450.jpg?hmac=xJUYgSYGhwt8PRJLYrdMhujQrYebIM3OBcmXGvaG4A8" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className="container">

            <div className="row">
                <div className="col-md-7 my-auto">
                    <div className="display-5">One click booking for your logistics needs</div>
                    <div className="text-secondary my-1" style={{fontSize:"22px"}}>India’s leading logistics provider.
                    Book mini trucks, auto, pick up trucks in one click.
                    </div>
                    <button className="btn btn-warning my-2 px-4 btn-lg">Download app</button>
                </div>
                <div className="col-md-5 py-4">
                    <img src="https://www.logisticadda.in/blog/wp-content/uploads/2020/07/advantage.png" alt="Taxi" width="100%" />
                </div>
            </div>
            
            <div className="row my-4 py-4">
                <div className="col-md-12">
                    <h3 className="display-6">Why ride with Bhejde?</h3>
                    {/* <div className="text-secondary">The best way to travel to your destination</div> */}
                    <ul>
                        
                        <li>One click booking for your logistics needs</li>
                        <li>Verified & trusted drivers ( complex but straight process to register your vehicles)</li>
                        <li>Book packers & movers ( get best and competitive pricing from our trusted partners)</li>
                        <li>Insure your shipment from our trusted insurance provider (one click insurance for your shipment)</li>

                    </ul>
                </div>
            </div> 
            {/* <div className="row">
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
                 
            </div> */}
            
        </div>
    </React.Fragment>)
}
