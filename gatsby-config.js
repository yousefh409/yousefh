/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 const path = require("path")


 module.exports = {
   /* Your site config here */
   plugins: [
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `images`,
         path: path.join(__dirname, `src`, `images`),
       },
     },
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `data`,
         path: path.join(__dirname, `src`, `data`),
       },
     },
     `gatsby-plugin-react-helmet`,
   ],
 }