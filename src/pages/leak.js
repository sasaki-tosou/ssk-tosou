import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "@fontsource/noto-sans-jp"
import '@fontsource/noto-sans-jp/700.css'
import '@fontsource/noto-sans-jp/900.css'
import "@fortawesome/fontawesome-svg-core/styles.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Seo from '../components/Seo'
import Layout from '../components/Layout';
import Pagetop from '../components/Pagetop';

const leak = () => {
  return (
    <>
      <Layout>
      <Seo
        title="雨漏り診断"
        description="外壁塗装・屋根塗装なら広島の佐々木塗装の雨漏り診断ページです。"
         />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/leak/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <Pagetop />
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
                <div><StaticImage src="../images/leak_01.jpg" alt="" /></div>
                <div><StaticImage src="../images/leak_02.jpg" alt="" /></div>
                <div><StaticImage src="../images/leak_03.jpg" alt="" /></div>
                <div><StaticImage src="../images/leak_04.jpg" alt="" /></div>
                <div className="leak_box">
                    <p className="center"><a href="/contact/" className="bt02">お問い合わせフォームはこちら</a></p>
                </div>
            </div>
        </section>
      </Layout>
    </>
  )
}

export default leak
