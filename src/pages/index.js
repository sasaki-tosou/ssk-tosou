import React from 'react'

import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight,faChevronUp,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

import Seo from '../components/Seo'
import Header from '../components/Header';
import Kuchikomi from '../components/Kuchikomi';
import EmbedYoutube from "../components/EmbedYoutube"
import About from '../components/About';

import Footer from '../components/Footer';
import Sideb from '../components/Sideb';
import Pagetop from '../components/Pagetop';
import SoubaCheck from '../components/SoubaCheck';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function index({ data }) {
  return (
    <>    

    <Header />

    <div id="mainimage">

      <div className="catch_title">
        <h2>
          <StaticImage src="../images/catch_txt.png" width={1200} height={249} alt="ご近所だからできるスピーディーな対応。地元安佐北区での施工実績豊富な佐々木塗装に相談して見ませんか？" />
        </h2>
      </div>

      <div className="main_slide">
        <div className="image"><StaticImage src="../images/mainimage/mainimage08.jpg" className="pc" alt="" /><StaticImage src="../images/mainimage/mainimage08_smp.jpg" width={375} height={400} className="smp" alt="" /></div>
        <div className="image"><StaticImage src="../images/mainimage/mainimage01.jpg" className="pc" alt="" /><StaticImage src="../images/mainimage/mainimage01_smp.jpg" width={375} height={400} className="smp" alt="" /></div>
        <div className="image"><StaticImage src="../images/mainimage/mainimage02.jpg" className="pc" alt="" /><StaticImage src="../images/mainimage/mainimage02_smp.jpg" width={375} height={400} className="smp" alt="" /></div>
        <div className="image"><StaticImage src="../images/mainimage/mainimage03.jpg" className="pc" alt="" /><StaticImage src="../images/mainimage/mainimage03_smp.jpg" width={375} height={400} className="smp" alt="" /></div>
        <div className="image"><StaticImage src="../images/mainimage/mainimage04.jpg" className="pc" alt="" /><StaticImage src="../images/mainimage/mainimage04_smp.jpg" width={375} height={400} className="smp" alt="" /></div>
        <div className="image"><StaticImage src="../images/mainimage/mainimage05.jpg" className="pc" alt="" /><StaticImage src="../images/mainimage/mainimage05_smp.jpg" width={375} height={400} className="smp" alt="" /></div>
        <div className="image"><StaticImage src="../images/mainimage/mainimage06.jpg" className="pc" alt="" /><StaticImage src="../images/mainimage/mainimage06_smp.jpg" width={375} height={400} className="smp" alt="" /></div>
        <div className="image"><StaticImage src="../images/mainimage/mainimage07.jpg" className="pc" alt="" /><StaticImage src="../images/mainimage/mainimage07_smp.jpg" width={375} height={400} className="smp" alt="" /></div>
      </div>

    </div>
    
    <p id="page-top" data-aos="fade-left" data-sal="slide-bottom" data-sal-delay="200" data-sal-easing="ease"><AnchorLink offset="0" to="#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

    <Pagetop />

    <div id="content">
      <div className="maincontent">
      
        <section id="news">
          <div className="main-content">

            <div className="news_box">
              <div id="news_l">
                <div className="flex-wrap">
                  <div className="w50p_smp_s">
                    <h3>NEWS</h3>
                    <h4>お知らせ</h4>
                  </div>
                  <div className="w50p_smp_s smp_s">
                    <StaticImage src="../images/news_thumb.jpg" width={159} height={110} loading="lazy" alt="" />
                  </div>
                </div>
              </div>
              <div id="news_r">
                <dl>
                  {data.blog.edges.map(({ node }) => (
                    <>
                    <dt>{node.date}</dt>
                    <dd>
                      <div className={node.category.slug}><a href={'/blog/' + node.category.slug}>{node.category.name}</a></div><br />
                      <a href={'/blog/' + node.category.slug + '/' + node.blogId + '/'}>{node.title}</a>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </dd>
                    </>
                  ))}
                </dl>
              </div>
            </div>

          </div>
        </section>

        <section id="works">
          <div className="main-content">

            <h3 className="title04">安佐北区で安心して任せられる地元の塗装屋さんをお探しの方へ</h3>

            
            <img src="../images/works_bg02.jpg" width={1920} height={1100} loading="lazy" alt="施工事例イメージ" className="pc" />
            
            
              <StaticImage src="../images/works_bg02_smp.jpg" width={375} height={215} alt="広島市安佐北区で施工事例913件以上!" className="smp" loading="lazy" />
            
            
            <div className="works_inner">

              <h4 className="center mtb3p pc">
                <img src="../images/works_txt01.png" width={680} height={180} alt="広島市安佐北区で施工事例913件以上!" loading="lazy" />
              </h4>

              <div>

                <p className="center"><Link to="/case/" className="bt02"><FontAwesomeIcon icon={faAngleRight} /> 施工事例はこちらから</Link></p>
                
                <ul className="jirei_pic">
                  <li><StaticImage src="../images/kansyajyo_pic01.png" width="200" height="267" alt="感謝状イメージ1" loading="lazy" /></li>
                  <li><StaticImage src="../images/kansyajyo_pic02.png" width="200" height="267" alt="感謝状イメージ2" loading="lazy" /></li>
                </ul>

              </div>
            </div>

          </div>
        </section>

        <div className="center mtb3p">
          <StaticImage src="../images/catch_pic01.jpg" width={1200} height={282} alt="「私たちが佐々木さんをお薦めします！！」" loading="lazy" />
        </div>

        <Kuchikomi />

        <section id="works_list">
          <div className="main-content">

            <h3>ただいま施工中！</h3>

            <div className="works_list_wrap">

            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
              navigation
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                768: {
                  slidesPerView: 9,
                }
              }}
              autoHeight
            >

            <div className="works_list_wrap">
              {data.works.edges.map(({ node }) => (
                <SwiperSlide>
                <div className="works_list">
                  <p>
                    <a href={'/blog/' + node.category.slug + '/' + node.blogId + '/'} target="_parent">
                      <img src={node.mainimage.url} width={370} height={277} alt={node.title + 'サムネイル画像'} loading="lazy" />                      
                    </a>
                  </p>
                  <p className="workstitle"><a href={'/blog/' + node.category.slug + '/' + node.blogId} target="_parent">{node.title}</a></p>
                </div>
                </SwiperSlide>
              ))}
            </div>
            </Swiper>

            </div>

          </div>
        </section>

        <section id="movie">
          <div className="main-content">

            <h3>佐々木塗装紹介動画</h3>

            <EmbedYoutube />

            <ul className="img_list3">
              <li><Link to="/gaiheki/"><img src="../images/bn01.jpg" width={376} height={139} className="opa" loading="lazy" alt="外壁塗装" /></Link></li>
              <li><Link to="/yane/"><img src="../images/bn02.jpg" width={376} height={139} className="opa" loading="lazy" alt="屋根塗装" /></Link></li>
              <li><Link to="/yanefuki/"><StaticImage src="../images/bn03.jpg" width="376" height="139" className="opa" loading="lazy" alt="屋根葺替" /></Link></li>
              <li><Link to="/yanecover/"><img src="../images/bn04.jpg" width={376} height={139} className="opa" loading="lazy" alt="屋根カバー工法" /></Link></li>
              <li><Link to="/drainspout/"><StaticImage src="../images/bn05.jpg" width="376" height="139" className="opa" loading="lazy" alt="雨樋の交換" /></Link></li>
              <li><Link to="/exterior/"><img src="../images/bn06.jpg" width={376} height={139} className="opa" loading="lazy" alt="エクステリア" /></Link></li>
            </ul>

          </div>
        </section>

        <About />

        <section id="study">
          <div className="main-content">

            <div className="flex-wrap">

              <div className="study_r">

                <p className="title05">住宅塗装について不安や<br className="smp" />疑問ありませんか？</p>
                
                <div><img src="../images/study_pic01.jpg" width={900} height={563} loading="lazy" alt="悪い業者と良い業者の見分け方は？塗料によって何がどう変わるの？見積書の見方がわからない・・・工事後の保証ってどうなるの？" /></div>
                
                <p className="title06">その疑問、塗り替え勉強会で<br className="smp" />お答えします！</p>
                
                <div className="center">
                  <img src="../images/arrow01.png" width={280} height={52} loading="lazy" alt="塗り替え勉強会開催日はこちら" />
                </div>
                
                <div className="study_box">
                  <dl className="study_list">
                    <dt><FontAwesomeIcon icon={faCircleChevronRight} />2022/11/6（日）</dt>
                    <dd>塗り替え勉強会を開催します　開催場所：高陽町商工会<span className="stydy_bt_box"><span className="pika_study_bt_off">勉強会は終了しました</span></span></dd>
                    <dt><FontAwesomeIcon icon={faCircleChevronRight} />2022/10/29（土）</dt>
                    <dd>塗り替え勉強会を開催します　開催場所：安佐北区民文化センター<span className="stydy_bt_box"><span className="pika_study_bt_off">勉強会は終了しました</span></span></dd>
                    <dt><FontAwesomeIcon icon={faCircleChevronRight} />2022/05/05（木）</dt>
                    <dd>コロナウイルス感染症対策で調整中。</dd>
                    <dt><FontAwesomeIcon icon={faCircleChevronRight} />2022/04/17（日）</dt>
                    <dd>市民講座「塗り替えセミナー」を行いました。<span className="stydy_bt_box"><span className="pika_study_bt_off">勉強会は終了しました</span></span></dd>
                    <dt><FontAwesomeIcon icon={faCircleChevronRight} />2022/04/09（土）</dt>
                    <dd>市民講座「塗り替えセミナー」を行いました。</dd>
                  </dl>
                </div>
                
                <div className="arekore_bn">
                <img src="../images/column_bn01.jpg" width={900} height={300} alt="外壁塗装コラム 外壁塗装をする前に知っておきたい塗装アレコレ" loading="lazy" />
                  <div className="arekore_bt">
                    <Link to="/tosou-arekore/"><img src="../images/column_bt01.gif" width={195} height={45} loading="lazy" alt="こちらから" /></Link>
                  </div>
                </div>

                <p className="title05 mt3p">施工事例</p>

                <div className="case_list_wrap">
                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  768: {
                    slidesPerView: 4,
                  }
                }}
                autoHeight>
                  {data.case.edges.map(({ node }) => (
                    <SwiperSlide>
                      <div className="case_list">
                        <div className="kanryo_icon"></div>
                        <div className="kanryo_icon2"><img src="../images/kanryo_icon.png" width={178} height={50} alt="完成！" loading="lazy" /></div>
                        <p>
                          <a href={'/case/' + node.caseId} target="_parent">
                            <img src={node.atoImg.url} width={432} height={288} alt={node.title + 'サムネイル画像'} loading="lazy" />
                          </a>
                        </p>
                        <p className="workstitle"><a href={'/case/' + node.caseId} target="_parent">{node.title}</a></p>
                      </div>
                    </SwiperSlide>
                  ))}
                  </Swiper>
                </div>
                
                <div className="p3p">
                  <p className="center"><Link to="/case/" className="bt01"><FontAwesomeIcon icon={faAngleRight} /> 施工事例はこちらから</Link></p>
                </div>
              </div>

              <div className="study_l">
                <Sideb />                
              </div>

            </div>
          </div>
        </section>

        <section id="paint">
          <div className="main-content">

          <h3>取扱い塗料</h3>

          <p className="mt3p"><img src="/images/print_img01.jpg" width={1200} height={600} loading="lazy" alt="取扱い塗料-イメージ" /></p>

          <ul>
            <li><img src="../images/paint_logo01.jpg" width={274} height={95} loading="lazy" alt="GAINA" /></li>
            <li><img src="../images/paint_logo02.jpg" width={274} height={95} loading="lazy" alt="AGC" /></li>
            <li><img src="../images/paint_logo03.jpg" width={274} height={95} loading="lazy" alt="Adgreencoat" /></li>
            <li><img src="../images/paint_logo04.jpg" width={274} height={95} loading="lazy" alt="日本ペイント" /></li>
            <li><img src="../images/paint_logo05.jpg" width={274} height={95} loading="lazy" alt="エスケー化研" /></li>
            <li><img src="../images/paint_logo06.jpg" width={274} height={95} loading="lazy" alt="水谷ペイント株式会社" /></li>
            <li><img src="../images/paint_logo07.jpg" width={274} height={95} loading="lazy" alt="菊水化学工場株式会社" /></li>
            <li><img src="../images/paint_logo08.jpg" width={274} height={95} loading="lazy" alt="AUTO" /></li>
            <li><img src="../images/paint_logo09.jpg" width={274} height={95} loading="lazy" alt="ASTEC" /></li>
            <li><img src="../images/paint_logo10.jpg" width={274} height={95} loading="lazy" alt="スズカファイン株式会社" /></li>
            <li><img src="../images/paint_logo11.jpg" width={274} height={95} loading="lazy" alt="WB多彩仕上工法" /></li>
            <li><img src="../images/paint_logo12.jpg" width={274} height={95} loading="lazy" alt="株式会社鶴弥" /></li>
            <li><img src="../images/paint_logo13.jpg" width={274} height={95} loading="lazy" alt="IG KOGYO" /></li>
            <li><img src="../images/paint_logo14.jpg" width={274} height={95} loading="lazy" alt="Dee Trading CO.,LTD." /></li>
            <li><img src="../images/paint_logo15.jpg" width={274} height={95} loading="lazy" alt="LIXIL" /></li>
            <li><img src="../images/paint_logo16.jpg" width={274} height={95} loading="lazy" alt="カルセラ" /></li>
          </ul>

          </div>
        </section>

        <section id="sdgs">
          <div className="main-content">
            <h3>持続可能な開発目標（SDGs）達成への取組み</h3>
            <p className="center">
            <img src="../images/sdg_poster_ja_2021.png" width={1200} height={712} loading="lazy" alt="SUSTAINABLE DEVELOPMENT GOALS" />
            </p>
            <p className="center"><Link to="/sdgs/" className="bt01"><FontAwesomeIcon icon={faAngleRight} /> SDGSの取り組みはこちら</Link></p>
          </div>
        </section>

        <section id="soudan">
          <div className="main-content">

            <h3 className="p1p"><img src="../images/corona_img.png" width={840} height={855} loading="lazy" alt="屋根・外装塗装専門店 屋根・壁の痛みが気になるが新型コロナウィルスで後回しになっている方へ" /></h3>

          </div>
        </section>
    
        </div>
      </div>
      
      <SoubaCheck />

      <section id="access">
        <div className="main-content">
          <div className="gmap">
            <iframe title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6573.319908924152!2d132.54162462602378!3d34.536842271907204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a8281c2fd5363%3A0x2984c2ecc13d2926!2z5L2Q44CF5pyo5aGX6KOF!5e0!3m2!1sja!2sjp!4v1654040493911!5m2!1sja!2sjp" width="100%" height={400} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://sasaki-tosou.co.jp/#breadcrumblist",
      "itemListElement":[
        {
          "@type":"ListItem",
          "@id":"https://sasaki-tosou.co.jp/#listItem",
          "position":1,
          "item":{
            "@type":"WebPage",
            "@id":"https://sasaki-tosou.co.jp/",
            "name":"外壁塗装・屋根塗装なら広島の佐々木塗装｜安心施工、保証付きのアフターサービス。安佐北区で施工実績900件以上の実績。",
            "description":"広島の外壁塗装・屋根塗装なら佐々木塗装にお任せ下さい。安心の口コミ総合評価4.7。まずは10秒無料相場チェック！",
            "url":"https://sasaki-tosou.co.jp/"
          },
          "nextItem":"https://sasaki-tosou.co.jp/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://sasaki-tosou.co.jp/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://sasaki-tosou.co.jp/#webpage",
      "url":"https://sasaki-tosou.co.jp/",
      "name":"外壁塗装・屋根塗装なら広島の佐々木塗装｜安心施工、保証付きのアフターサービス。安佐北区で施工実績900件以上の実績。",
      "description":"広島の外壁塗装・屋根塗装なら佐々木塗装にお任せ下さい。安心の口コミ総合評価4.7。まずは10秒無料相場チェック！",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://sasaki-tosou.co.jp/#website"
      },
      "breadcrumb":{
        "@id":"https://sasaki-tosou.co.jp/#breadcrumblist"
      },
      "datePublished":"2022-8-26T02:23:53+09:00",
      "dateModified":"2022-12-24T3:08:17+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://sasaki-tosou.co.jp/#website",
      "url":"https://sasaki-tosou.co.jp/",
      "name":"外壁塗装・屋根塗装なら広島の佐々木塗装｜安心施工、保証付きのアフターサービス。安佐北区で施工実績900件以上の実績。",
      "description":"広島の外壁塗装・屋根塗装なら佐々木塗装にお任せ下さい。安心の口コミ総合評価4.7。まずは10秒無料相場チェック！",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://sasaki-tosou.co.jp/#person"
      }
    }
  ]
}

const jsonhowto = {

  "@context":"https://schema.org",
  "@type": "HowTo",
  "name": "最短10秒無料相場チェックの流れ",
  "description": "広島外壁塗装｜広島市安佐北区で施工実績No.1。広島発のドローンを使用した外装劣化診断士による診断。安心施工、保証付きのアフターサービス。大切な住まいの塗り替えは一級塗装技能士在籍、塗装のプロフェッショナル集団。屋根・外壁塗装の専門店の佐々木塗装にお任せください。 ［無料診断・無料見積を実施中］",
  "image": {
    "@type": "ImageObject",
    "url": "https://sasaki-tosou.co.jp/images/souba_oneesan_smp.jpg"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "none"
    }, {
      "@type": "HowToSupply",
      "name": "none"
    }, {
      "@type": "HowToSupply",
      "name": "none"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "PC SmartPhone"
    }, {
      "@type": "HowToTool",
      "name": "PC SmartPhone"
    },{
      "@type": "HowToTool",
      "name": "PC SmartPhone"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "ステップ1",
      "text": "相場チェックフォームにご入力。お住まいの情報をフォームにご入力下さい。",
      "image": "https://sasaki-tosou.co.jp/images/souba_txt01.png",
      "url": "https://sasaki-tosou.co.jp/#souba_check"
    },
    {
      "@type": "HowToStep",
      "name": "ステップ2",
      "text": "資格所有の塗装専門担当者が外壁塗装の相場についてお答え。ご不明点も解消いただけます。",
      "image": "https://sasaki-tosou.co.jp/images/souba_txt02.png",
      "url": "https://sasaki-tosou.co.jp/#souba_check"
    }
    ,
    {
      "@type": "HowToStep",
      "name": "ステップ3",
      "text": "資格所有の塗装専門担当者が外壁塗装の相場についてお答え。ご不明点も解消いただけます。",
      "image": "https://sasaki-tosou.co.jp/images/souba_txt03.png",
      "url": "https://sasaki-tosou.co.jp/#souba_check"
    }
  ],
  "totalTime": "PT10S",
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
           description="外壁塗装・屋根塗装なら広島市安佐北区の佐々木塗装へ！"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> 
    <script type="application/ld+json">{JSON.stringify(jsonhowto)}</script>
  </>
)

export const query = graphql`

query {

  case: allMicrocmsCase(limit: 4, sort: {date: DESC}) {
    edges {
      node {
        title
        caseId
        date(formatString: "YYYY年MM月DD日")
        category {
          slug
          name
          id
        }
        atoImg {
          url
        }
        maeImg {
          url
        }
        casePeriod
        casetxt
        caseDescription
      }
    }
  }
  
  works: allMicrocmsBlog(
    filter: {category: {slug: {eq: "now-working"}}}
    limit: 9
    sort: {date: DESC}
  ) {
    edges {
      node {
        title
        blogId
        date(formatString: "YYYY年MM月DD日")
        category {
          slug
          name
          id
        }
        body
        excerpt
        mainimage {
          url
          height
          width
        }
      }
    }
  }
  
  blog: allMicrocmsBlog(
    filter: {category: {slug: {ne: "syachoblog"}}}
    limit: 10
    sort: {date: DESC}
  ) {
    edges {
      node {
        title
        blogId
        date(formatString: "YYYY年MM月DD日")
        category {
          slug
          name
          id
        }
        body
        excerpt
        mainimage {
          url
        }
      }
    }
  }

}
`