import React from 'react'
import './styles.css'
import logo from '../../imagens/logo.svg'

export default function Logo() {
  return (
    <div className='logo'>
          <img src={logo} 
          className='logo-img'
          alt='Logo Alura books'
          ></img>
          <p><strong>Alura Books</strong></p>

        </div>
  )
}
