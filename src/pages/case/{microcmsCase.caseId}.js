import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Sideb from "../../components/Sideb"

const BlogPage = ({ data }) => (
    <>
    <Layout>
      
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
                        <Link to={'/' + data.microcmsCase.category.slug + '/'} itemprop="item">
                            <span itemprop="name">{data.microcmsCase.category.name}</span>
                        </Link>
                        <meta itemprop="position" content="2" />
                    </li>
                    <li className="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <Link to={'/' + data.microcmsCase.category.slug + '/' + data.microcmsCase.caseId + '/'} itemprop="item">
                            <span itemprop="name">{data.microcmsCase.title}</span>
                        </Link>
                        <meta itemprop="position" content="3" />
                    </li>
                </ul>
            </div>
            <section id="sub-page">
          <div className='main-content'>

            <div className="flex-wrap">
              <div className="main_b">
                <h2 className="page_title01 mt0">施工事例</h2>

                <h3 className="page_title03 center">{data.microcmsCase.title}</h3>
                <p><span className="date">{data.microcmsCase.date}</span></p>

                <div className="case_box">
                  <div className="case_box_l">
                    <p className="case_title2">before</p>
                    <img src={data.microcmsCase.maeImg.url} alt="" />

                  </div>
                  <div className="case_box_r">
                    <p className="case_title2">after</p>
                    <img src={data.microcmsCase.atoImg.url} alt="" />
                  </div>
                </div>
    
                <table className="case_table">
                  <tbody>
                    <tr>
                      <th>施工内容</th>
                      <td
                      dangerouslySetInnerHTML={{
                        __html: `${data.microcmsCase.casetxt}`,
                    }}
                      />
                    </tr>
                    <tr>
                      <th>工期</th>
                      <td>{data.microcmsCase.casePeriod}</td>
                    </tr>
                    <tr>
                      <th>説明</th>
                      <td
                      dangerouslySetInnerHTML={{
                        __html: `${data.microcmsCase.caseDescription}`,
                    }}
                      />
                    </tr>
                  </tbody>
                </table>

                <p className="center"><Link to={'/' + data.microcmsCase.category.slug + '/'} className="bt02">一覧へ戻る</Link></p>

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
    <Seo title={data.microcmsCase.title} />
  </>
)

export default BlogPage

export const query = graphql`
  query($id: String) {
    microcmsCase(id: { eq: $id }) {
        caseId
        title
        date(formatString: "YYYY年MM月DD日")
        category {
            slug
            id
            name
        }
        maeImg {
            url
        }
        atoImg {
            url
        }
        caseDescription
        casePeriod
        casetxt
    }
  }
`