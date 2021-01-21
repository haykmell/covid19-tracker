import React from 'react'
import { RiVirusFill } from 'react-icons/ri';

const Nav = () => {
    return (
        <nav>
            <div className="nav-header">
                <h1>Covid-19 <span className="covid-icon"><RiVirusFill /></span> Tracker </h1>
            </div>
        </nav>
    )
}

export default Nav
