import React from 'react'
import { graphql,Link } from "gatsby"

import Seo from "../../components/Seo"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import Sideb from '../../components/sideb'
import Pagetop from '../../components/Pagetop'

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const index = ({data}) => {
  return (
    <>
      <Header />
    
      <Layout>
        
        <p id="page-top" data-sal="slide-bottom" viewoffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/omoide/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <Pagetop />

        <div id="mainimage-sub" className='omoide'>
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
              <Link to="/omoide/" itemprop="item">
                <span itemprop="name">思い出のかべ</span>
              </Link>
              <meta itemprop="position" content="2" />
            </li>
          </ul>
        </div>

      <section id="sub-page">
        <div className='main-content'>
          <div className="flex-wrap">
            <div className="main_b">
              <h2 className="page_title01 mt0">思い出のかべ</h2>                
              <div className="kiji_list">
              {data.allMicrocmsBlog.edges.map(({ node }) => (
                  <>
                  <div className="kiji_box">
                      <div className='kiji_thumb'><img src={node.mainimage.url} alt={node.title + 'サムネイル画像'} /></div>
                      <div className="kiji_txt">
                          <p>{node.date}</p>
                          <p><a href={'/' + node.category.slug + '/' + node.blogId + '/'} className="kiji_title">{node.title}</a></p>
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

export default index

export const query = graphql`
{
  allMicrocmsBlog(filter: {category: {slug: {eq: "omoide"}}}) {
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