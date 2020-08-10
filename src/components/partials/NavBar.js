import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <Link className="brand-logo" to="/"> NavBar Logo </Link>
                <ul className="right">
                    
                    <li><NavLink to="/sign-in">Sing In</NavLink></li>
                    <li><NavLink to="/sign-up">Sign Up</NavLink></li>
                    
                    <li><NavLink to="/dashboard">DashBoard</NavLink></li>
                    <li><NavLink to="/create-blog">Create Blog</NavLink></li>
                    <li><NavLink to="/sign-up">Sign Out</NavLink></li>

                </ul>
            </div>
        </nav>

    )
}
