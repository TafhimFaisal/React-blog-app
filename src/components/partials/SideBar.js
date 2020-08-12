import React from 'react'
import { connect } from 'react-redux'

function SideBar(props) {
    return (
        <div>
            <div className="card">
                
                <div className="card-content black-text">
                    <span className="card-title">{ 
                        props.userInfo.is_authenticated ? 
                            props.userInfo.email : "Sign in please"
                    }</span>
                    <p></p>
                </div>

            </div>

            <div className="card">
            
                <div className="card-content black-text">
                    <span className="card-title">Weather Card</span>
                    <p></p>
                </div>

            </div>

            <div className="card">
            
                <div className="card-content black-text">
                    <span className="card-title">Data Card</span>
                    <p></p>
                </div>

            </div>
            
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        userInfo: state.auth
    }
}

export default connect(mapStateToProps)(SideBar)
