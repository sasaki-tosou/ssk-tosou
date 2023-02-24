import React from 'react'
import { Link } from "gatsby"

import { AnchorLink } from "gatsby-plugin-anchor-links";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Seo from '../components/Seo'
import Layout from '../components/Layout';
import Pagetop from '../components/Pagetop';

const ColorSimulation = () => {
  return (
    <>
      <Layout>

        

        <p id="page-top" data-sal="slide-bottom" viewoffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/color_simulation/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <Pagetop />

        <div id="mainimage-sub" className='color-simulation'>
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
                    <Link to="/color_simulation/" itemprop="item">
                        <span itemprop="name">カラーシミュレーション</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <h3 className="color_simu_title"><span className="pink">色選びで失敗したくない！</span><br />
            屋根・外壁塗装リフォーム<br className='smp_ss' />カラーシミュレーション</h3>
            
            <p>※株式会社佐々木塗装のカラーシミュレーションは、<span className="pink bold">屋根・外壁の塗装リフォームをご契約いただいたお客様対象の無料サービス</span>です。ご契約前にカラーシミュレーションを希望される場合は有料となることがあります。詳しくはご相談ください。</p>
            
            <h4 className="color_simu_title mb3p"><span className="orange">「こんな色はどうかな？」<br className='smp_ss' />「こっちの色もいいね！」</span><br className='smp' />など、<br className='pc' />塗装前に<br className='smp_ss' />仕上がりイメージを<br className='smp_ss' />ご確認いただけます。</h4>
            
            <div className="color_catch_box">
                <div className="color_catch_img"><img src="../images/color/color_pic01.jpg" loading="lazy" alt="" /></div>
                <div className="color_catch_txt">
                    屋根や外壁の塗を行う際、「塗装する色をどうしよう？」と悩まれる方が少なくありません。塗装後にイメージと違うとなっても、なかなか塗り直しができないのが現状です。<br />
                    そんな不安を少しでも解消できるよう、株式会社佐々木塗装では「カラーシミュレーション（ご契約者様のみ無料）」をご提供しています。塗装リフォーム前に自分のお家に色を付けて見ることができたら、イメージが湧きやすいですよね。とても具体的にイメージできるので、塗装の色選びという重要な部分の失敗を防ぐことができます。
                </div>
            </div>
            <p className="center noto_san bold txt140p">実際にあなたのお家の写真に合成<br className='smp_ss' />するので、<br className='tub_s' />
            塗装後のイメージが<br className='smp_ss' />ひと目で分かります！</p>
            <ul className="color_img_list">
                <li><img src="../images/color/color_pic02.jpg" loading="lazy" alt="" /></li>
                <li><img src="../images/color/color_pic03.jpg" loading="lazy" alt="" /></li>
                <li><img src="../images/color/color_pic04.jpg" loading="lazy" alt="" /></li>
                <li><img src="../images/color/color_pic05.jpg" loading="lazy" alt="" /></li>
            </ul>
            <p className="center noto_san bold txt140p">様々なカラーやパターンを<br className='smp_ss' />ご用意いたします。<br />
            お気に入りの色の組み合わせを、担当者と２人３脚で<br className='smp_ss' />決めてください。</p>
            <h3 className="drone_title01">もし色選びに悩んだら、<br className='smp_ss' />プロに聞いてください</h3>
            <div className="flex-wrap">
                <div className="w70p pr2p">
                    <h4 className="txt160p noto_san bold mb3p"><span className="orange">「どんな色が似合うんだろう？」</span>と悩んだら・・・<br />
                    あなたのお家にピッタリな<br className='smp_ss' />色を、プロがご提案します！</h4>
                    「ウチの屋根や外壁には、どんな色が合うのかしら？」「○○の色を使いたいんだけれど…派手すぎないかな？」「塗ってみないと外壁のイメージがつかない！」など、塗装リフォーム後のイメージができないと不安になるものです。
                    そんな時は私たち、屋根・外壁のプロに相談してみてください。お客様のご要望をお聞きし、お家の状態や周辺の環境にも配慮しながら、ピッタリな色をご提案させていただきます。
                </div>
                <div className="w30p"><img src="../images/color/color_pic12.jpg" loading="lazy" alt="" /></div>
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
            title="カラーシミュレーション"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装のカラーシミュレーションページです。"
        />
    </>
)

export default ColorSimulation
