import React from 'react'
import { Link } from "gatsby"

import Seo from '../components/Seo'
import Layout from '../components/Layout';

const aeon_credit = () => {
  return (
    <>
      <Layout>
        
        <div id="mainimage-sub" className='aeon-credit'>
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
                    <Link to="/aeon_credit/" itemprop="item">
                        <span itemprop="name">低金利なイオンクレジット – 広島の外壁塗装なら佐々木塗装</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <p className="center aeon_title01">月5,300円からの外壁塗装</p>
            <p className="center">「塗り替えたいのはやまやまだけど、まとまったお金が・・・」
            「一度に工事代を支払うのは大変。」という方へ</p>
            <h3 className="sub_title02 txt250p">金利手数料</h3>
            <p className="aeon_title02">実質年率：2.65%<br />
            お取扱い金額：20万円～2,000万円まで</p>
            <p>※手数料は長期プライムレートと連動しており、変動時期は3ヶ月毎といたします。 ※ただし、契約成立後は支払い途中での金利変更はありません。</p>
            <h3 className="sub_title02 txt250p">分割払い回数</h3>
            <p className="aeon_title02">6回～180回（最長 15年）</p>
            <p>※月々の元本支払い額5,000円以上での設定となります。</p>
            <h3 className="sub_title02 txt250p">その他</h3>
            <p className="aeon_title02">一部繰り上げ返済、 全額繰り上げ返済が可能です。<br />
            団体信用保険付保0円</p>
            <p>支払い期間中に加入者様が高度障害状態になられた場合、<br />
            死亡された場合に残債務を保険金で充当する制度です。<br />
            ※手続きは保険会社所定書類へのご記入のみです。<br />
            ※保険会社の審査が必要となります。</p>
            <p className="aeon_title02">ボーナス1回払い（スキップ払い）がご利用いただけます。</p>
            <p>約6か月後までのスキップ払いが可能です。</p>
            <h3 className="sub_title02 txt250p">分割払いシミュレーション</h3>
            <p>実質年率2.65%のシミュレーション</p>
            <div className="slide_contaier">
                <div className="slide_table">
                <table className="credit_table">
                    <thead>
                    <tr>
                        <th>期間<br />
                        差引残額</th>
                        <th>1年<br />
                        (12回)</th>
                        <th>3年<br />
                        (36回)</th>
                        <th>5年<br />
                        (60回)</th>
                        <th>7年<br />
                        (84回)</th>
                        <th>8年<br />
                        (96回)</th>
                        <th>10年<br />
                        (120回)</th>
                        <th>12年<br />
                        (144回)</th>
                        <th>14年<br />
                        (168回)</th>
                        <th>15年<br />
                        (180回)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>80万円<br />
                        (お支払総顕)</th>
                        <td>67,600円<br />
                        (811,539円)</td>
                        <td>23,100円<br />
                        (833,103円)</td>
                        <td>14,200円<br />
                        (855,051円)</td>
                        <td>10,400円<br />
                        (877,373円)</td>
                        <td>9,200円<br />
                        (888,673円)</td>
                        <td>7,500円<br />
                        (915,44?円)</td>
                        <td>6,400円<br />
                        (934,805円)</td>
                        <td>5,700円<br />
                        (958,428円)</td>
                        <td>5,300円<br />
                        (970,377円)</td>
                    </tr>
                    <tr>
                        <th>100万円<br />
                        (お支払総顕)</th>
                        <td>84,500円<br />
                        (1,014,412円)</td>
                        <td>28,900円<br />
                        (1,041,379円)</td>
                        <td>17,800円<br />
                        (1,068,814円)</td>
                        <td>13,000円<br />
                        (1,096,716円)</td>
                        <td>11,500円<br />
                        (1,110,842円)</td>
                        <td>9,400円<br />
                        (1,139,442円)</td>
                        <td>8,100円<br />
                        (1,168,507円)</td>
                        <td>7,100円<br />
                        (1,198,035円)</td>
                        <td>6,700円<br />
                        (1,212,971円)</td>
                    </tr>
                    <tr>
                        <th>120万円<br />
                        (お支払総顕)</th>
                        <td>101,400円<br />
                        (1,217,294円)</td>
                        <td>34,700円<br />
                        (1,249,655円)</td>
                        <td>21,300円<br />
                        (1,282,577円)</td>
                        <td>15,600円<br />
                        (1,316,059円)</td>
                        <td>13,800円<br />
                        (1,333,010円)</td>
                        <td>11,300円<br />
                        (1,367,331円)</td>
                        <td>9,700円<br />
                        (1,402,208円)</td>
                        <td>8,500円<br />
                        (1,437,642円)</td>
                        <td>8,000円<br />
                        (1,455,566円)</td>
                    </tr>
                    <tr>
                        <th>150万円<br />
                        (お支払総顕)</th>
                        <td>126,800円<br />
                        (1,521,618円)</td>
                        <td>43,300円<br />
                        (1,562,069円)</td>
                        <td>26,700円<br />
                        (1,603,222円)</td>
                        <td>19,500円<br />
                        (1,645,074円)</td>
                        <td>17,300円<br />
                        (1,666,263円)</td>
                        <td>14,200円<br />
                        (1,709,163円)</td>
                        <td>12,100円<br />
                        (1,752,761円)</td>
                        <td>10,600円<br />
                        (1,797,0527円)</td>
                        <td>10,100円<br />
                        (1,819,457円)</td>
                    </tr>
                    <tr>
                        <th>180万円<br />
                        (お支払総顕)</th>
                        <td>152,100円<br />
                        (1,825,941円)</td>
                        <td>52,200円<br />
                        (1,874,483円)</td>
                        <td>32,000円<br />
                        (1,923,866円)</td>
                        <td>23,500円<br />
                        (1,974,089円)</td>
                        <td>20,800円<br />
                        (1,999,515円)</td>
                        <td>17,000円<br />
                        (2,050,996円)</td>
                        <td>14,600円<br />
                        (2,103,313円)</td>
                        <td>12,800円<br />
                        (2,156,463円)</td>
                        <td>12,100円<br />
                        (2,183,349円)</td>
                    </tr>
                    <tr>
                        <th>200万円<br />
                        (お支払総顕)</th>
                        <td>169,000円<br />
                        (2,028,824円)</td>
                        <td>57,800円<br />
                        (2,082,759円)</td>
                        <td>35,600円<br />
                        (2,137,629円)</td>
                        <td>26,100円<br />
                        (2,193,432円)</td>
                        <td>23,100円<br />
                        (2,221,684円)</td>
                        <td>18,900円<br />
                        (2,278,885円)</td>
                        <td>16,200円<br />
                        (2,337,014円)</td>
                        <td>14,200円<br />
                        (2,396,070円)</td>
                        <td>13,400円<br />
                        (2,425,943円)</td>
                    </tr>
                    <tr>
                        <th>300万円<br />
                        (お支払総顕)</th>
                        <td>253,600円<br />
                        (3,043,236円)</td>
                        <td>86,700円<br />
                        (3,124,139円)</td>
                        <td>53,400円<br />
                        (3,206,444円)</td>
                        <td>39,100円<br />
                        (3,290,149円)</td>
                        <td>34,700円<br />
                        (3,332,526円)</td>
                        <td>28,400円<br />
                        (3,418,327円)</td>
                        <td>24,300円<br />
                        (3,505,522円)</td>
                        <td>21,300円<br />
                        (3,594,105円)</td>
                        <td>20,200円<br />
                        (3,638,915円)</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <p className="smp txt14 center bold orange">※横スクロールできます</p>
            <p>上記金額はあくまでも目安となります。その他のお借入金額についてはお気軽にお問い合わせください。</p>

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
            title="低金利なイオンクレジット – 広島の外壁塗装なら佐々木塗装"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装の低金利なイオンクレジットの説明ページです。"
        />
    </>
)

export default aeon_credit
