/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Real del Paso`,
    description: `El mejor equipo a tu servicio`,
    image: `${__dirname}/asserts/images/logo.jpg`,
    siteUrl: `https://realdelpasomain.gatsbyjs.io/`,
    //siteUrl: `https://www.realdelpaso.com.mx`,
    phone: `392-185-3962`,
    call: `tel:3921853962`,
    facebook: `https://www.facebook.com/realdelpaso`,
    instagram: `https://www.instagram.com/realdelpaso/`,
    whatsapp: `https://wa.link/tg560z`,
    author: `Scottware`,
    author_web_site: `#`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      }
    },
    `gatsby-plugin-root-import`,
  ],
}
