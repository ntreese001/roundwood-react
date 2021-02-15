import React from "react"
import { Link } from "react-router-dom"
import { Chevron } from "../components/Chevron"

export const Contact = () => {
  return (
    <div className="width-960-center">
      <div className="page-title-container">
        <h1>Contact Us</h1>
      </div>

      <hr className="gray-hr" />
      <div className="gallery-series-intro">
        <p>Have we tempted you with our timeless tree-stump tables? Our delectable deciduous doorways?
                            Or our beautiful burl-wood boudoirs?</p>

        <p>If so, please contact us using the form below. If time is of the essence, feel free to call us,
                                but keep in mind that it may be difficult to answer the phone if we’re deep in the creative process.</p>


        <div className="margin-top-75 margin-bottom-75">
          <Link className="margin-0-auto black-button" to="/trade-sales/">trade sales sign-up</Link>
        </div>

      </div>
      <Chevron />

      <div className="trade-sales-spacer"></div>
    </div>
  )
}