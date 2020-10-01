import React from 'react'
import { Chevron } from '../components/Chevron'
import { installations, installationCategories } from '../data'
import InstallationLightbox from '../components/InstallationLightbox'
import { Link } from "react-router-dom"

export const CustomInstallation = () => {
  return (
    <div id="custom-installations">
      <div className="page-title-container">
        <h1>Custom Installations</h1>
      </div>
      <hr className="gray-hr" />
      <div className="gallery-series-intro">
        <p>
          Thanks to our inspired patrons, we’ve had the privilege to work on many large-scale projects that
          have transformed ordinary spaces into exciting ar tistic experiences. These works often include
          several sculptural furnishings that come together to create a truly inspiring space punctuated with
          functional art.
          <br />
          <br />
          If you are interested in starting a custom project, please contact us.
        </p>
      </div>

      <div className="custom-installations-button-container">
        <Link className="black-button" to="/contact/">get in touch!</Link>
      </div>


      {installationCategories.map(category => {
        return (
          <React.Fragment key={category.id}>
            <Chevron />
            <div className="collection-grid-container">
              {category.src &&
                <div className="collection-item">
                  <img src={category.src} alt={category.title} />
                </div>}
              {installations.map((item, index) => {
                return (
                  item.category === category.title && <InstallationLightbox item={item} index={index} key={item.id} />
                )
              })}
            </div>
          </React.Fragment>
        )
      })}
      <Chevron />
    </div>
  )
}