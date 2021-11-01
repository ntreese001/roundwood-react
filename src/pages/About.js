// import Prismic JavaScript Libraries
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";

// import Prismic API credentials
import { client } from "../prismic-configuration";

import React, { useEffect, useState } from "react";
import { Chevron } from "../components/Chevron";
import { Link } from "react-router-dom";

export const About = () => {
  const [doc, setDocData] = useState(null);

  // get document from prismic
  useEffect(() => {
    const fetchData = async () => {
      // query api by document type
      const response = await client.query(
        Prismic.Predicates.at("document.type", "about")
      );
      if (response) {
        setDocData(response.results[0]);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="gallery-series">
      <div className="page-title-container">
        <h1>About Roundwood</h1>
      </div>
      <hr className="gray-hr" />

      {/* PRISMIC INTEGRATION */}
      {doc ? (
        <>
          <div className="gallery-series-intro">
            <RichText render={doc.data.biography} />
          </div>
          <div className="quote">
            <span>"</span>
            {RichText.asText(doc.data.client_quote)}
            <br />
            <span> - {RichText.asText(doc.data.client_name)}</span>
          </div>

          <div className="custom-installations-button-container">
            <Link className="black-button black-button-wide" to="/faq/">
              frequently asked questions
            </Link>
          </div>

          <Chevron />

          <div className="about-cline-container">
            <div className="about-cline-box">
              <h3 className="aclonica">Cline</h3>
              <h4>the artist</h4>
            </div>

            <div className="cline-the-artist">
              <img src={doc.data.cline_photo.url} alt="" />
            </div>
          </div>

          <hr className="gray-hr" />
          <div id="about-columns" className="dc-description-col-container">
            {doc.data.description_container.map((item) => {
              return (
                <div key={item.id} className="dc-description-col">
                  <h2>{RichText.asText(item.title)}</h2>
                  <hr className="gray-hr" />
                  <div className="about-text">
                    <RichText render={item.text} />
                    {RichText.asText(item.quote) && (
                      <div className="quote-sm">
                        {RichText.asText(item.quote)}
                        <br />
                        <span>- {RichText.asText(item.quote_by)}</span>
                      </div>
                    )}
                  </div>
                  <img
                    className="about-img"
                    src={item.source_image.url}
                    alt={item.source_image.alt}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div>No content</div>
      )}
    </div>
  );
};
