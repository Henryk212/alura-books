import React, { useState } from 'react'
import Input from '../Input'
import styled from 'styled-components'
import {livros} from './dadosPesquisa'

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
        overflow: auto;
       
        
`
const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

export default function Pesquisa() {
        const [livrosPesquisados, setLivrosPesquisados] = useState([])

        
  return (
    <PesquisaContainer> 
    <Titulo>Já sabe por onde começar ?</Titulo>
    <Subtitulo>Encontre seu livro em nossa estate!</Subtitulo>
    <Input
        placeholder='Escreva sua proxima leitura'
        onBlur={eveto => {
           const textoDigitado = eveto.target.value.toLowerCase()
           const resultadoPesquisa = livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado))
           setLivrosPesquisados(resultadoPesquisa)     
        }}
    />
    {livrosPesquisados.map(livro => (
        <Resultado>
           <p>{livro.nome}</p>
           <img src={livro.src} alt=''/>
        </Resultado>
    ))}
    </PesquisaContainer>
  )
}
