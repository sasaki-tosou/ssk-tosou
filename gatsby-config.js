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
    title: "広島で外壁塗装・屋根塗装なら佐々木塗装。一級塗装技能士在籍、塗装のプロフェッショナル集団。",
    keyword:"佐々木塗装,外壁塗装,広島,外壁塗装 広島,広島 外壁塗装,屋根塗装,塗り替え,一級塗装技能士在籍,安佐北区,東区,西区,南区,安芸区,佐伯区,安佐南区,海田町,府中町,熊野町,坂町,五日市,廿日市市,東広島市,安芸高田市",
    description: "安佐北区の施工実績No.1。広島で外壁塗装・屋根塗装なら、広島初のドローンを使用した外装劣化診断士による診断。安心施工、保証付きのアフターサービス。大切な住まいの塗り替えは一級塗装技能士在籍、塗装のプロフェッショナル集団。屋根・外壁塗装の専門店の佐々木塗装にお任せください。",
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
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://sasaki-tosou.co.jp/`,
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

    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.html": ["Cache-Control: public, max-age=0, must-revalidate"],
          "/page-data/*": ["Cache-Control: public, max-age=0, must-revalidate"],
          "/page-data/app-data.json": [
            "Cache-Control: public, max-age=0, must-revalidate",
          ],
          "/static/*": ["Cache-Control: public, max-age=31536000, immutable"],
          "/sw.js": ["Cache-Control: no-cache"],
          "/**/*.js": ["Cache-Control: public, max-age=31536000, immutable"],
          "/**/*.css": ["Cache-Control: public, max-age=31536000, immutable"],
        },
      },
    },
    
  ],
}
