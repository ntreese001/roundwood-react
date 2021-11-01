// import Prismic JavaScript Libraries
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";

// import Prismic API credentials
import { client } from "../prismic-configuration";

import React, { useEffect, useState } from "react";
import { Chevron } from "../components/Chevron";
import { Link } from "react-router-dom";

export const Faq = () => {
  const [doc, setDocData] = useState(null);

  // get document from prismic
  useEffect(() => {
    const fetchData = async () => {
      // query api by document type
      const response = await client.query(
        Prismic.Predicates.at("document.type", "faq")
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

      {/* PRISMIC INTREGRATION */}
      {doc ? (
        <>
          {doc.data.list_item.map((item) => {
            return (
              <div className="faq-body" key={item.id}>
                <h4>{RichText.asText(item.question)}</h4>
                <p>{RichText.asText(item.answer)}</p>
              </div>
            );
          })}
          <div className="faq-body">
            <h4>I have a Custom Project in mind? What now?</h4>

            <p>
              We are committed to a continuing search for amazing new clients
              desiring to make daily choices that create truly organic,
              conscious lifestyles. If that is you, then{" "}
              <Link to="/contact/">contact us</Link> to get started!
            </p>

            <p>
              Upon review of our initial contact, we will follow-up with you
              regarding your specific needs and desires. Once we’ve hashed out
              some of the details and initial working retainer, we can then send
              you a quote, based on everything from preliminary design time, to
              material and labor costs, to final delivery.
            </p>

            <p>
              A non-refundable 50% working deposit, along with a signed
              contract, reserves shop availability and a soft timeline for all
              custom works. Credit card payments are easily processed over the
              phone with same day receipt.
            </p>
          </div>
        </>
      ) : (
        <h1>No Content</h1>
      )}
    </div>
  );
};
