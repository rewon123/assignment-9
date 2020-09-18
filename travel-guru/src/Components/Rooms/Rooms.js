import React from 'react';
import room1 from '../../travel-guru/Image/Rectangle 27.png'
import room3 from '../../travel-guru/Image/Rectangle 28.png'
import room2 from '../../travel-guru/Image/Rectangle 1.png'

import './rooms.css'
const Rooms = () => {
    return (
        <div>
            <div style={{marginTop:"150px",marginLeft:"100px"}}>
            <p>252 stays Apr 13-17 3 guest</p>
            <h1>Stay In Cox's bazar </h1>
        </div>
        <div className="d-flex align">
            <div className="roomDetails">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <img src={room1} style={{ height: "220px" }} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">Light bright airy stylish apt & safe peaceful stay</h5>
                                <p className="card-text">4 guests   2 bedrooms   2 beds   2 baths.</p>
                                <p className="card-text">Wif Air conditioning Kitchen</p>
                                <p className="card-text">Cancellation fexibility availiable</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <img src={room3} style={{ height: "220px" }} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">Light bright airy stylish apt & safe peaceful stay</h5>
                                <p className="card-text">4 guests   2 bedrooms   2 beds   2 baths.</p>
                                <p className="card-text">Wif Air conditioning Kitchen</p>
                                <p className="card-text">Cancellation fexibility availiable</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <img src={room2} style={{ height: "220px" }} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">Light bright airy stylish apt & safe peaceful stay</h5>
                                <p className="card-text">4 guests   2 bedrooms   2 beds   2 baths.</p>
                                <p className="card-text">Wif Air conditioning Kitchen</p>
                                <p className="card-text">Cancellation fexibility availiable</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1885735.1537074877!2d90.13875802217072!3d22.613619344875293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!3m2!1d23.810332!2d90.4125181!4m5!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!3m2!1d21.4272283!2d92.0058074!5e0!3m2!1sen!2sbd!4v1600336785303!5m2!1sen!2sbd" width='450px' height='620px' borderradius='13px' frameBorder="0" style={{ border: "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </div>
    );
};

export default Rooms;
