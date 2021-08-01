import React from 'react'
import PropTypes from   'prop-types'
import { Link } from 'react-router-dom'
const  Navbar =({icon,title}) => {
        return (
            <nav className="navbar bg-primary">
                
                <h1>
                    <i className={icon}></i>{title}
                    <ul>
                        <li><Link to ='/'>Home</Link></li>
                        <li><Link to = '/about'>About</Link></li>

                    </ul>
                </h1>
            </nav>
        )
}

Navbar.defaultProps ={
    title:' Finder',
    icon: 'fab fa-affiliatetheme'
}
Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
export default Navbar
