import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import signOutAction from '../../store/actions/auth-action/signOutAction'

function NavBar(props) {
    let linksItem = props.auth.is_authenticated ? (
                <ul className="right">
                    <li><NavLink to="/dashboard">DashBoard</NavLink></li>
                    <li><NavLink to="/create-blog">Create Blog</NavLink></li>
                    <li><NavLink to="/"  onClick={()=>{ props.signOut() }}>Sign Out</NavLink></li>
                </ul>
            ) : (
                <ul className="right">
                    <li><NavLink to="/sign-in">Sing In</NavLink></li>
                    <li><NavLink to="/sign-up">Sign Up</NavLink></li>
                </ul>
            )

    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <Link className="brand-logo" to="/"> NavBar Logo </Link>
                {linksItem}
            </div>
        </nav>

    )
}

const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
