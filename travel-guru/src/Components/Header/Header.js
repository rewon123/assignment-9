import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import blackImage from '../../travel-guru/Logo.png';
import Whiteimage from './Whiteimage';
const Header = (props) => {
    const { name, displayName } = props.loggedInUser;
    console.log(name);
    console.log(displayName);

    let WhiteTextClass = 'nav-link';
    let whiteBgClass = 'navbar navbar-expand  py-2  '
    if (props.page_name === 'signup') {
        WhiteTextClass += ' menu_text_color_black';
        whiteBgClass += 'navbar-light bg-light fixed-top'

    } else if (props.page_name === 'rooms') {
        WhiteTextClass += ' menu_text_color_black';
        whiteBgClass += 'navbar-light bg-light fixed-top'
    } else {
        WhiteTextClass += ' menu_text_color_white';
        whiteBgClass += 'navbar-transparent bg-transparent fixed-top'
    }


    return (

        <nav className={whiteBgClass}>
            <div className="container">
                <Link to="/" className="navbar-brand">
                    {
                        (props.page_name === 'signup') ? <img src={blackImage} /> : ""
                    }
                    {
                        (props.page_name === 'rooms') ? <img src={blackImage} /> : <Whiteimage />
                    }
                </Link>
                <ul className="navbar-nav align-items-center">
                    <input className="search" style={{ color: 'white' }} placeholder="Search your destination" type="text" />
                    <li className="nav">
                        <Link to="/News" className={WhiteTextClass}>News</Link>
                    </li>
                    <li className="nav">
                        <Link to="/Destination" className={WhiteTextClass}>Destination</Link>
                    </li>
                    <li className="nav">
                        <Link to="/Blog" className={WhiteTextClass}>Blog</Link>
                    </li>
                    <li className="nav">
                        <Link to="/Contact" className={WhiteTextClass}>Contact</Link>
                    </li>
                    <li className="nav">
                        <Link to="/login" className="nav-link">
                            {name === undefined && displayName === undefined ? <button className="btn btn-rounded">LogIn</button> : <button className="btn btn-rounded">{name} {displayName}</button>}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav >
    );
};

export default Header;
