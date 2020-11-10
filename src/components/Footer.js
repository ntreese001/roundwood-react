import React from "react"
import { footerMenu, footerMenu2 } from "../data"
import { Link } from "react-router-dom"


export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-row-1">
          {footerMenu.map(item => {
            return (
              !item.target ? <Link key={item.id} to={item.link}>{item.text}</Link>
                : <a key={item.id} href={item.link} target="blank" rel="noopener noreferre">{item.text}</a>
            )
          })}
        </div>

        <div className="footer-row-2">
          {footerMenu2.map(item => {
            return (
              <Link key={item.id} to={item.link}>{item.text}</Link>
            )
          })}
        </div>

        <div className="footer-row-3">
          <a href="https://www.instagram.com/roundwoodfurniture/">
            <img src="/img/instagram_icon_30.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/Roundwood/">
            <img src="/img/facebook_icon_30.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/cline-andy-2953945">
            <img src="/img/linkedin_icon_30.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-row-4">
          <div>
            <span>© 2015 Roundwood | All Rights Reserved</span>
            <br />
            <span>designed by: Cat Dunleavy | developed by: Jon Perkins</span>
          </div>
          <div>
            
          </div>
        </div>
      </div>

    </footer>
  )
}