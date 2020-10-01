import React from 'react'
import { galleries, galleryCategories } from '../data'
import 'react-image-lightbox/style.css';
import AppLightbox from '../components/AppLightbox'

export const GallerySeries = () => {
  return (
    <div id="gallery-series">
      <div className="page-title-container">
        <h1>Gallery Series</h1>
      </div>
      <hr className="gray-hr" />
      <div className="gallery-series-intro">
        <p>
          Below is a portion of a much larger body of work developed over the past 15 years. In approximate 5
          year intervals of Cline’s career, new design fusions emerge, creating separate classes and styles,
          which manifest in new gallery series. These series often overlap and are frequently the result of multiple artist collaborations,
          as one source of inspiration naturally flows into another.
          <br />
          <br />
          The works on this page are now scattered around the country, inspiring the lives of those who
          experience functional art daily.
        </p>

        <div className="quote">
          <span>"</span>My favorite piece is always the one I’ve just finished.
            <br />
          <span> - Cline </span>
        </div>
      </div>

      {galleryCategories.map(category => {
        return (

          <React.Fragment key={category}>
            <div className="chevron-hr">
              <div></div>
              <div className="chevron"></div>
              <div></div>
            </div>

            <div className="collection-grid-container">
              <div className="collection-intro-box fusion-title">
                <h3 className="aclonica">{category}</h3>
                <h4>fusion</h4>
              </div>
              {galleries.map((item, index) => {
                return (
                  item.category === category && <AppLightbox item={item} index={index} key={item.id} />
                )
              })}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}