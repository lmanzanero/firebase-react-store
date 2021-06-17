module.exports = {
  pathPrefix: "https://lmanzanero.github.io/firebase-react-store/",
  siteMetadata: {
    siteUrl: `https://lmanzanero.github.io/firebase-react-store/`,
    title: "React Firestore Shopping Cart",
  },
  plugins: [
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'https://us-central1-nancy-s-jewerly.cloudfunctions.net/api/products', 
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
