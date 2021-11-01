// Import Prismic JavaScript Libraries
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";

//Import Prismic API credentials
import { client } from "../prismic-configuration";

import React, { useEffect, useState } from "react";

import { Chevron } from "../components/Chevron";

import InstallationLightbox from "../components/InstallationLightbox";
import { Link } from "react-router-dom";

export const CustomInstallation = () => {
  const [doc, setDocData] = useState(null);

  // get document from prismic
  useEffect(() => {
    const fetchData = async () => {
      // query api by document type
      const response = await client.query(
        Prismic.Predicates.at("document.type", "custominstallations")
      );
      if (response) {
        setDocData(response.results[0]);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="custom-installations">
      <div className="page-title-container">
        <h1>Custom Installations</h1>
      </div>
      <hr className="gray-hr" />
      <div className="gallery-series-intro">
        <p>
          Thanks to our inspired patrons, we’ve had the privilege to work on
          many large-scale projects that have transformed ordinary spaces into
          exciting ar tistic experiences. These works often include several
          sculptural furnishings that come together to create a truly inspiring
          space punctuated with functional art.
          <br />
          <br />
          If you are interested in starting a custom project, please contact us.
        </p>
      </div>

      <div className="custom-installations-button-container">
        <Link className="black-button" to="/contact/">
          get in touch!
        </Link>
      </div>

      {/* PRISMIC INTEGRATION */}
      {doc ? (
        <>
          {doc.data.installation_categories.map((category) => {
            return (
              <React.Fragment key={category.id}>
                <Chevron />
                <div className="collection-grid-container">
                  {category.source_image.url && (
                    <div className="collection-item">
                      <img
                        src={category.source_image.url}
                        alt={category.source_image.alt}
                      />
                    </div>
                  )}
                  {doc.data.installations.map((item, index) => {
                    return (
                      RichText.asText(item.category) ===
                        RichText.asText(category.title) && (
                        <InstallationLightbox
                          item={{
                            id: item.id,
                            src: item.source_image.url,
                            alt: item.source_image.alt,
                            title: RichText.asText(item.title),
                            text: RichText.asText(item.text),
                            category: RichText.asText(item.category),
                          }}
                          index={index}
                          key={item.id}
                          installations={doc.data.installations}
                        />
                      )
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
          <Chevron />
        </>
      ) : (
        <div>No content</div>
      )}
    </div>
  );
};
