import React from 'react'
import { Link } from "gatsby"

import { AnchorLink } from "gatsby-plugin-anchor-links";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Seo from '../components/Seo'
import Layout from '../components/Layout';
import Pagetop from '../components/Pagetop';

const drone = () => {
  return (
    <>
      <Layout>
        
        <p id="page-top" data-sal="slide-bottom" viewoffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/drone/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>
        <Pagetop />

        <div id="mainimage-sub" className='drone'>
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
                <Link to="/drone/" itemprop="item">
                  <span itemprop="name">ドローン診断</span>
                </Link>
                <meta itemprop="position" content="2" />
              </li>
            </ul>
        </div>

        <section id="sub-page">
          <div className="main-content">

            <h3 className="mb3p"><img src="../images/drone/drone_main.jpg" alt="ドローン診断" /></h3>

            <div className="drone_txt_box mt0_smp">
              
              <div className="drone_l">
                <p>弊社では調査・診断にドローン(無人航空機)を使用しています。<br />
                  普段見る事のできないお住まいの劣化状況がわかります。<br />
                  ドローンは誰でも飛ばせるわけではなく、国土交通省の発行する無人航空機の飛行許可が必要です。</p>
                <ul className="drone_list">
                  <li><img src="../images/drone/drone_pic02.jpg" width={150} loading="lazy" alt="" /></li>
                  <li><img src="../images/drone/drone_pic03.jpg" loading="lazy" alt="" /></li>
                </ul>
              </div>
              <div className="drone_r">
                <p><img src="../images/drone/drone_pic01.jpg" loading="lazy" alt="" /></p>
              </div>
            </div>

            <h3 className="drone_title01">ドローン診断<span className="pink">5つ</span>のメリット</h3>

            <div className="drone_txt_box">
              <div className="drone_l">
                <h4 className="drone_title02">メリット1　<br className='smp' />細かな劣化箇所を見逃さない!</h4>
                <div className="drone_merit_inner">
                  カメラで診断するよりも広範囲で見る事ができ速やかに劣化箇所を発見できます。<br />
                  勾配が急で上がれない屋根も撮影する事ができます。
                </div>
              </div>
              <div className="drone_r"><img src="../images/drone/drone_pic04.jpg" loading="lazy" alt="" /></div>
            </div>

            <div className="drone_txt_box">
            <div className="drone_l">
                <h4 className="drone_title02">メリット2　<br className='smp' />大きな建物も診断できる!</h4>
                <div className="drone_merit_inner">
                  工場やビル、マンション等の大きな建物も足場を架けずに診断できます。<br />
                  足場や高所作業車等の必要がないので管理者さま、オーナー様に余計なご負担がかかりません。
                </div>
              </div>
              <div className="drone_r"><img src="../images/drone/drone_pic05.jpg" loading="lazy" alt="" /></div>
            </div>

            <div className="drone_txt_box">
            <div className="drone_l">
                <h4 className="drone_title02">メリット3　<br className='smp' />屋根瓦を破損させる心配がない!</h4>
                <div className="drone_merit_inner">
                  屋根に上がらずに診断できるので瓦を割るような事はありません。
                </div>
              </div>
              <div className="drone_r"><img src="../images/drone/drone_pic06.jpg" loading="lazy" alt="" /></div>
            </div>

            <div className="drone_txt_box">
              <div className="drone_l">
                <h4 className="drone_title02">メリット4　<br className='smp' />その場で劣化箇所を確認できる!</h4>
                <div className="drone_merit_inner">
                  タブレットで劣化箇所を確認する事ができます。
                </div>
              </div>
              <div className="drone_r"><img src="../images/drone/drone_pic07.jpg" loading="lazy" alt="" /></div>
            </div>

            <div className="drone_txt_box">
              <div className="drone_l">
                <h4 className="drone_title02">メリット5　<br className='smp' />施工前→施工後の変化がわかる!</h4>
                <div className="drone_merit_inner">
                  ドローンを使用する事によって施工前→施工後の迫力あるお写真の撮影が可能です。
                </div>
              </div>
            </div>

            <div className="drone_box">
              <div className="drone_box_l">
                <p className="case_title2">before</p>
                <img src="../images/drone/drone_pic08.jpg" loading="lazy" alt="" />
              </div>
              <div className="drone_box_r">
                <p className="case_title2">after</p>
                <img src="../images/drone/drone_pic09.jpg" loading="lazy" alt="" />
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
    <Seo
      title="ドローン診断"
      description="外壁塗装・屋根塗装なら広島の佐々木塗装のドローン診断ページです。"
    />
  </>
)

export default drone
