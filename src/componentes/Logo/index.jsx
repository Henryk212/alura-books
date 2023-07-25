import React from 'react'

import logo from '../../imagens/logo.svg'
import { styled } from 'styled-components'

const LogoPrincipal = styled.div`
  display: flex;
  font-size: 30px;
`
const LogoImg= styled.img`
  margin-right: 10px;
`

export default function Logo() {
  return (
    <LogoPrincipal>
      <LogoImg src={logo} 
        alt='Logo Alura books'
      />
      <p><strong>Alura</strong>Books</p>
    </LogoPrincipal>
  )
}
