import React, { Component } from 'react'
import Inicial from './inicial/Inicial'
import PessoaFisica from './pessoaFisica/PessoaFisica'
import PessoaJuridica from './pessoaJuridica/PessoaJuridica'
import Final from './final/Final'
import './cadastro.css'

export default class Cadastro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            conteudo: undefined
        }
    }

    handleClick = value => {
        this.setState({
            conteudo: value
        })
    }

    render() {
        return (
            <div className='cadastro'>
                {
                    this.state.conteudo === undefined &&
                    <Inicial onClick={this.handleClick}/>  
                }
                {
                    this.state.conteudo === 'PF' &&
                    <PessoaFisica onClick={this.handleClick}/>
                }
                {
                    this.state.conteudo === 'PJ' &&
                    <PessoaJuridica onClick={this.handleClick}/>
                }
                {
                    this.state.conteudo === 'final' &&
                    <Final />
                }
            </div>
        )
    }

   
}