import React from "react";
import { Chevron } from "../components/Chevron";

export const Contact = () => {
  return (
    <div className="width-960-center">
      <div className="page-title-container">
        <h1>Contact Us</h1>
      </div>

      <hr className="gray-hr" />
      <div className="gallery-series-intro">
        <p>
          Have we tempted you with our timeless tree-stump tables? Our
          delectable deciduous doorways? Or our beautiful burl-wood boudoirs?
        </p>

        <p>If so, please contact us using the form below.</p>
        {/* <img src="/img/ocean_hydro_2.jpg" alt="ocean hydro" style={{
          width:"90%",
          display: "block",
        marginLeft: "auto",
        marginRight: "auto"
        }}></img> */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe-7gdbsGoNiF34rXUJbQljrJ7D27sFDXMYcuUbgPwx8Q_QNw/viewform?embedded=true"
          width="100%"
          height="800"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="contact-form"
        >
          Loading…
        </iframe>
      </div>
      <Chevron />

      <div className="trade-sales-spacer"></div>
    </div>
  );
};
