/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Biskita Transpakuan Bogor",
        short_name: "Biskita",
        description: "Biskita Transpakuan Bogor by Rheznandyae",
        start_url: `/`,
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "src/assets/logo192.png",
        icons: [
          {
            src: "/src/assets/logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/src/assets/logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/"],
      },
    },
  ],
};
