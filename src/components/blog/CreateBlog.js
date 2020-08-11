import React, { Component } from 'react'
import TextInput from '../partials/TextInput'
import TextArea from '../partials/TextArea'
import createBlogAction from '../../store/actions/blog-action/createBlogAction'
import { connect } from 'react-redux'

class CreateBlog extends Component {
    render() {
        return (
            <div className="container">

                <h1 className="center">
                    Create Blog
                </h1>

                <div className="row container">
                    <form>
                        <div className="col s12">
                            <TextInput name={'title'}/>
                        </div>
                        <div className="col s12">
                            <TextArea name={'description'}/>
                        </div>
                        <div className="col s12 center">
                            <button className="btn" type="submit">
                                Create
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        createBlog : (blog) => dispatch(createBlogAction(blog))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateBlog)
