// import Prismic JavaScript Libraries
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";

// import Prismic API credentials
import { client } from "../prismic-configuration";

import React, { useEffect, useState } from "react";
import "react-image-lightbox/style.css";
import AppLightbox from "../components/AppLightbox";
import { Chevron } from "../components/Chevron";

export const GallerySeries = () => {
  const [doc, setDocData] = useState(null);

  // get document type from prismic
  useEffect(() => {
    const fetchData = async () => {
      // query api by document id
      const response = await client.query(
        Prismic.Predicates.at("document.type", "galleryseries")
      );
      if (response) {
        setDocData(response.results[0]);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div id="gallery-series">
        <div className="page-title-container">
          <h1>Gallery Series</h1>
        </div>
        <hr className="gray-hr" />
        <div className="gallery-series-intro">
          <p>
            Below is a portion of a much larger body of work developed over the
            past 20 years. In approximate 5 year intervals of Cline’s career,
            new design fusions emerge, creating separate classes and styles,
            which manifest in new gallery series. These series often overlap and
            are frequently the result of multiple artist collaborations, as one
            source of inspiration naturally flows into another.
            <br />
            <br />
            The works on this page are now scattered around the country,
            inspiring the lives of those who experience functional art daily.
          </p>
        </div>
        <div className="quote">
          <span>"</span>My favorite piece is always the one I’ve just finished.
          <br />
          <span> - Cline </span>
        </div>

        {/* PRISMIC INTEGRATION */}
        {doc ? (
          <div>
            {doc.data.gallery_categories.map((category) => {
              return (
                <React.Fragment key={category.category_key}>
                  <Chevron />

                  <div className="collection-grid-container">
                    <div className="collection-intro-box fusion-title">
                      <h3 className="aclonica">
                        {RichText.asText(category.category_name)}
                      </h3>
                      {RichText.asText(category.category_name) ===
                      "Elemental" ? (
                        <h4>series</h4>
                      ) : (
                        <h4>fusion</h4>
                      )}
                    </div>

                    {doc.data.gallery.map((item, index) => {
                      return (
                        RichText.asText(item.gallery_category) ===
                          RichText.asText(category.category_name) && (
                          <AppLightbox
                            item={{
                              src: item.source_image.url,
                              thumbnail: item.thumbnail_image.url,
                              alt: item.source_image.alt,
                              title: RichText.asText(item.gallery_title),
                              text: RichText.asText(item.gallery_text),
                              category: RichText.asText(item.gallery_category),
                            }}
                            index={index}
                            key={RichText.asText(item.gallery_title)}
                            gallery={doc.data.gallery}
                          />
                        )
                      );
                    })}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        ) : (
          <div>{/* No Content*/}</div>
        )}
      </div>
    </>
  );
};
