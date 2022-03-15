/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Neoxs",
    author: {
      name: "Yacine Kharoubi",
    },
    pathPrefix: "/",
    siteUrl: "https://neoxs.github.io",
    description:
      "Web developer and computer science student. This is my personal portfolio.",
  },
  plugins: [
    // ===================================================================================
    // Meta
    // ===================================================================================
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify"
  ],
}
