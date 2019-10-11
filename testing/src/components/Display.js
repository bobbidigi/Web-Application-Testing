import React from 'react'

export default function Display(props) {
    return (
        <div>
            <h1>BALL: {props.balls}</h1>
            <h1>STRIKE: {props.strike}</h1>
        </div>
    )
}
