import React from 'react'
import './styles.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'


const icones = [perfil, sacola]
export default function IconesHeader() {
  return (
    <ul className='icones'>
    {icones.map((icone) => (
      <li className='icone'>
        <img src={icone} 
        alt='Icones'
      ></img>
      </li>
    ))}
      
  </ul>  
  )
}
