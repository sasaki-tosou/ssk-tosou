import React from 'react'
import { graphql,Link } from "gatsby"

import Seo from '../../../components/Seo'
import Layout from "../../../components/Layout"
import Sideb from '../../../components/Sideb'
import Pagetop from '../../../components/Pagetop'

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

export default function index({data}) {
  return (
    <>
    
    <Layout>
        
        <p id="page-top" data-sal="slide-bottom" viewoffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/blog/arekore-blog/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <Pagetop />

        <div id="mainimage-sub" className='arekore'>
            <div id="mainimage-inner">
            </div>
        </div>
        <div id="breadcrumb">
          <ul className="breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
            <li className="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <Link to="/" itemprop="item">
                <span itemprop="name">ホーム</span>
              </Link>
              <meta itemprop="position" content="1" />
            </li>
            <li className="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <Link to="/blog/" itemprop="item">
                        <span itemprop="name">ブログ一覧</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            <li className="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <Link to="/blog/arekore-blog/" itemprop="item">
                <span itemprop="name">アレコレブログ</span>
              </Link>
              <meta itemprop="position" content="3" />
            </li>
          </ul>
        </div>

        <section id="sub-page" className='syachou'>
            <div className='main-content'>

                <div className="flex-wrap">
                    <div className="main_b">

                        <h2 className="page_title01 mt0">アレコレブログ</h2>
                        
                        <div className='syachou_list'>
                        {data.allMicrocmsBlog.edges.map(({ node }) => (
                            <>
                            <div className="syachou_box">
                                <div className="syachou_thumb">
                                  <a href={'/blog/' + node.category.slug + '/' + node.blogId + '/'}><img src={node.mainimage.url} alt={node.title + 'サムネイル画像'} loading="lazy" /></a>
                                </div>
                                <div className="post_txt">
                                    <p className="txt12">{node.date}</p>
                                    <p><a href={'/blog/' + node.category.slug + '/' + node.blogId + '/'} className="post_title">{node.title}</a></p>	
                                    <p><a href={'/blog/' + node.category.slug + '/' + node.blogId + '/'}>{node.excerpt}</a></p>
                                </div>
                            </div>                    
                            </>
                        ))}
                        </div>
                    </div>
                    <div className="side_b">
                        <Sideb />
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  </>
  )
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo />
  </>
)

export const query = graphql`
{
  allMicrocmsBlog(
    filter: {category: {slug: {eq: "arekore-blog"}}}
    limit: 50
    sort: {date: ASC}
  ) {
    edges {
      node {
        title
        blogId
        date(formatString: "YYYY年MM月DD日")
        category {
          slug
          name
          id
        }
        excerpt
        mainimage {
          url
        }
      }
    }
  }
}
`