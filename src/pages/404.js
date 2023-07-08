import React from 'react'
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Seo from '../components/Seo'
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <>
      <Layout>

        <div id="mainimage-sub" className='notfound'>
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
                    <Link to="/404/" itemprop="item">
                        <span itemprop="name">お探しの記事は見つかりませんでした</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
      <section id="sub-page">
        <div className="main-content">
          <h2 className="page_title01 mt0">お探しの記事は見つかりませんでした。</h2>
          <p className="center">株式会社佐々木塗装のWEBサイトをご覧頂きありがとうございます。<br />
          大変申し訳ないのですが、あなたがアクセスしようとしたページは削除されたかURLが変更されています。<br />
          お手数をおかけしますが、以下の方法からもう一度目的のページをお探し下さい。</p>
          <p className="center"><Link to="/" className='bt02'><FontAwesomeIcon icon={faAngleRight} />トップページへ戻る</Link></p>
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
      title="お探しの記事は見つかりませんでした"
      description="お探しの記事は見つかりませんでした｜外壁塗装・屋根塗装なら広島の佐々木塗装"
    />
  </>
)

export default NotFound
