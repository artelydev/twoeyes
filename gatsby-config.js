module.exports = {
  siteMetadata: {
    title: "twoeyes",
    description: "Binocular trainer. Restoring binocular vision by exercising",
    author: "Yaroslav Kasperovych",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "twoeyes",
        short_name: "twoeyes",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "fullscreen",
        icon: "src/images/eye.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
