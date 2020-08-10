import React from 'react'

export default function TextInput(props) {
    return (
        <div className="input-field">
          <input id={props.name} type="text" name={props.name} className="validate" />
          <label htmlFor={props.name}>{props.name}</label>
        </div>
    )
}
