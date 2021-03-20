// 環境変数有効化
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `keita310 portfolio`,
    description: `keita310のportfolioです`,
    author: `@gatsbyjs`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // microcmsの設定追記
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: process.env.GATSBY_MICROCMS_APIKEY,
        serviceId: process.env.GATSBY_MICROCMS_SERVICE_ID,
        apis: [
          {endpoint: `skill`},
          {endpoint: `skill_category`},
          {endpoint: `works`},
        ],
      },
    },
    // css関係プラグイン追加
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
/*
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        rejected: true,          // 削除されたCSSの容量を表示
        printRejected: false,    // 削除したCSSを最大100個まで一覧表示
        printAll: false,          // 削除したCSSを全て一覧表示 
        develop: false,          // 開発環境でbuildした時もCSSを削除
        tailwind: true,          // TailwindCSS使用時はTrue default: false
        whitelist: [],           // 削除しないCSSを指定
        ignore: [],              // 削除しないファイルを指定
      }
    },
*/
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
