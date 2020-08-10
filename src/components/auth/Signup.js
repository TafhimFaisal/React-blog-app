import React, { Component } from 'react'
import TextInput from '../partials/TextInput'
import PasswordInput from '../partials/PasswordInput'

export default class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="center">
                    Sign Up
                </h1>
                <div className="container">
                    <div className="row">
                        <form>
                            <div className="col s12">
                                <TextInput name={'name'}/>
                            </div>
                            <div className="col s12">
                                <TextInput name={'email'}/>
                            </div>
                            <div className="col s6">
                                <PasswordInput name={'password'}/>
                            </div>
                            <div className="col s6">
                                <PasswordInput name={'confirm password'}/>
                            </div>

                            <div className="col s12 center">
                                <button className="btn" type="submit">
                                    Sign-up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
