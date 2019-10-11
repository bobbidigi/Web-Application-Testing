import React from 'react'

export default function Dashboard({scoreboard}) {
    return (
        <div>

            <button onClick={()=>{
                scoreboard("strike")
            }}>strike</button>

            <button onClick={()=>{
                scoreboard("ball")
            }}>ball</button>

            <button onClick={()=>{
                scoreboard("foul")
            }}>foul</button>

            <button onClick={()=>{
                scoreboard("hit")
            }}>hit</button>

        </div>
    )
}
