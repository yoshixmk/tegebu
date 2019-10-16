module.exports = {
  siteMetadata: {
    title: 'Tegebu',
    siteUrl: 'https://www.tegebu.com/',
    description: 'Tegebu Static Web site generator powered by Gatsby.',
    author: 'yoshixmk',
  },
  plugins: [
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/src/config`,
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript'
  ],
}
