import React, { useState } from "react"
import { headerLinks } from "../data"
import { Link } from "react-router-dom"

export const Header = () => {
  //mobile menu
  const [showMenu, setShowMenu] = useState(false)
  const handleHamburger = () => {
    setShowMenu(!showMenu)
  }
  const handleClose = () => {
    setShowMenu(false)
  }

  return (
    <div className="header-container">
      <header className="clearfix">
        <div className={`header-logo-container ${showMenu ? 'is-active' : ''}`}>
          <button
            className={`header-menuCloseButton js-toggle-nav ${showMenu ? 'is-active' : ''}`}
            onClick={handleHamburger}
          ></button>
          <button
            className={`header-menuButton js-toggle-nav ${showMenu ? 'is-active' : ''}`}
            onClick={handleHamburger}
          >
            Menu
            <div className="header-hamburgerBar"></div>
            <div className="header-hamburgerBar"></div>
            <div className="header-hamburgerBar"></div>
          </button>
          <Link to="/" onClick={handleClose}>
            <img src="/img/RW_header_logo_400.png" alt="Roundwood Logo" />
          </Link>
        </div>
        <div
          className={`menu-header-navigation-container ${showMenu ? 'is-active' : ''}`}
        >
          <div id="menu-header-navigation" className="menu">
            <div className={`menu-header-navigation-container ${showMenu ? 'is-active' : ''}`}>
              <ul id="menu-header-navigation" className="menu">
                {headerLinks.map(link => {
                  return (
                    <li key={link.id} className="menu-item">
                      {!link.target ? <Link to={link.itemLink} onClick={handleClose}>{link.itemText}</Link>
                        : <a href={link.itemLink} target="blank" rel="noopener noreferre">{link.itemText}</a>}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}