import React from 'react';
import room1 from '../../travel-guru/Image/Rectangle 27.png'
import room3 from '../../travel-guru/Image/Rectangle 28.png'
import room2 from '../../travel-guru/Image/Rectangle 1.png'

import './rooms.css'
const Rooms = () => {
    return (
        <div className="d-flex align">
            <div className="roomDetails">
                <div class="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row no-gutters">
                        <div class="col-md-6">
                            <img src={room1} style={{ height: "220px" }} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">Light bright airy stylish apt & safe peaceful stay</h5>
                                <p class="card-text">4 guests   2 bedrooms   2 beds   2 baths.</p>
                                <p class="card-text">Wif Air conditioning Kitchen</p>
                                <p class="card-text">Cancellation fexibility availiable</p>

                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row no-gutters">
                        <div class="col-md-6">
                            <img src={room3} style={{ height: "220px" }} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">Light bright airy stylish apt & safe peaceful stay</h5>
                                <p class="card-text">4 guests   2 bedrooms   2 beds   2 baths.</p>
                                <p class="card-text">Wif Air conditioning Kitchen</p>
                                <p class="card-text">Cancellation fexibility availiable</p>

                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div> 
                    </div>
                </div>    <div class="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row no-gutters">
                        <div class="col-md-6">
                            <img src={room2} style={{ height: "220px" }} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">Light bright airy stylish apt & safe peaceful stay</h5>
                                <p class="card-text">4 guests   2 bedrooms   2 beds   2 baths.</p>
                                <p class="card-text">Wif Air conditioning Kitchen</p>
                                <p class="card-text">Cancellation fexibility availiable</p>

                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1885735.1537074877!2d90.13875802217072!3d22.613619344875293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!3m2!1d23.810332!2d90.4125181!4m5!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!3m2!1d21.4272283!2d92.0058074!5e0!3m2!1sen!2sbd!4v1600336785303!5m2!1sen!2sbd" width='450px' height='620px' borderRadius='13px' frameborder="0" style={{ border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    );
};

export default Rooms;