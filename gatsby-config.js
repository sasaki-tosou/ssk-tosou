/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "広島で外壁塗装・屋根塗装なら安佐北区の佐々木塗装｜安心施工、保証付きのアフターサービス。",
    description: "広島外壁塗装｜広島市安佐北区で施工実績No.1。広島発のドローンを使用した外装劣化診断士による診断。安心施工、保証付きのアフターサービス。大切な住まいの塗り替えは一級塗装技能士在籍、塗装のプロフェッショナル集団。屋根・外壁塗装の専門店の佐々木塗装にお任せください。 ［無料診断・無料見積を実施中］",
    image: "/images/mobile_img.jpg",
    url: "https://sasaki-tosou.co.jp",
    siteUrl: "https://sasaki-tosou.co.jp/",
    twitterUsername: "sasakipaint1116",
  },
  plugins: [

    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KXCBK4G",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {        
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 75, //デフォルトは50
        },
      },
    },

    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.API_KEY,
        serviceId: 'sasaki-tosou',
        apis: [
          {
            endpoint: 'case',
          },
          {
            endpoint: 'category',
          },
          {
            endpoint: "blog",
          },
        ],
      },
    },
    
    {
      resolve: `@imgix/gatsby`,
      options: {
        domain: 'images.microcms-assets.io',
        defaultImgixParams: { auto: 'format,compress' },
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://sasaki-tosou.co.jp/`,
      },
    },

    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-0W8X9J1F50"],
        pluginConfig: {
          head: true,
        },
        gtagConfig: {
          send_page_view: true,
        },
      },
    },

    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://sasaki-tosou.co.jp`,
        sitemap: `https://sasaki-tosou.co.jp/sitemap-0.xml`,
        policy: [{userAgent: '*', allow: '/'}]
      },
    },
  ],
}
