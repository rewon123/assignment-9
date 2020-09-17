import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Whiteimage from './Whiteimage';
const Header = (props) => {
    const {name} = props.name;
    return (
        <nav className="navbar navbar-expand navbar-transparent bg-transparent py-2 fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <Whiteimage></Whiteimage>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <input className="search" style={{color:'white'}} placeholder="Search your destination" type="text" />
                    <li className="nav">
                        <Link style={{color: 'white'}} to="/News" className="nav-link">News</Link>
                    </li>
                    <li className="nav">
                        <Link style={{color: 'white'}} to="/Destination" className="nav-link">Destination</Link>
                    </li>
                    <li className="nav">
                        <Link style={{color: 'white'}} to="/Blog" className="nav-link">Blog</Link>
                    </li>
                    <li className="nav">
                        <Link style={{color: 'white'}} to="/Contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="lol">
                        <Link to="/SignUp" className="nav-link">
                            <button className="btn btn-rounded">{name} Sign Up</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;