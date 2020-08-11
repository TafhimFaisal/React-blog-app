import React, { Component } from 'react'
import Card from '../partials/Card'
import RightSideBar from '../layouts/RightSideBar'
import { Link } from 'react-router-dom'

export default class Blogs extends Component {

    render() {
        return (
            <RightSideBar component={
                <div>
                    <Link to="/blog/1" >
                        <Card/>
                    </Link>
                </div>
            }/>
        )
    }
}
