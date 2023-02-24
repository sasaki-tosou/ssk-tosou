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

const exterior = () => {
  return (
    <>
      <Layout>
        <Seo
            title="エクステリア"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装のエクステリアページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/exterior/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>
        <Pagetop />

        <div id="mainimage-sub" className='exterior'>
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
                    <Link to="/exterior/" itemprop="item">
                        <span itemprop="name">エクステリア</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <div className="gaiheki_title_box">
                <h1>
                    <img src="../images/exterior/exterior_img01.png" alt="玄関ドア、窓リフォーム、フェンス取付け、外構工事 エクステリア工事" className="pc" />
                    <img src="../images/exterior/exterior_img01_smp.png" alt="玄関ドア、窓リフォーム、フェンス取付け、外構工事 エクステリア工事" className="smp" />
                </h1>
            </div>

            <div className="exterior_content">
                <div className="title">
                <h2>リシェント玄関ドア３・リシェント玄関ドア３防火戸の特長</h2>
                </div>
                <div className="exterior_title">
                    <h3>新しい玄関で、毎日をもっと心地よく。</h3>
                </div>
                <div className="flex-vcenter">
                    <div className="cover_point_l order2 p2p">
                        <p className="noto_san txt180p bold orange">1日でわが家の表情が美しく、<br />
                        玄関のお悩みも解消！</p>
                        <p>「いってきます」から「ただいま」までの間に、リフォームできます。</p>
                    </div>
                    <div className="cover_point_r order1 p2p"><img src="../images/exterior/default_img_01.png" loading="lazy" alt="" /></div>
                </div>
                <div className="flex-vcenter">
                    <div className="cover_point_l p2p">
                        <p className="noto_san txt180p bold orange">カギを閉めたまま、<br />
                        気になる空気をリフレッシュ。</p>
                        <p>空気がこもりがちな玄関も、網戸付だから安心して換気ができます。</p>
                    </div>
                    <div className="cover_point_r p2p"><img src="../images/exterior/default_img_02.png" loading="lazy" alt="" /></div>
                </div>
                <div className="flex-vcenter">
                    <div className="cover_point_l order2 p2p">
                        <p className="noto_san txt180p bold orange">電気錠で、玄関キーをもっと便利&安心に。</p>
                        <p>鍵を携帯しているだけで、施錠も開錠も1アクション。帰宅時も、外出時も、ボタンをタッチするだけ。オートロックの設定にもできるので、鍵の閉め忘れも安心です。</p>
                    </div>
                    <div className="cover_point_r order1 p2p"><img src="../images/exterior/default_img_03.jpg" loading="lazy" alt="" /></div>
                </div>
            </div>
            <div className="exterior_content mt0">
                <div className="title">
                    <h2>玄関ドア交換工事</h2>
                </div>
                <div className="catch_box">
                    <h3 className="noto_san bold orange txt160p">古い扉を外して枠だけを残し、今ある枠の上から新しい枠と扉を取り付けます。</h3>
                    <p className="noto_san bold">たったの1日でおうちの玄関が生まれ変わります。</p>
                </div>

                <div className="flex-wrap">
                    <div className="exterior_box">
                    <h4 className="noto_san bold orange txt140p">和風住宅にピッタリの引き戸タイプのドア</h4>
                    <p><img src="../images/exterior/exterior_pic01.jpg" loading="lazy" alt="" /></p>
                    <p>LIXIL リシェント玄関引戸2枚建欄間付き51型<br />
                    30万円～</p>                        
                    </div>
                    <div className="exterior_box">
                    <h4 className="noto_san bold orange txt140p">洋風住宅向きの高級感あふれる親子ドア</h4>
                    <p><img src="../images/exterior/exterior_pic02.jpg" loading="lazy" alt="" /></p>
                    <p>LIXIL リシェント玄関ドア3 断熱仕様(K4)親子R G12型<br />
                    35万円～</p>
                    </div>
                    <div className="exterior_box">
                    <h4 className="noto_san bold orange txt140p">玄関ドアを閉めたまま喚起ができる採風タイプ</h4>
                    <p><img src="../images/exterior/exterior_pic03.jpg" loading="lazy" alt="" /></p>
                    <p>LIXIL リシェント玄関ドア3 断熱仕様(K4)親子L M84型<br />
                    40万円～</p>
                    </div>
                </div>
            </div>

            <div className="exterior_content">
                <div className="title">
                    <h2>カーポート STの特長</h2>
                </div>
                <div className="exterior_title">
                <h3>”雪から暮らしを守る”という基本性能を追求しながら、<br />
                直線的な機能美にこだわった、カーポートST</h3>
                </div>
                <div className="flex-vcenter">
                    <div className="cover_point_l order2 p2p">
                        <p className="noto_san txt180p bold orange">雪に強い!</p>
                        <p>耐積雪強度 最大200cm相当</p>
                    </div>
                    <div className="cover_point_r order1 p2p"><img src="../images/exterior/carport-st_img_01.jpg" loading="lazy" alt="" /></div>
                </div>
                <div className="flex-vcenter">
                    <div className="cover_point_l p2p">
                        <p className="noto_san txt180p bold orange">住まいの顔を美しく!</p>
                        <p>ファサード空間に快適さとデザインを</p>
                    </div>
                    <div className="cover_point_r p2p"><img src="../images/exterior/carport-st_img_02.jpg" loading="lazy" alt="" /></div>
                </div>
                <div className="flex-vcenter">
                    <div className="cover_point_l order2 p2p">
                        <p className="noto_san txt180p bold orange">風に強い!</p>
                        <p>耐風圧強度 46m/秒相当</p>
                    </div>
                    <div className="cover_point_r order1 p2p"><img src="../images/exterior/carport-st_img_03.jpg" loading="lazy" alt="" /></div>
                </div>
            </div>
            

            <div className="exterior_content">
                <div className="title">
                    <h2> スピーネの特長</h2>
                </div>
                <div className="exterior_title">
                <h3>テラスに「ほしかった」あんなことこんなこと。求められたのは、スピーディで安全な施工性、必要にして十分な機能性、そして、住まいに美しく調和するデザイン。</h3>
                </div>
                <div className="flex-vcenter">
                    <div className="cover_point_l order2 p2p">
                        <p className="noto_san txt180p bold orange">雨の日でも干せる！</p>
                        <p>テラスがあれば、洗濯したい時が干せる時。屋外に干したままでも外出できてストレスなし。</p>
                    </div>
                    <div className="cover_point_r order1 p2p"><img src="../images/exterior/speene_img_01.png" loading="lazy" alt="" /></div>
                </div>
                <div className="flex-vcenter">
                    <div className="cover_point_l p2p">
                        <p className="noto_san txt180p bold orange">2階・3階にもテラスがつけられる！</p>
                        <p>スピーネなら2階にも3階にも設置可能な安心設計。ベランダを物干しスペースとして有効に活用できます。</p>
                    </div>
                    <div className="cover_point_r p2p"><img src="../images/exterior/speene_img_02.png" loading="lazy" alt="" /></div>
                </div>
                <div className="flex-vcenter">
                    <div className="cover_point_l order2 p2p">
                        <p className="noto_san txt180p bold orange">狭いスペースにもつけられる！</p>
                        <p>勝手口にテラスがあれば雨にぬれずにゴミ出しも可能。テラスがあれば狭小スペースも自転車置き場に。</p>
                    </div>
                    <div className="cover_point_r order1 p2p"><img src="../images/exterior/speene_img_03.png" loading="lazy" alt="" /></div>
                </div>
            </div>

            <div className="exterior_content">
                <div className="title">
                    <h2>樹ら楽ステージの特長</h2>
                </div>
                <div className="exterior_title">
                <h3>多彩なプランと豊富なバリエーションで、庭空間のアレンジも思いのまま。開放感とくつろぎに満ちたデッキのある生活を実現します。</h3>
                </div>
                <div className="flex-vcenter">
                    <div className="cover_point_l order2 p2p">
                        <p className="noto_san txt180p bold orange">温度の上昇を抑える</p>
                        <p>太陽光線を反射し、昇温抑制効果のある特殊タイプの顔料を採用。夏季でも表面温度の極端な上昇を抑えます。</p>
                    </div>
                    <div className="cover_point_r order1 p2p"><img src="../images/exterior/kirarastage_img_01.jpg" loading="lazy" alt="" /></div>
                </div>
                <div className="flex-vcenter">
                    <div className="cover_point_l p2p">
                        <p className="noto_san txt180p bold orange">使いやすい人工木材</p>
                        <p>人気のインテリアに調和する新色が登場。使いやすさが進化した新しい人工木材です</p>
                    </div>
                    <div className="cover_point_r p2p"><img src="../images/exterior/kirarastage_img_02.jpg" loading="lazy" alt="" /></div>
                </div>
                <div className="flex-vcenter">
                    <div className="cover_point_l order2 p2p">
                        <p className="noto_san txt180p bold orange">設置対応力</p>
                        <p>敷地に合わせて設置できるフレキシブルさと細部にもこだわったデザイン</p>
                    </div>
                    <div className="cover_point_r order1 p2p"><img src="../images/exterior/kirarastage_img_03.jpg" loading="lazy" alt="" /></div>
                </div>
            </div>

            <div className="exterior_content">
                <div className="title">
                    <h2>ヨド物置エルモの特徴</h2>
                </div>
                <div className="p2p">
                    <p className="center"><img src="../images/exterior/erumo_pic01.jpg" loading="lazy" alt="" /></p>
                </div>
                <div className="exterior_title">
                    <h3>POINT01 扉下レールをなくしてドラマチックにスムーズな扉の完成です。</h3>
                </div>
                <div className="p2p">
                    <p>下レールがないので、ゴミ詰まり、砂詰まりの心配がありません。又、寒冷地での凍上対策としても効果抜群です。静かでスムーズな動きのベアリング新戸車と合わせ、上吊り扉の利点を更に進化させました。</p>
                    <p><img src="../images/exterior/erumo_pic02.jpg" loading="lazy" alt="" /></p>
                    <p><img src="../images/exterior/erumo_pic03.jpg" loading="lazy" alt="" /></p>
                    <p>凍上とは？地中の水分が凍って、地面が隆起する現象。建物がゆがんだりするなどの被害を及ぼすことがあります。</p>
                    
                    <p>※立地条件・地盤や積雪状態が異なることから全ての凍上現象に対する効果を保証するものではありません。</p>
                </div>
                <div className="exterior_title">
                    <h3>POINT02 一時的に扉をロックできる「仮ロック機能」。(特許取得済)</h3>
                </div>
                <div className="p2p">
                    <p>頻繁な出し入れの際、便利なワンタッチ式仮ロック。</p>
                    <p><img src="../images/exterior/erumo_pic04.jpg" loading="lazy" alt="" /></p>
                </div>
                <div className="exterior_title">
                    <h3>POINT03 大きな取手「握りん棒」で開け閉めらくらく。</h3>
                </div>
                <div className="p2p">
                    <div className="flex-wrap">
                        <div className='w15p'><img src="../images/exterior/erumo_pic05.jpg" loading="lazy" alt="" /></div>
                        <div className='w85p'>
                            <p>両手がふさがっていても、ひじなどで開閉ができる大きな取手。開けやすくて閉めやすいです。(鍵2本付)</p>
                        </div>
                    </div>
                </div>
                <div className="exterior_title">
                    <h3>POINT04 好みに応じて右開きにも左開きにも。</h3>
                </div>
                <div className="p2p">
                    <p>扉の開閉方向は、組立時に設定できます。<br />
                    (間口1m52cmから2m22cm：2連片引き戸タイプ)</p>
                    
                    <p>※2枚の扉が同時に連動して広く開きます。<br />
                    ※屋根勾配は後方傾斜になります。<br />
                    ※2連片引戸の場合、開口部対向の1枚は固定壁（袖壁）となります。</p>
                    <p><img src="../images/exterior/erumo_pic06.jpg" loading="lazy" alt="" /></p>
                </div>
                <div className="exterior_title">
                    <h3>POINT05 屋根まわりは雨筋のつきにくい「汚れんコーティング」。</h3>
                </div>
                <div className="p2p">
                    <p>汚れがつきやすい屋根まわりには「汚れんコーティング」（スーパーバリアカラー）を使用。酸性雨や雪にも傷まず、表面に汚れやホコリがついても（図1）、雨水で流れ落ちてしまう（図2）スグレモノです。</p>
                    <p><img src="../images/exterior/erumo_pic07.jpg" loading="lazy" alt="" /></p>
                </div>
                <div className="exterior_title">
                    <h3>POINT06 余裕の開口高さ。</h3>
                </div>
                <div className="p2p">
                    <p>余裕の開口高さで大きな荷物の出し入れも快適です。</p>
                    <p><img src="../images/exterior/erumo_pic08.jpg" loading="lazy" alt="" /></p>
                </div>
                <div className="exterior_title">
                    <h3>POINT07 サビに強く、丈夫な床。</h3>
                </div>
                <div className="p2p">
                    <p>耐荷重6000N/m2 （約600kgf/m2）更に、断面性能30％向上　※当社従来比</p>
                    <p><img src="../images/exterior/erumo_pic09.jpg" loading="lazy" alt="" /></p>
                </div>
                <div className="exterior_title">
                    <h3>POINT08 前面に棚柱がなく、取付けや高さ調整が簡単な棚板。特許取得済</h3>
                </div>
                <div className="p2p">
                    <div className="flex-wrap">
                        <div className='w20p'><img src="../images/exterior/erumo_pic10.jpg" loading="lazy" alt="" /></div>
                        <div className='w80p'>
                            <p>壁へのワンタッチ取付け採用で、棚板の取付け配置換えが一段と簡単に。棚受けの形を小さくし、収納物の整理にも力を発揮します。<br />
                            ※高さ調整は100mmピッチで、標準タイプ11段階、背高タイプ15段階です。</p>
                        </div>
                    </div>
                </div>


            </div>


            

            </div>
        </section>
      </Layout>
    </>
  )
}

export default exterior
