import React from 'react'

function Card(props) {
    let {title,body} = props
    return (
  
        <div className="card">
            
            <div className="card-content black-text">
                <span className="card-title">{title}</span>
                <p>{body}</p>
            </div>

        </div>
    )
}

export default Card
