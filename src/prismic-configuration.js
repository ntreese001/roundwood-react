// Import Prismic JavaScript Libraries
import Prismic from "@prismicio/client";

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
export const apiEndpoint = "https://roundwood.prismic.io/api/v2";

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
const accessToken =
  "MC5ZVnRhaUJFQUFDTUF2bmEw.77-9U--_ve-_vU5g77-977-977-9CBE077-9Pe-_vVsJCHPvv73vv73vv71p77-977-9Sk0s77-977-977-977-9";

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "page") return `/page/${doc.uid}`;
  return "/";
};

// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint, { accessToken });
