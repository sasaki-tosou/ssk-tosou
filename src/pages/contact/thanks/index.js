import React from 'react'
import { Link } from "gatsby"

import Seo from '../../../components/Seo';
import Layout from '../../../components/Layout';

const ContactThanks = () => {
  return (
    <>
      <Layout>
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
                    <Link to="/contact/" itemprop="item">
                        <span itemprop="name">お問い合わせ</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
                <li className="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <Link to="/contact/thanks/" itemprop="item">
                        <span itemprop="name">お問い合わせ完了</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <h2 className="page_title01 mt0">お問い合わせ完了</h2>

            <p className="center">お問い合わせ頂きましてありがとうございました。<br />
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

export const Head = () => (
    <>
        <body id="pagetop" />
        <Seo
            title="お問い合わせありがとうございました"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装のお問い合わせフォーム送信完了ページ"
        />
    </>
)

export default ContactThanks
