/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `portafolio-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images/`
    },
    __key: "images"
  },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Quicksand`,
            file: `https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/avatar/logo.png',
      },
    },
  ]
};