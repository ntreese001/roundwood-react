import React from "react"
import { Link } from "react-router-dom"
import { Chevron } from '../components/Chevron'

export const TradeSales = () => {
  return (
    <div className="width-960-center">

      <div className="page-title-container">
        <h1>Trade Sales</h1>
      </div>

      <hr className="gray-hr" />


      <div className="gallery-series-intro">
        <p>We are pleased to offer special pricing to qualified trade professionals, including interior designers,
                            architects, and other design professionals working on residential or commercial projects.</p>

        <p>Members of our trade program receive discount pricing on all <Link to="/designer-collections/" className="text-link">Designer Collections </Link>
                            furniture as well as access to exclusive seasonal sales and introductory promotions.</p>
          <div className="custom-installations-button-container">
            <a className="black-button black-button-wide" href="https://docs.google.com/forms/d/e/1FAIpQLSf3BDAw_wBl5FURjOu5C-bvEqeDJkm_aXI2Y6uGZ9wlxfOm3Q/viewform" target="_blank"rel="noopener noreferrer">sign up now</a>
          </div>
        <p>To become a member, use the button above to provide your company information and credentials (see list below). Once we have processed your application and reviewed your credentials, you will receive an email with a discount code for our <a href="http://roundwood.myshopify.com" className="text-link" target="_blank"rel="noopener noreferrer">online store</a>. Discount pricing will also be honored for sales made offline.
                        </p>

        <p>
          Once we have processed your application and reviewed your credentials, you will receive an email with a discount code for
                            our <a href="http://roundwood.myshopify.com" className="text-link">online store</a>. Discount pricing will also be honored for sales made offline.
                        </p>

        <p>
          One of the following credentials is required to become a member of our Trade Sales program:
                        </p>

        <ul className="trade-sales-ul">
          <li>Interior Design certificate from NCID or CCIDC</li>
          <li>Current Business License or State Professional License verifying your profession</li>
          <li> Proof of current membership to ASID, AIA, IIDA, IDC or other professional interior design organization</li>
          <li>Resale or Sales Tax Certificate</li>
          <li>Design-based business, or hospitality industry</li>
        </ul>

        <br />

        <h3>Terms and Conditions</h3>

        <ul>
          <li>Membership and discounts are nontransferable. </li>
          <li>Discounts cannot be combined with any other promotions. </li>
          <li>Discounts do not apply to shipping charges or taxes. </li>
          <li>Offers cannot be applied to past purchases. </li>
          <li>We reserve the right to change items and/or collections eligible for discounts.</li>
          <li>Misuse of membership may result in membership termination.</li>
        </ul>

      </div>
      <Chevron />
      <div className="trade-sales-spacer"></div>

    </div>
  )
}