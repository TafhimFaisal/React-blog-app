import React, { Component } from 'react'
import RightSideBar from '../layouts/RightSideBar'

export default class Blog extends Component {
    render() {

        let component = (
            <div className="card">
                <div className="card-content black-text">
                    <span className="card-title center"> <b>{this.props.match.params.blog_id}</b></span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                </div>
            </div>
        )

        return ( <RightSideBar component={component}/> )

    }
}
