import React from 'react'
import { graphql,Link } from "gatsby"

import Seo from "../../../components/Seo"
import Layout from "../../../components/Layout"
import Sideb from "../../../components/Sideb"

const index = ({data}) => {
  return (
    <>
    
      <Layout>
        
        <div id="mainimage-sub" className='blog'>
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
                    <Link to="/blog/case-blog/" itemprop="item">
                        <span itemprop="name">施工事例（ブログ）</span>
                    </Link>
                    <meta itemprop="position" content="3" />
                </li>
            </ul>
        </div>

        <section id="sub-page">
            <div className='main-content'>

            <div className="flex-wrap">
            <div className="main_b">
                <h2 className="page_title01 mt0">ブログ</h2>
                <p className='center bold orange'>施工事例（ブログ）</p>
                <div className="kiji_list">
                {data.allMicrocmsBlog.edges.map(({ node }) => (
                  <div className="kiji_box">
                    <div className="kiji_thumb">
                    <a href={'/blog/' + node.category.slug + '/' + node.blogId + '/'}><img src={node.mainimage.url} alt={node.title + 'サムネイル画像'} /></a>
                    </div>
                    <div className="kiji_txt">					
                      <p className="txt12">{node.date}</p>
                      <p className="txt12"><a href={'/blog/' + node.category.slug + '/' + node.blogId}>{node.title}</a></p>
                      <ul className="cat_list">
                        <li className="blog-sekou-blog"><a href={'/blog/' + node.category.slug + '/'} className="txt12">{node.category.name}</a></li>
                      </ul>
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

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo title="施工事例（ブログ） - 記事一覧" />
  </>
)

export default index

export const query = graphql`
{
  allMicrocmsBlog(
    filter: {category: {slug: {eq: "case-blog"}}}
    sort: {date: DESC}
    limit: 50
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
