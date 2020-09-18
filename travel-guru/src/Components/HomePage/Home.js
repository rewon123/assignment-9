import React, { useState } from 'react';
import fakeData from '../FakeData/FakeData';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const [placeDetail] = useState(fakeData);

    const [it, setIt] = useState([])
    const handle = (travelItem) => {
        setIt(travelItem);
    }
    return (
        <div className='container'>
            <div className='col-md-4 half'>
                <h1 style={{ fontSize: '65px' }}> {it.name} </h1>
                <p>{it.shortDescription}</p>
                <Link to={"/booking/" + it.id}><button className='btn'>Booking</button></Link>
            </div>
            <div className="col-md-8 half">
                {
                    placeDetail.map(place => <img onClick={() => handle(place)} onLoad={() => handle(place)} className='img' key={place.id} src={place.img} alt="" ></img>)
                }
            </div>
        </div>
    );
};

export default Home;