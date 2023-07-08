import React from 'react'
import { Link } from "gatsby"

import Seo from '../components/Seo'
import Layout from '../components/Layout';

const leak = () => {
  return (
    <>
      <Layout>

        <div id="mainimage-sub" className='leak'>
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
                    <Link to="/company/" itemprop="item">
                        <span itemprop="name">雨漏り診断</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">
            <h2 className="page_title01 mt0">雨漏り診断</h2>
                <div><img src="../images/leak_01.jpg" loading="lazy" alt="" /></div>
                <div><img src="../images/leak_02.jpg" loading="lazy" alt="" /></div>
                <div><img src="../images/leak_03.jpg" loading="lazy" alt="" /></div>
                <div><img src="../images/leak_04.jpg" loading="lazy" alt="" /></div>
                <div className="leak_box">
                    <p className="center"><a href="/contact/" className="bt02">お問い合わせフォームはこちら</a></p>
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
        <Seo
            title="雨漏り診断"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装の雨漏り診断ページです。"
        />
    </>
)

export default leak
