import React from 'react';
import {toggleNav} from '../js/cutom';

const Nav = () => (
    <nav className="top-nav" role="navigation">
        <div className="toggle-nav">
            <button className="verticla-nav-button" onClick={toggleNav}/>
        </div>
        <div className="navbar" id='myNav'>
            <ul className="nav-list">
                <li className="nav-item">
                    <a className="" href="#home">HOME</a>
                </li>
                <li className="nav-item">
                    <a className="" href="#annual_events">ANNUAL EVENTS</a>
                </li>
                <li className="nav-item">
                    <a className="" href="#achievements">ACHIEVEMENTS</a>
                </li>
                <li className="nav-item">
                    <a className="" href="#notice">NOTICE</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav;