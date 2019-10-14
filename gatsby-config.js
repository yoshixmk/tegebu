module.exports = {
  siteMetadata: {
    title: `Tegebu`,
    description: `Tegebu Static Web site generator powered by Gatsby.`,
    author: `yoshixmk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
