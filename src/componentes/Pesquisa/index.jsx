import React, { useEffect, useState } from 'react'
import Input from '../Input'
import styled from 'styled-components'
import { getLivros } from '../../servicos/livros'
import { postFavorito } from '../../servicos/favoritos'


const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 150px 0;
        height: 100%;
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
        const [livros, setLivros] = useState([])

        useEffect(()=> {
            fetchLivros()
        }, [])

        async function fetchLivros() {
            const livrosDaAPI = await getLivros()
            setLivros(livrosDaAPI)
        }

        async function insertFavorito(id){
            await postFavorito(id)
            alert (`Livro de ID:${id} inserido`)
        }
        
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

{ livrosPesquisados.map( livro => (
    <Resultado onClick={() => insertFavorito(livro.id)}>
        <img src={livro.src} alt=''/>
        <p>{livro.nome}</p>
    </Resultado>


    ))}
    </PesquisaContainer>
  )
}
