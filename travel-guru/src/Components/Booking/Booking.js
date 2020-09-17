import React from 'react';
import './Booking.css';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../FakeData/FakeData';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const Booking = () => {
    const classes = useStyles();
    const { id } = useParams();
    const data = fakeData;
    data.find(place => place.id === id)
    console.log(data[id].id)
    return (
        <div className='container'>
            <div className="col-md-6 booking" id="first-half" style={{ fontFamily: 'Montserrat' }} >
                <h1 style={{ fontSize: '97.6842px', fontFamily: 'Bebas Neue' }}> {data[id].name} </h1>
                <p style={{ fontSize: '16px' }}>{data[id].details} </p>
            </div>
            <div className="col-md-6 booking" style={{ color: 'black' }} id="second-half">
                <label htmlFor="" className="label">Origin</label>
                <input type="text" className="form-input" defaultValue="Dhaka" />
                <label htmlFor="" className='label'  >Destination</label>
                <input type="text" className="form-input" value={data[id].name} />

                <div className="d-flex">
                    <div>
                        <label className='label'>Form</label> <br />
                        <input type="date"defaultValue="2017-05-24" className="form-input-date" />
                    </div>
                    <div className="spacing"></div>
                    <div>
                        <label className='label'>To</label><br />
                        <input type="date"defaultValue="2017-05-24" className="form-input-date" />
                    </div>
                </div>
                <Link to="/rooms"><button className="booking-btn">Start booking</button></Link>
            </div>
        </div>
    );
};

export default Booking;