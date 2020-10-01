import React from 'react'
import { collections, designerCollectionsDescrioptions } from '../data'
import { Chevron } from '../components/Chevron'
import { Link } from "react-router-dom"

export const DesignerCollections = () => {
  return (
    <div id="dc">
      <div className="dc-h1-center">
        <h1>Designer Collections</h1>
      </div>
      <hr className="gray-hr" />
      <div className="dc-description-col-container">
        {designerCollectionsDescrioptions.map(item => {
          return (
            <div className="dc-description-col" key={item.id}>
              <h2>{item.title}</h2>
              <hr className="gray-hr" />
              <p>{item.text}<span>{item.textSpan}</span>{item.text2}</p>
              {item.link && <Link className="black-button" to={item.link}>{item.linkText}</Link>}
            </div>
          )
        })}
      </div>

      {collections.map(collection => {
        return (
          <React.Fragment key={collection.id}>
            <Chevron />
            <div className="collection-grid-container">
              <div className="collection-intro-box">
                <h3 className="aclonica">{collection.title}</h3>
                <h4>{collection.subtitle}</h4>
                <p>{collection.text}</p>
              </div>

              {collection.collectionItems.map(item => {
                return (
                  <div className="collection-item" key={item.id}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <img src={item.src} alt={item.name} />
                      <div className="image-overlay">
                        <p>{item.name}</p>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}