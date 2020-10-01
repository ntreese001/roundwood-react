import React from "react"
import { Chevron } from "../components/Chevron"
import { Link } from "react-router-dom"

export const Faq = () => {
  return (
    <div id="gallery-series">

      <div className="page-title-container">
        <h1>Frequently Asked Questions</h1>
      </div>

      <hr className="gray-hr" />


      <div className="gallery-series-intro">
        <p>
          The following are some answers to frequently asked questions about us,
          our art, our ethics, and our unique artistic approach.
          </p>
      </div>

      <Chevron />

      <div className="faq-body">

        <h4>Where do you get your materials?</h4>

        <p> We strive to use wood that is both beautiful and sustainable—bringing good karma
        to our workbench and passing it along to our clients. Our hardwoods are carefully
        selected within the sustainably-harvested hardwood markets, whether it be from
        locally source walnut from Chico, CA, to maturing sustainability farms in Costa Rica.
        Our softwoods often come from even closer to home, with reclaimed wood from dismantled
        boat houses and piers on Lake Tahoe, as well as gathered deadwood from our backyards
                    (when seasonally permitted). </p>

        <h4>What makes Roundwood a conscious company?</h4>

        <p> We believe that being a conscious company is much more than simply sourcing our materials
        responsibly and avoiding polluting the earth with toxic materials. Our work reconnects
        humanity with the wondrous and wise voice of the wilderness by bringing its song thru
        incredible twisting grain &amp; vibrant natural luster directly into the lives and living
                    rooms of our clients. </p>

        <h4>What is “Heirloom Quality”?</h4>

        <p> Heirloom Quality means furniture that  has the structural integrity to stand the test of
        time and be passed on from one generation to the next. We believe all of our art to be
                    “heirloom quality,” especially when cared for properly. </p>

        <h4>How should I care for my Roundwood furniture?</h4>

        <p>Roundwood furniture is functional art, meaning, it is meant to be used. It’s strong blind
        joinery and epoxy infused construction will easily outlive you and I, as well as our
        children to come. Nevertheless, our furniture is made of wood, and should be treated with
        proper respect. That means avoiding abuses such as water damage, extreme temperatures,
        serious falls and sharp objects. While not fatal, these damages are usually very costly
                    and time consuming to repair.</p>

        <p>Apart from these more serious cautions, we recommend that you periodically apply a moderate
        amount of lemon oil to revitalize the finish. Simply wipe it on and watch as the luster of
        the wood grain returns. For regular cleaning, such as cleaning up spills, use a mild,
                    non-corrosive, natural cleaning agent.</p>

        <p>Over time, you may notice the clear coat finish on your artwork beginning to age. This is
        a natural process that occurs as a result of normal wear, UV exposure, relative humidity,
        and temperature fluctuations. Maintaining that finish is the responsibility of the owner.
                    Feel free to ask us or do your own research to learn how to maintain your clear coat finish.</p>

        <h4>What is the “Life of Cline” Warranty?</h4>

        <p>Structurally speaking, every piece of artwork that leaves our shop, branded with our three
        dot signature inlay, is unequivocally warranted for the life of Cline. So, if something
        breaks, we will fix it. Please read our notes above about caring for your furniture. Art
                    that is subjected to any of the abuses mentioned above, are not covered by this guarantee.</p>

        <h4>What’s the significance of the Three Dot Inlay?</h4>

        <p>All of our creations contains an artistically-placed three dot inlay. The inlay acts as a
        signature guaranteeing the structural resilience and artistic integrity/authenticity of
        the piece. Appearing as a growing ellipses, the signature inlay symbolizes that
                    ever-expanding potential of the artistic process and life itself.</p>

        <h4>I have a Custom Project in mind? What now?</h4>

        <p>We are committed to a continuing search for amazing new clients desiring to make daily
                    choices that create truly organic, conscious lifestyles. If that is you, then <Link to="/contact/">contact us</Link> to get started!</p>

        <p>Upon review of our initial contact, we will follow-up with you regarding your specific
        needs and desires. Once we’ve hashed out some of the details and initial working retainer,
        we can then send you a quote, based on everything from preliminary design time, to material
                    and labor costs, to final delivery.</p>


        <p>A non-refundable 50% working deposit, along with a signed contract, reserves shop availability
        and a soft timeline for all custom works. Credit card payments are easily processed over the
                    phone with same day receipt.</p>

      </div>
    </div>
  )
}