/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `A Month Learning`,
    author: `Jake Zuke`,
    siteURL: `https://www.amonthlearning.how`,
    description: `A blog about learning how to do something new every month`,
    image: "/images/siteimage.jpg",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    `gatsby-remark-images-medium-zoom`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extentions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              showCaptions: ['title', 'alt'],
              markdownCaptions: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {},
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: `carbon`,
              theme: `solarized-light`,
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/content/assets/`,
      },
    },
        {
          resolve: `gatsby-plugin-gtag`,
          options: {
            // your google analytics tracking id
            trackingId: `${process.env.G_TAG}`,
            // Puts tracking script in the head instead of the body
            head: false,
            // enable ip anonymization
            anonymize: true,
          },
        },
        {
          resolve: 'gatsby-plugin-mailchimp',
          options: {
              endpoint: `${process.env.MAILCHIMP_ENDPOINT}`, // string; add your MC list endpoint here; see instructions below
              timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
          }, 
        }
  ],
}
