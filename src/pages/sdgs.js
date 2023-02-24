import React from 'react'
import { Link } from "gatsby"

import { AnchorLink } from "gatsby-plugin-anchor-links";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Seo from '../components/Seo'
import Layout from '../components/Layout';
import Pagetop from '../components/Pagetop';

const sdgs = () => {
  return (
    <>
      <Layout>
        
        <p id="page-top" data-sal="slide-bottom" viewoffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/sdgs/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>
        <Pagetop />
        
        <div id="mainimage-sub" className='sdgs'>
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
                    <Link to="/sdgs/" itemprop="item">
                        <span itemprop="name">SDGsの取り組み</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <h2 className="page_title01 mt0">SDGsの取り組み</h2>

            <p>株式会社佐々木塗装は政府が推進するSDGsの取り組みに賛同致します。</p>
        <div className="sdgs_cont">
          <div className="w65p pr3p">
            <h3 className="page_title02">外装リフォームでSDGs</h3>
            <p>塗装によるメンテナンスで建物を長持ちさせる事。<br />
            塗り替えできれいになるのはもちろん、資源を節約させながら安心してお住まいいただけるような家づくりに貢献致します。</p>
            <ul className="sdg_icon">
              <li><img src="../images/sdg_icon_07.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_11.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_13.png" loading="lazy" alt="" /></li>
            </ul>
          </div>
          <div className="w35p">
            <p><img src="../images/sdgs_pic02.jpg" width="100%" loading="lazy" alt="" /></p>
          </div>
        </div>
        <div className="sdgs_cont">
          <div className="w65p pr3p">
            <h3 className="page_title02">内装リフォームでSDGs</h3>
            <p>省エネ改修、断熱リフォームで健康被害の抑制やエネルギーの消費を削減する事ができます。<br />
            またバリヤフリー改修で高齢者に優しい家づくりの提案をします。<br />
            おうちが安らぎの場であって欲しいと考えています。</p>
            <ul className="sdg_icon">
              <li><img src="../images/sdg_icon_03.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_07.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_13.png" loading="lazy" alt="" /></li>
            </ul>
          </div>
          <div className="w35p">
            <p><img src="../images/sdgs_pic03.jpg" width="100%" loading="lazy" alt="" /></p>
          </div>
        </div>
        <div className="sdgs_cont">
          <div className="w65p pr3p">
            <h3 className="page_title02">環境に配慮した塗料の発注</h3>
            <p>CADを用いた外壁や屋根の正確な塗り面積の積算により必要な量の塗料を算出、<br />
            発注し塗料の廃棄をなくします。</p>
            <ul className="sdg_icon">
              <li><img src="../images/sdg_icon_07.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_11.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_13.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_14.png" loading="lazy" alt="" /></li>
            </ul>
          </div>
          <div className="w35p">
            <p><img src="../images/sdgs_pic04.jpg" width="100%" loading="lazy" alt="" /></p>
          </div>
        </div>
        <div className="sdgs_cont">
          <div className="w65p pr3p">
            <h3 className="page_title02">人や環境に優しいエコ・省エネ塗料の推奨</h3>
            <p>遮熱塗料、断熱塗料の活用により冷暖房エネルギーを節約する事ができC02排出量の削減、地球温暖化の抑制を行います。</p>
            <ul className="sdg_icon">
              <li><img src="../images/sdg_icon_03.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_07.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_11.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_12.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_13.png" loading="lazy" alt="" /></li>
            </ul>
          </div>
          <div className="w35p">
            <p><img src="../images/sdgs_pic05.jpg" width="100%" loading="lazy" alt="" /></p>
          </div>
        </div>
        <div className="sdgs_cont">
          <div className="w65p pr3p">
            <h3 className="page_title02">定期点模置アフターメンテナンスによる劣化の抑制</h3>
            <p>工事が終わった後も定期点検を行います。<br />
            早期に劣化箇所を見つけてメンテナンスする事で建物を保全致します。</p>
            <ul className="sdg_icon">
              <li><img src="../images/sdg_icon_07.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_11.png" loading="lazy" alt="" /></li>
              <li><img src="../images/sdg_icon_13.png" loading="lazy" alt="" /></li>
            </ul>
          </div>
          <div className="w35p">
            <p><img src="../images/sdgs_pic06.jpg" width="100%" loading="lazy" alt="" /></p>
          </div>
        </div>
        <h3 className="page_title02">関わる人を大切に</h3>
        <p>地域とのつながりを大切にし、お客さま、社員、関係業者が豊かに生活できる事を<br />
        目標にした会社づくりを行います。</p>
        <ul className="sdg_icon">
          <li><img src="../images/sdg_icon_08.png" loading="lazy" alt="" /></li>
          <li><img src="../images/sdg_icon_11.png" loading="lazy" alt="" /></li>
          <li><img src="../images/sdg_icon_17.png" loading="lazy" alt="" /></li>
        </ul>

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
      title="SDGsの取り組み"
      description="外壁塗装・屋根塗装なら広島の佐々木塗装のSDGsの取り組みページです。"
    />
  </>
)

export default sdgs
