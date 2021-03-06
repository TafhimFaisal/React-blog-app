import React, { Component } from 'react'
import TextInput from '../partials/TextInput'
import PasswordInput from '../partials/PasswordInput'
import { connect } from 'react-redux'
import signInAction from '../../store/actions/auth-action/signInAction'

class SignIn extends Component {

    constructor (props){
        super(props)
        if(props.auth.is_authenticated) {
            props.history.push('/')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(e)
        e.target.reset()
    }


    render() {

        if(this.props.auth.is_authenticated) {
            this.props.history.push('/')
        }

        return (
            <div className="container">

                <h1 className="center">
                    Sign In
                </h1>

                <div className="row container">
                    <form onSubmit={ (e) => { this.handleSubmit(e) } }>
                        <div className="col s12">
                            <TextInput name={'email'}/>
                        </div>
                        <div className="col s12">
                            <PasswordInput name={'password'}/>
                        </div>
                        <div className="col s12 center">
                            <button className="btn" type="submit">
                                Sign-In
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
        auth:state.auth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        signIn: (e) => dispatch(signInAction(e))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);