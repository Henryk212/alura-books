import React from 'react'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled  from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo/>
      </Link>
      <OpcoesHeader/>
      <IconesHeader/>
    </HeaderContainer>

    
  )
}
