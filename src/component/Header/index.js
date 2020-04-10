import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'




function Header() {
    return (
        <>
        <div className="nav-text">
        <ul>
            <li><Link to="/about" className ="click-text">about</Link></li>
            <li><Link to="/portfolio" className ="click-text">portfolio</Link></li>
            <li><a href="images/resume.png" className="click-text">Resume</a></li>
        </ul> 
        <ul className="logo">
            <li><a href="https://www.linkedin.com/in/chrislee1012/" target="_blank" className="click-text"><i className="fab fa-linkedin fa-lg"></i></a></li>
            <li><a href="https://github.com/cil5345" target="_blank" className="click-text"><i className="fab fa-github-square fa-lg"></i></a></li>
            <li><a href="mailto:cil5345@gmail.com?Subject=Hello%20there"   target="_blank" className="click-text"><i className="far fa-envelope fa-lg"></i></a></li>
        </ul>
    </div>
    </>
    )
}

export default Header
 