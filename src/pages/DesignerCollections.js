// import Prismic JavaScript Libraries
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";

// import Prismic API credentials
import { client } from "../prismic-configuration";

import React, { useEffect, useState } from "react";
import { Chevron } from "../components/Chevron";
import { Link } from "react-router-dom";

export const DesignerCollections = () => {
  const [doc, setDocData] = useState(null);

  // get document from prismic
  useEffect(() => {
    const fetchData = async () => {
      // query api by document type
      const response = await client.query(
        Prismic.Predicates.at("document.type", "designercollections")
      );
      if (response) {
        setDocData(response.results[0]);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="dc">
      <div className="dc-h1-center">
        <h1>Designer Collections</h1>
      </div>

      {/* PRISMIC INTREGRATION */}
      {doc ? (
        <>
          <hr className="gray-hr" />
          <div className="dc-description-col-container">
            {doc.data.collection_desc.map((item) => {
              return (
                <div className="dc-description-col" key={item.id}>
                  <h2>{RichText.asText(item.title)}</h2>
                  <hr className="gray-hr" />

                  <RichText render={item.text} />

                  {RichText.asText(item.link) !== "" && (
                    <Link
                      className="black-button"
                      to={RichText.asText(item.link)}
                    >
                      {RichText.asText(item.button_text)}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          {doc.data.collections.map((collection) => {
            return (
              <React.Fragment key={collection.id}>
                <Chevron />
                <div className="collection-grid-container">
                  <div className="collection-intro-box">
                    <h3 className="aclonica">
                      {RichText.asText(collection.title)}
                    </h3>
                    <h4>{RichText.asText(collection.subtitle)}</h4>
                    <p>{RichText.asText(collection.text)}</p>
                  </div>

                  {doc.data.collection_items.map((item) => {
                    return (
                      <div className="collection-item" key={item.id}>
                        <a
                          href={RichText.asText(item.link)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={item.source_image.url}
                            alt={RichText.asText(item.name)}
                          />
                          <div className="image-overlay">
                            <p>{RichText.asText(item.name)}</p>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </>
      ) : (
        <div>No Content</div>
      )}
    </div>
  );
};
