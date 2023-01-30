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

export default function index({data}) {
  return (
    <>
        <Seo title="施工事例" />
        <Header />
        <Layout>
            <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/cese/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

            <Pagetop />

            <div id="mainimage-sub" className='case'>
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
                  <Link to="/case/" itemprop="item">
                    <span itemprop="name">施工事例</span>
                  </Link>
                  <meta itemprop="position" content="2" />
                </li>
              </ul>
            </div>

            <section id="sub-page">
                <div className='main-content'>                  

                  <div className="flex-wrap">
                    <div className="main_b">
                      <h2 className="page_title01 mt0">施工事例</h2>
                      <div className='kiji_list'>
                        {data.allMicrocmsCase.edges.map(({ node }) => (
                          <div className="kiji_box">
                            <div className="kiji_thumb">
                                <img src={node.atoImg.url} alt={node.title + 'サムネイル画像'} />				
                            </div>
                            <div className="kiji_txt">
                                <p>{node.date}</p>
                                <p><a href={'/case/' + node.caseId}>{node.title}</a></p>					
                            </div>
                          </div>
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

export const query = graphql`
{
  allMicrocmsCase(limit: 30, sort: {date: DESC}) {
    edges {
      node {
        title
        caseId
        date(formatString: "YYYY年MM月DD日")
        category {
          slug
          name
          id
        }
        atoImg {
          url
        }
        maeImg {
          url
        }
        casePeriod
        casetxt
        caseDescription
      }
    }
  }
}
`