import React from "react";
import { Chevron } from "../components/Chevron";

export const Contact = () => {
  return (
    <div className="width-960-center">
      <div className="page-title-container">
        <h1>Contact Us</h1>
      </div>

      <hr className="gray-hr" />
      <div className="contact-form">
        <img
          src="/img/ocean_hydro_2.jpg"
          alt="ocean hydro"
          style={{
            width: "100%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></img>
        <p>
          Have we tempted you with our timeless tree-stump tables? Our
          delectable deciduous doorways? Or our beautiful burl-wood boudoirs?
        </p>

        <p>If so, please contact us using the form below.</p>
        <div class="container">
          <form action="https://submit-form.com/2PR7BMdG">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required=""
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <textarea
              id="message"
              style={{
                height: "150px",
              }}
              name="message"
              placeholder="Message"
              required=""
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Chevron />

      <div className="trade-sales-spacer"></div>
    </div>
  );
};
