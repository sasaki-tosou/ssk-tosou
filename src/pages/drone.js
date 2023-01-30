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

const drone = () => {
  return (
    <>
      <Layout>
        <Seo
            title="ドローン診断"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装のドローン診断ページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/drone/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>
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

            <h3 className="mb3p"><StaticImage src="../images/drone_main.jpg" alt="ドローン診断" /></h3>
        <div className="flex-wrap">
          <div className="w30p order2">
            <p><StaticImage src="../images/drone_pic01.jpg" alt="" /></p>
          </div>
          <div className="w70p pr3p order1">
            <p>弊社では調査・診断にドローン(無人航空機)を使用しています。<br />
              普段見る事のできないお住まいの劣化状況がわかります。<br />
              ドローンは誰でも飛ばせるわけではなく、国土交通省の発行する無人航空機の飛行許可が必要です。</p>
            <ul className="drone_list">
              <li><StaticImage src="../images/drone_pic02.jpg" width={150} alt="" /></li>
              <li><StaticImage src="../images/drone_pic03.jpg" alt="" /></li>
            </ul>
          </div>
        </div>
        <h3 className="drone_title01">ドローン診断<span className="pink">5つ</span>のメリット</h3>
        <div className="flex-wrap">
          <div className="w70p pr3p">
            <h4 className="drone_title02">メリット1　細かな劣化箇所を見逃さない!</h4>
            <div className="drone_merit_inner">
              カメラで診断するよりも広範囲で見る事ができ速やかに劣化箇所を発見できます。
              勾配が急で上がれない屋根も撮影する事ができます。
            </div>
          </div>
          <div className="w30p"><StaticImage src="../images/drone_pic04.jpg" alt="" /></div>
        </div>
        <div className="flex-wrap mtb3p">
          <div className="w70p pr3p">
            <h4 className="drone_title02">メリット2　大きな建物も診断できる!</h4>
            <div className="drone_merit_inner">
              工場やビル、マンション等の大きな建物も足場を架けずに診断できます。
              足場や高所作業車等の必要がないので管理者さま、オーナー様に余計な
              ご負担がかかりません。
            </div>
          </div>
          <div className="w30p"><StaticImage src="../images/drone_pic05.jpg" alt="" /></div>
        </div>
        <div className="flex-wrap mtb3p">
          <div className="w70p pr3p">
            <h4 className="drone_title02">メリット3　屋根瓦を破損させる心配がない!</h4>
            <div className="drone_merit_inner">
              屋根に上がらずに診断できるので瓦を割るような事はありません。
            </div>
          </div>
          <div className="w30p"><StaticImage src="../images/drone_pic06.jpg" alt="" /></div>
        </div>
        <div className="flex-wrap mtb3p">
          <div className="w70p pr3p">
            <h4 className="drone_title02">メリット4　その場で劣化箇所を確認できる!</h4>
            <div className="drone_merit_inner">
              タブレットで劣化箇所を確認する事ができます。
            </div>
          </div>
          <div className="w30p"><StaticImage src="../images/drone_pic07.jpg" alt="" /></div>
        </div>
        <div className="flex-wrap mtb3p">
          <div className="w70p pr3p">
            <h4 className="drone_title02">メリット5　施工前→施工後の変化がわかる!</h4>
            <div className="drone_merit_inner">
              ドローンを使用する事によって施工前→施工後の迫力あるお写真の撮影が可能です。
            </div>
          </div>
        </div>
        <div className="drone_box">
          <div className="drone_box_l">
            <p className="case_title2">before</p>
            <StaticImage src="../images/drone_pic08.jpg" alt="" />
          </div>
          <div className="drone_box_r">
            <p className="case_title2">after</p>
            <StaticImage src="../images/drone_pic09.jpg" alt="" />
          </div>
        </div>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default drone
