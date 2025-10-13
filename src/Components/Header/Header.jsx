import React from 'react'
import Icon from '../../assets/icons/icon.png'
import './Header.css'

export default function Header() {
  const names = 'Bia & Matheus'
  const startDates = '17.10.1017'
  const Iconheart = Icon

  return (
    <>
      <header className="header-app">
        <div className="header-logo-div">
          <img className="icon-logo" src={Iconheart} alt="Icone Coração" />
          <div>
            <h1 className="header-title">{names}</h1>
            <p className="header-subtitle">Juntos desde {startDates}</p>
          </div>
        </div>
        <div>
          <p className="header-message0">8 anos</p>
          <p className="header-message1">Celebrando nossa história.</p>
        </div>
      </header>
    </>
  )
}
