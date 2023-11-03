import React from 'react'

export default function Coviddisplay(Props) {
    const {stateName,Deaths}= Props
  return (
    <div>
        <h1>{stateName}</h1>
        <h2>{Deaths}</h2>
        <h3>{Props.Deaths}</h3>
    </div>
  )
}
