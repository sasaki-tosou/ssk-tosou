import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Header from "../../components/Header"
import Sideb from "../../components/sideb"
import Pagetop from "../../components/Pagetop"

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const TosouArekorePage = ({ data }) => (
    <>
    
    <Header />
    <Layout>
        <p id="page-top" data-sal="slide-bottom" viewoffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to={'/' + data.microcmsBlog.category.slug + '/' + data.microcmsBlog.blogId + '/#pagetop'} title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>
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
                <Link to={'/' + data.microcmsBlog.category.slug + '/'} itemprop="item">
                    <span itemprop="name">{data.microcmsBlog.category.name}</span>
                </Link>
                <meta itemprop="position" content="2" />
                </li>
                <li className="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <Link to={'/' + data.microcmsBlog.category.slug + '/' + data.microcmsBlog.blogId + '/'} itemprop="item">
                    <span itemprop="name">{data.microcmsBlog.title}</span>
                </Link>
                <meta itemprop="position" content="3" />
                </li>
            </ul>
        </div>
        <section id="sub-page" className='arekore_box'>
            <div className='main-content'>

                <div className="flex-wrap">
                    <div className="main_b">
                        <h2 className="page_title01 mt0">外壁塗装をする前に<br className="smp_ss" />知っておきたい塗装アレコレ</h2>

                        <h3 className="page_title03 center">{data.microcmsBlog.title}</h3>
                        <p><span className="date">{data.microcmsBlog.date}</span></p>
                        <ul className="cat_list">
                            <li className="blog-sekou-blog"><Link to="/tosou-arekore/" className="txt12">{data.microcmsBlog.category.name}</Link></li>
                        </ul>

                        <div className="post_img"><img src={data.microcmsBlog.mainimage.url} alt={data.microcmsBlog.title} loading="lazy" /></div>
                        
                        <div className="arekore">
                        <div
                        dangerouslySetInnerHTML={{
                            __html: `${data.microcmsBlog.arekore_txt}`,
                        }}
                        />
                        </div>

                        <p className="center"><Link to="/tosou-arekore/" className="bt01">一覧へ戻る</Link></p>
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

export const Head = ({data}) => (
    <>
        <body id="pagetop" />
        <Seo title={data.microcmsBlog.title} />
    </>
)

export default TosouArekorePage

export const query = graphql`
query ($id: String) {
    microcmsBlog(id: {eq: $id}) {
      blogId
      title
      date(formatString: "YYYY年MM月DD日")
      category {
        slug
        id
        name
      }
      mainimage {
        url
      }
      arekore_txt
    }
  }
`