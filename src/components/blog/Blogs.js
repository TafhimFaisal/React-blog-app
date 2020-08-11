import React, { Component } from 'react'
import Card from '../partials/Card'
import RightSideBar from '../layouts/RightSideBar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Blogs extends Component {

    render() {

        return (
            <RightSideBar component={
                <div>
                    {
                        this.props.blogs.blogs.map( (blog,index) => {
                            return (
                                <Link to={"/blog/"+blog.id} key={blog.id}>
                                    <Card body={blog.body} title = {blog.title} />
                                </Link>
                            )
                        } )
                    }
                </div>
            }/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Blogs)