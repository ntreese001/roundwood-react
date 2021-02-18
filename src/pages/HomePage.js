import React from "react"
import { homeContentColumns } from "../data"
import { Link } from "react-router-dom"

export const HomePage = () => {
  return (
    <>
      <section className="hero">

        <div className="hero-text-container">
          <h1>We create functional art with wood.</h1>
        </div>
        <hr className="hero-hr" />

        <div className="hero-button-container">
          <Link className="hero-button" to="/gallery-series/">explore gallery</Link>
        </div>

        <div id="hero-3dots">
          <img src="/img/3_dot.png" alt="Three dot" />
        </div>

      </section>

      <div id="chevron-hr-home" className="chevron-hr">
        <div></div>
        <div id="chevron-home" className="chevron"></div>
        <div></div>
      </div>

      <section className="home-content">
        <div className="home-quote">
          <p>Roundwood is a furniture design company on a mission to redefine home and commercial interiors as expressions of functional art.</p>
        </div>

        <div className="home-column-container">
          {homeContentColumns.map(column => {
            return (

              <div className="home-column" key={column.id}>
                <img src={column.image} alt={column.title} />
                <h3>{column.title}</h3>
                <hr />
                <div className="home-column-text">
                  <p>{column.text}
                    {column.link && <a className="text-link" href={column.link}>{column.linkText}</a>}
                    {column.text2}
                  </p>
                </div>
                <Link className="black-button" to={column.itemLink}>{column.itemText}</Link>
              </div>

            )
          })}

        </div>
      </section>
    </>
  )
}