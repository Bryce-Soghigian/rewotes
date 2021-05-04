import React from 'react'

export default function Material(props) {
    return (
        <div className="material">
            <button className="material-button">{props.name}</button>
        </div>
    )
}
