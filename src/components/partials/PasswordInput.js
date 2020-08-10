import React from 'react'

export default function PasswordInput(props) {
    return (
        <div className="input-field">
          <input id={props.name} type="password" name={props.name} className="validate" />
          <label htmlFor={props.name}>{props.name}</label>
        </div>
    )
}
