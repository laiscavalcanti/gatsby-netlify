require("dotenv").config()
const queries = require("./src/utils/algolia_queries")

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Subsidiario`,
    description: `Site com um compilado dos romances, contos, ensaios e diário do escritor mineiro Cícero Marra`,
    author: `Cícero Marra`,
    position: `Escritor`,
    siteUrl: `https://subsidiario.com`,
    social: {
      twitter: `cyceromarra`,
      twitterLink: `https://twitter.com/cyceromarra`,
      goodReadsLink: `https://www.goodreads.com/user/show/38694345-cicero-marra`,
    },
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // needs to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/src/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: true,
            },
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [ "EB Garamond", "Montserrat", "Merriweather"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Subsidiario`,
        short_name: `Subsidiario`,
        start_url: `/`,
        background_color: `#900020`,
        theme_color: `#900020`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
