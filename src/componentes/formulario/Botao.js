import React from 'react'

export default function Botao(props) {
    let classes = props.className

    if (props.desabilitado && props.className === 'botao') {
        classes += ' botao--desabilitado'
    }

    return (
        <button onClick={props.onClick} className={classes}>
            {props.children}
        </button>
    )
}