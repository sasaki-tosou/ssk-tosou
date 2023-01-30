import React from 'react'
import { Link } from "gatsby"
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

const SoubaThanks = () => {
  return (
    <>
      <Layout>
        <Seo
            title="相場チェックのご依頼ありがとうございました"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装の相場チェックのご依頼フォーム送信完了ページ"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/souba-thanks/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>
        <Pagetop />
        <div id="mainimage-sub" className='souba-thanks'>
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
                    <Link to="/souba-thanks/" itemprop="item">
                        <span itemprop="name">相場チェックのご依頼ありがとうございました</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <h2 className="page_title01 mt0">相場チェックのご依頼ありがとうございました</h2>

            <p className="center">相場チェックのご依頼ありがとうございました。<br />
            後ほど、担当者よりご連絡をさせていただきます。<br />
            今しばらくお待ちくださいますようよろしくお願い申し上げます。</p>
            
            <p className="center">なお、しばらくたっても当社より返信、返答がない場合は、<br />
            お客様によりご入力いただいたメールアドレスに誤りがある場合がございます。<br />
            その際は、お手数ですが再度送信いただくか、<br />
            お電話（ 082-810-5310 ）にてご連絡いただけますと幸いです。</p>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default SoubaThanks
