module.exports = {
  siteMetadata: {
    title: 'Tegebu',
    siteUrl: 'https://www.tegebu.com/',
    description: 'Tegebu Static Web site generator powered by Gatsby.',
    author: 'yoshixmk',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/src/config`,
      }
    },
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-149348992-1'
      }
    },
    `gatsby-plugin-sitemap`
  ]
};
