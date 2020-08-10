import React from 'react'

export default function TextArea(props) {
    return (
        <div className="input-field">
          <textarea id={props.name} className="materialize-textarea"></textarea>
          <label htmlFor={props.name}>{props.name}</label>
        </div>
    )
}
