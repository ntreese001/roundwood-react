// import Prismic JavaScript Libraries
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";

// import Prismic API credentials
import { client } from "../prismic-configuration";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [doc, setDocData] = useState(null);

  // get homepage document from prismic
  useEffect(() => {
    const fetchData = async () => {
      // query api by document id
      const response = await client.query(
        Prismic.Predicates.at("document.type", "homepage")
      );
      if (response) {
        setDocData(response.results[0]);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-text-container">
          <h1>We create functional art with wood.</h1>
        </div>
        <hr className="hero-hr" />

        <div className="hero-button-container">
          <Link className="hero-button" to="/gallery-series/">
            explore gallery
          </Link>
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
          <p>
            Roundwood is a furniture design company on a mission to redefine
            home and commercial interiors as expressions of functional art.
          </p>
        </div>
        {/* PRISMIC INTEGRATION */}
        {doc ? (
          <>
            <div className="home-column-container">
              {doc.data.home_content_columns.map((column) => {
                return (
                  <div className="home-column" key={column.id}>
                    <img
                      src={column.source_image.url}
                      alt={column.source_image.alt}
                    />
                    <h3>{RichText.asText(column.title)}</h3>
                    <hr />
                    <div className="home-column-text">
                      <p>
                        {RichText.asText(column.text)}
                        {RichText.asText(column.item_link) && (
                          <a
                            className="text-link"
                            href={RichText.asText(column.link)}
                          >
                            {RichText.asText(column.link_text)}
                          </a>
                        )}
                        {RichText.asText(column.text2)}
                      </p>
                    </div>
                    <Link
                      className="black-button"
                      to={RichText.asText(column.item_link)}
                    >
                      {RichText.asText(column.item_text)}
                    </Link>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div>{/* No Content*/}</div>
        )}
      </section>
    </>
  );
};
