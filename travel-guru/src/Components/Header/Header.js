import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Whiteimage from './Whiteimage';
import { UserContext } from '../../App';
const Header = (props) => {
    const { name, displayName } = props.loggedInUser;
    console.log(name);
    console.log(displayName);
    return (
        <nav className="navbar navbar-expand navbar-transparent bg-transparent py-2 fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <Whiteimage></Whiteimage>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <input className="search" style={{ color: 'white' }} placeholder="Search your destination" type="text" />
                    <li className="nav">
                        <Link style={{ color: 'white' }} to="/News" className="nav-link">News</Link>
                    </li>
                    <li className="nav">
                        <Link style={{ color: 'white' }} to="/Destination" className="nav-link">Destination</Link>
                    </li>
                    <li className="nav">
                        <Link style={{ color: 'white' }} to="/Blog" className="nav-link">Blog</Link>
                    </li>
                    <li className="nav">
                        <Link style={{ color: 'white' }} to="/Contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav">
                        <Link to="/login" className="nav-link">
                            {name === undefined && displayName === undefined ? <button className="btn btn-rounded">LogIn</button> : <button className="btn btn-rounded">{name} {displayName}</button>}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;