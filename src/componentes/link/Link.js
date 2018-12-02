import React from 'react'
import './link.css'

export default function Link(props) {
  return (
    <button onClick={props.onClick} className="link">
      {props.children}
    </button>
  )
}