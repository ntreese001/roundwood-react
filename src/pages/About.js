import React from "react"
import { Link } from 'react-router-dom'
import { about } from '../data'

export const About = () => {
  return (

    <div id="gallery-series">

      <div className="page-title-container">
        <h1>About Roundwood</h1>
      </div>
      <hr className="gray-hr" />

      <div className="gallery-series-intro">
        <p>
          In September 2000, a small woodworking studio on the north shore of Lake Tahoe opened
          its doors to the journey of furniture artistry. Since its inception over 15 years ago,
          Roundwood has created countless works of art and continues to celebrate its dedication
          to functional art in the form of world class nature-driven furniture design,
          still right here in nature’s cathedral, North Lake Tahoe.
        </p>

        <div className="quote">
          <span>"</span>Cline and the team at Roundwood are true artists, and I feel so privileged to live within their art.
            <br />
          <span> - Nikki, Roundwood Client </span>
        </div>
      </div>

      <div className="custom-installations-button-container">
        <Link className="black-button black-button-wide" to="/faq/">frequently asked questions</Link>
      </div>

      <div className="chevron-hr">
        <div></div>
        <div className="chevron"></div>
        <div></div>
      </div>

      <div className="about-cline-container">

        <div className="about-cline-box">
          <h3 className="aclonica">Cline</h3>
          <h4>the artist</h4>
        </div>

        <div className="cline-the-artist">
          <img src="/img/cline_philosophical.jpg" alt="" />
        </div>
      </div>

      <hr className="gray-hr" />

      <div id="about-columns" className="dc-description-col-container">
        {about.map(item => {
          return (
            <div key={item.id} className="dc-description-col">
              <h2>{item.title}</h2>
              <hr className="gray-hr" />
              <div className="about-text">
                <p>{item.text}</p>
                {item.quote && <div className="quote-sm">{item.quote}<br /><span>{item.quoteSpan}</span></div>}
              </div>
              <img className="about-img" src={`/img/${item.img}.jpg`} alt={item.title} />
            </div>
          )
        })}
      </div>
    </div>
  )
}