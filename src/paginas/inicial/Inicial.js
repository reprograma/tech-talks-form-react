import React, { Component } from 'react'
import Botao from '../../componentes/formulario/Botao'
import Astronaut from '../../imagens/astronaut.png'
import Globe from '../../imagens/globe.png'

export default class Inicial extends Component {
    handlePessoaFisicaClick = () => {
        this.props.onClick('PF')
    }

    handlePessoaJuridicaClick = () => {
        this.props.onClick('PJ')
    }

    render() {
        return (
            <div className='pagina'>
                <h1> Escolha qual tipo de cadastro: </h1>
                <div className='pagina__botao'>
                    <Botao onClick={this.handlePessoaFisicaClick}>
                        <img className="navbar-logo" src={Astronaut} alt="Astronaut icon" />
                        Pessoa Física
                    </Botao>
                    <Botao onClick={this.handlePessoaJuridicaClick}>
                        <img className="navbar-logo" src={Globe} alt="Globe icon" />
                        Pessoa Juridica
                    </Botao>
                </div>
            </div>
        )
    }
}