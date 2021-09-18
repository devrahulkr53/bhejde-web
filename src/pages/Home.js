import React from 'react' 

export default function Home() {
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
            {/* <div className="jumbotron">
                <h3 className="display-6">Why ride with Bhejde?</h3>
                <div className="text-secondary">The best way to travel to your destination</div>
                <div className="row my-4">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center">
                            <img src="/images/gallery.png" alt="Gallery"  width="120px" />
                            <div className="p-2">
                                <h4>Cabs for Every Pocket</h4>
                                <div>From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center">
                            <img src="/images/gallery.png" alt="Gallery"  width="120px" />
                            <div className="p-2">
                                <h4>Cabs for Every Pocket</h4>
                                <div>From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
            
        </div>
    )
}
