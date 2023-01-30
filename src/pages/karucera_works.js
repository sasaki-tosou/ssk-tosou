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

const karucera_works = () => {
  return (
    <>
      <Layout>
        <Seo
            title="カルセラリフォーム施工例"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装のカルセラリフォーム施工例ページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/karucera_works/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <Pagetop />
        
        <div id="mainimage-sub" className='karucera-works'>
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
                    <Link to="/karucera_works/" itemprop="item">
                        <span itemprop="name">カルセラリフォーム施工例</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <h2 className="page_title01 mt0">カルセラリフォーム施工例</h2>

            <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic01.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic02.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic03.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic04.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic05.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic06.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic07.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic08.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic09.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic10.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic11.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic12.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic13.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic14.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic15.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic16.jpg" alt="" />
          </div>
        </div>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default karucera_works
