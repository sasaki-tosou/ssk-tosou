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

const ColorSimulation = () => {
  return (
    <>
      <Layout>
        <Seo
            title="カラーシミュレーション"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装のカラーシミュレーションページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/color_simulation/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

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

            <h3 className="txt250p noto_san bold"><span className="pink">色選びで失敗したくない！</span><br />
            屋根・外壁塗装リフォームカラーシミュレーション</h3>
            
            <p>※株式会社佐々木塗装のカラーシミュレーションは、<span className="pink bold">屋根・外壁の塗装リフォームをご契約いただいたお客様対象の無料サービス</span>です。ご契約前にカラーシミュレーションを希望される場合は有料となることがあります。詳しくはご相談ください。</p>
            
            <h4 className="txt250p noto_san bold mb3p"><span className="orange">「こんな色はどうかな？」「こっちの色もいいね！」</span>など、<br />
            塗装前に仕上がりイメージをご確認いただけます。</h4>
            
            <div className="color_catch_box">
                <div className="color_catch_img"><StaticImage src="../images/color_pic01.jpg" alt="" /></div>
                <div className="color_catch_txt">
                    屋根や外壁の塗を行う際、「塗装する色をどうしよう？」と悩まれる方が少なくありません。塗装後にイメージと違うとなっても、なかなか塗り直しができないのが現状です。<br />
                    そんな不安を少しでも解消できるよう、株式会社佐々木塗装では「カラーシミュレーション（ご契約者様のみ無料）」をご提供しています。塗装リフォーム前に自分のお家に色を付けて見ることができたら、イメージが湧きやすいですよね。とても具体的にイメージできるので、塗装の色選びという重要な部分の失敗を防ぐことができます。
                </div>
            </div>
            <p className="center noto_san bold txt140p">実際にあなたのお家の写真に合成するので、<br />
            塗装後のイメージがひと目で分かります！</p>
            <ul className="color_img_list">
                <li><StaticImage src="../images/color_pic02.jpg" alt="" /></li>
                <li><StaticImage src="../images/color_pic03.jpg" alt="" /></li>
                <li><StaticImage src="../images/color_pic04.jpg" alt="" /></li>
                <li><StaticImage src="../images/color_pic05.jpg" alt="" /></li>
            </ul>
            <p className="center noto_san bold txt140p">様々なカラーやパターンをご用意いたします。<br />
            お気に入りの色の組み合わせを、担当者と２人３脚で決めてください。</p>
            <h3 className="drone_title01">もし色選びに悩んだら、プロに聞いてください</h3>
            <div className="flex-wrap">
                <div className="w70p pr2p">
                    <h4 className="txt160p noto_san bold mb3p"><span className="orange">「どんな色が似合うんだろう？」</span>と悩んだら・・・
                    あなたのお家にピッタリな色を、プロがご提案します！</h4>
                    「ウチの屋根や外壁には、どんな色が合うのかしら？」「○○の色を使いたいんだけれど…派手すぎないかな？」「塗ってみないと外壁のイメージがつかない！」など、塗装リフォーム後のイメージができないと不安になるものです。
                    そんな時は私たち、屋根・外壁のプロに相談してみてください。お客様のご要望をお聞きし、お家の状態や周辺の環境にも配慮しながら、ピッタリな色をご提案させていただきます。
                </div>
                <div className="w30p"><StaticImage src="../images/color_pic12.jpg" alt="" /></div>
            </div>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default ColorSimulation
