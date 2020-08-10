import React, { Component } from 'react'
import TextInput from '../partials/TextInput'
import PasswordInput from '../partials/PasswordInput'

export default class SignIn extends Component {
    render() {
        return (
            <div className="container">

                <h1 className="center">
                    Sign In
                </h1>

                <div className="row container">
                    <form>
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
