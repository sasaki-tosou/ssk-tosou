import React from 'react'
import { Link } from "gatsby"

import Seo from '../components/Seo'
import Layout from '../components/Layout';

const staff = () => {
  return (
    <>
      <Layout>
        
        <div id="mainimage-sub" className='staff'>
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
                    <Link to="/staff/" itemprop="item">
                        <span itemprop="name">スタッフ紹介</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>

        <section id="sub-page">
          <div className="main-content">
            <h2 className="page_title01 mt0">スタッフ紹介</h2>
            <h3 className="page_title02">代表取締役　佐々木　堅</h3>
            <div className="staff_box">
              <div className="staff_l"><img src="../images/boss_photo.png" loading="lazy" alt="" /></div>
              <div className="staff_r">
                <p>広島県出身　A型<br />
                趣味：温泉、サウナ<br />
                10代の頃から厳しい親方に師事し塗装職人として技術を磨いてきました。<br />
                平成5年に佐々木塗装として独立、平成17年に法人化、代表取締役として現在に至ります。<br />
                話べタではありますが塗装の事に関しては妥協を許しません。</p>
              </div>
            </div>
            <h3 className="page_title02">塗装職人・現場管理　岡村 誠悦</h3>
            <div className="staff_box">
              <div className="staff_l"><img src="../images/okamura.jpg" loading="lazy" alt="" /></div>
              <div className="staff_r">
                <p>広島県出身　AB型<br />
                趣味:ドライブ<br />
                塗装職人歴30年、経験豊富なベテラン職人です。<br />
                穏やかな性格で聞き上手。<br />
                誰からも好かれる人柄で社員はもとよりお客様からも信頼 をいただいています。</p>
              </div>
            </div>
            
            <h3 className="page_title02">お客様サポート 大石　真弓</h3>
            <div className="staff_box">
              <div className="staff_l"><img src="../images/ohishi.jpg" loading="lazy" alt="" /></div>
              <div className="staff_r">
                <p>島根県出身　A型<br />
                趣味:雑貨屋巡り、映画鑑賞(ラブコメ) <br />
                資格:二級建築士 <br />
                3児のママでもあります。 <br />
                建築士の資格を活かしお客様に最良のご提案ができるよう女性目線でのアドバイス をさせていただきます。</p>
              </div>
            </div>
            <h3 className="page_title02">塗り替えアドバイザー 佐々木　良子</h3>
            <div className="staff_box">
              <div className="staff_l"><img src="../images/ryoko.jpg" loading="lazy" alt="" /></div>
              <div className="staff_r">
                <p>広島県出身　A型<br />
                趣味:旅行<br />
                資格：外装劣化診断士、窯業サイディング塗替診断士、整理収納アドバイザー準一級<br />
                人生のテーマは「衆生所遊楽」今日この日をめいっぱい楽しみたいと思います。</p>
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
      title="スタッフ紹介"
      description="外壁塗装・屋根塗装なら広島の佐々木塗装のスタッフ紹介ページです。"
    />
  </>
)

export default staff
