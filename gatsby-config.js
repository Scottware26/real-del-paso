/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Real del Paso`,
    description: `El mejor equipo a tu servicio`,
    image: `/images/logo.jpg`,
    siteUrl: `https://realdelpasomain.gatsbyjs.io/`
    //siteUrl: `https://www.realdelpaso.com.mx`,
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
  ],
}
