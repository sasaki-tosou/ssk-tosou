import React from 'react'
import { Link } from "gatsby"

import { AnchorLink } from "gatsby-plugin-anchor-links";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Seo from '../components/Seo'
import Layout from '../components/Layout';
import Pagetop from '../components/Pagetop';

const yanefuki = () => {
  return (
    <>
      <Layout>
        
        <p id="page-top" data-sal="slide-bottom" viewoffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/yanefuki/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>
        <Pagetop />
        
        <div id="mainimage-sub" className='yanefuki'>
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
              <Link to="/yanefuki/" itemprop="item">
                  <span itemprop="name">屋根葺替え</span>
              </Link>
              <meta itemprop="position" content="2" />
            </li>
          </ul>
        </div>
        <section id="sub-page">
          <div className="main-content">

            <div className="gaiheki_title_box">
              <h1>
                  <img src="../images/yanefuki/yanefuki_img_title.png" alt="古くなった屋根材を新しい屋根材に交換 外壁塗装 屋根葺替え" className="pc" />
                  <img src="../images/yanefuki/yanefuki_img_title_smp.png" alt="古くなった屋根材を新しい屋根材に交換 外壁塗装 屋根葺替え" className="smp" />
              </h1>
            </div>

            <div className="gaiheki_title_box mb0 mt35">
              <h2><img src="/images/yanefuki/yanefuki_img26.png" loading="lazy" alt="屋根葺替え工事プラン" /></h2>
            </div>
            <div className="gaiheki_inner">
              <div className="w60p order2 pl2p">
                <h4 className="noto_san bold orange txt160p mb3p">古くなった屋根材を新しい屋根材に交換</h4>
                <p className="noto_san">古くなった屋根材を全面的に交換する工事です。<br />
                  既存の屋根材(瓦、乾式コンクリート瓦、スレート屋根)を撤去して新しい屋根材に交換します。<br />
                  無機の素材である陶器瓦にする事で塗装等のメンテナンスが不要になります。<br />
                  最近は低勾配用の瓦もあるので2寸からの葺き替えが可能です。</p>
                <p>乾式コンクリート、セメント瓦、スレート屋根から陶器瓦に交換する場合　㎡＝8,000円～</p>
                <p>※スレート屋根の場合、コンパネの追い張りが必要です<br />
                  ※アスベストを含有している屋根材の場合、処分費が割高になります</p>
                <p>《使用瓦》<br />
                  (株)鶴弥　スーパートライ110　ＴＹＰＥⅠ<br />
                  色　アンティックブラウン</p>
              </div>
              <div className="w40p order1 penki_cont">
                <p><img decoding="async" src="/images/yanefuki/yane_fuki_pic16.jpg" loading="lazy" alt="" /></p>
              </div>
            </div>
          
            <div className='yanefuki_box'>
              <h2>「瓦屋根は地震に弱い・・・」<br />
              その報道は<span>間違っています。</span></h2>
              <div className='yanefuki_img_box'>
                <div><img src='/images/yanefuki/yanefuki_img_batsu.png' loading="lazy" alt="" /></div>
                <div><img src='/images/yanefuki/yanefuki_img01.png' loading="lazy" alt="" /></div>
              </div>
              <div className='yanefuki_txt01'>
                <p>倒れた家屋。散乱した瓦。阪神・淡路大震災や東日本大震災、<br />
                そして2016年4月の熊本地震においても、<br />
                様々なメディアを通じて「瓦屋根の家は地震に弱い」といった報道やイメージが一斉に広がりました。<br />
                はたして瓦は本当に地震に弱いのでしょうか？<br />
                いいえ。それは<span className='noto_san bold skyblue'>大きな誤解です。</span></p>
              </div>

              <div className='yanefuki_inner'>

                <div className='yanefuki_in_box'>
                  <h3>家屋倒壊の理由は...</h3>
                  <h4>「旧耐震基準」にアリ</h4>
                  <p>1981年に建築基準法の耐震基準が大幅に見直され、以前よりも約1.4倍の壁量が必要となりました。今回の熊本地震で倒壊した住宅を見ても、1981年以前の「旧耐震基準」の家がほとんど。倒壊の原因は耐震性の低さにあるのに、これらの古い住宅には日本古来の瓦屋根が多く使われていたことから、「重い瓦は地震に弱い」という誤ったイメージが定着してしまったのです。</p>
                  <p>[ 耐震基準の変遷(必要壁量) ]（単位：cm/m&sup2;）</p>
                  <p>木造住宅は地震や台風などの力に、耐力壁で抵抗します。建築基準法施行令で最低限必要な壁量が定められており、これを「必要壁量」といいます。</p>
                  <div><img src='/images/yanefuki/yanefuki_img04.png' loading="lazy" alt="" /></div>
                </div>

                <div className='yanefuki_in_box'>
                  <h3>瓦のズレや落下は..</h3>
                  <h4>「施工方法が古い」から</h4>
                  <p>瓦屋根の施工方法は、長年「土葺き工法」や「釘打ち無しの工法」が一般的で、土の上に載っているだけ、桟木にひっかけてあるだけの不安定な状態でした。近年のガイドライン工法確立後も古い施工仕様がまだまだ残っており、今回の熊本地震でも瓦のズレや落下が多数発生しました。こうした被害状況も、瓦の耐震性の低さが指摘される一因となっています。</p>
                  <img src='/images/yanefuki/yanefuki_img02.png' loading="lazy" alt="" />
                  <div className='yanefuki_hikaku'>
                    <h3>同じ震度でも...</h3>
                    <h4>屋根の被害に大きな差が</h4>
                    <p>写真左は2000年以降に建てられた家で、瓦屋根に被害なし。右は旧耐震基準で建てられた家で、屋根の施工方法も古く、瓦のズレや落下が多数見られます。</p>
                    <p><img src='/images/yanefuki/yanefuki_img03.jpg' loading="lazy" alt="" /></p>
                  </div>
                </div>

              </div>

            </div>

            <div className='yanefuki_box2'>
              <div className='yanefuki_box2_l'>
                <h3><span className='txt80p'>熊本地震でもズレ・脱落ほとんどナシ。</span><br />
                <span className='skyblue txt120p'>〝防災瓦〟なら、</span><br />
                地震も台風も怖くない。</h3>
                <p>日本の屋根といえば「瓦」。でも最近は「地震に弱い」という誤解の声がちらほら・・・。<br />
                そんな今こそ、進化した瓦「防災瓦」がオススメです。<br />
                熊本地震の調査結果によると、以前の瓦の屋根にはたくさんのズレ・脱落が見つかりましたが、<br />
                「防災瓦」の屋根にはほとんど被害が見当たりませんでした。<br />
                では、防災瓦は一体何が違うのか・・・。そのヒミツ、お教えします！</p>
              </div>

              <div className='yanefuki_box2_r'>
                <img src='/images/yanefuki/yanefuki_img05.png' loading="lazy" alt="" />
              </div>

              <div className='himitsu_box'>
                <div className='inner'>
                  <p className='center'><img src='/images/yanefuki/yanefuki_img06.png' loading="lazy" alt="" /></p>
                  <p>以前の土葺き工法のように重い土を使わず、屋根重量を約半分程度に軽量化しました。</p>
                </div>
                <div className='inner'>
                  <p className='center'><img src='/images/yanefuki/yanefuki_img07.png' loading="lazy" alt="" /></p>
                  <p>すべての瓦を釘やネジでしっかり固定。瓦同士も固定し、ズレや脱落を防止します。</p>
                </div>
                <div className='inner'>
                  <p className='center'><img src='/images/yanefuki/yanefuki_img08.png' loading="lazy" alt="" /></p>
                  <p>屋根の棟部分を金具などでしっかり固定するガイドライン工法で崩壊を防ぎます。</p>
                </div>
              </div>

              <div className='fukkou_box'>

                <h3>復興住宅にも〝防災瓦〟が使われています！</h3>

                <div className='flex-wrap'>
                  <div className="inner">
                    <p>東日本大震災の被災地では、その後の災害公営住宅に数多くの「防災瓦」が採用されています。それは「防災瓦」が現行の耐震基準での耐震性が認められたのはもちろん、耐久性・メンテナンス性に加え、性能面・デザイン面でも評価されたことを証明しています。</p>
                  </div>
                  <div className="inner">
                    <img src="../images/fukkou_img01.jpg" loading="lazy" alt="" />
                  </div>
                  <div className="inner">
                    <img src="../images/fukkou_img02.jpg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>

              
            </div>

              <div className="yanefuki_box5">
                <div className="yanefuki_box5_inner">

                  <p className='yanefuki_subttl1'>日本の屋根には、やっぱり瓦！</p>
                  <h3 className='yanefuki_subttl'><span className='skyblue'>鶴弥</span>の<span className='skyblue'>〝防災瓦〟</span>は<br  className='pc'/>
                  ココが違います。</h3>

                  <div className='yanefuki_img_box'>
                    <div className="img"><img src='/images/yanefuki/yanefuki_img_maru.png' loading="lazy" alt="" /></div>
                    <div className="img"><img src='/images/yanefuki/yanefuki_img18.png' loading="lazy" alt="" /></div>
                  </div>

                  <h4 className='noto_san dark-green bold700 txt140p'><span className='under_wavy'>瓦の重さは、50年、100年と屋根を守り抜く「責任」の重さです。</span><br />
                  耐震性はもちろん、ランニングコストや快適性を考えても、鶴弥の「防災瓦」で決まりです。</h4>

                  <div className="yanefuki_box3">
                    <div className="yanefuki_box3_inner">
                      <h3><span className='skyblue txt120p'> 耐震性</span>が違う！<img src='/images/yanefuki/yanefuki_img19.png' loading="lazy" alt="" /></h3>

                      <div className='taisin_box'>
                        <div className='taisin_l'>
                          <h4 className='pc'>これまでの瓦</h4>
                          <h5 className='noto_san dark-green'>屋根が重く、地震時にズレが…</h5>
                          <div className='flex-wrap'>
                            <div className='w60p pr3p'>
                            <p>非常に重い土葺き屋根。<br />
                            たくさんの土を使っていたため、建物に大きな負荷がかかり、瓦がずれ落ちることも…。</p>
                            </div>
                            <div className='w40p center'><img src='/images/yanefuki/yanefuki_img20.jpg' loading="lazy" alt="" /></div>
                          </div>
                        </div>
                        <div className='taisin_r'>
                          <h4 className='pc'>鶴弥の防災瓦</h4>
                          <h5 className='noto_san dark-green'>土を使わず、屋根重量を<span className='skyblue txt140p'>最大60％軽量化</span></h5>

                          <div className='flex-wrap'>
                            <div className='w50p pr3p'>                  
                            <p>鶴弥の防災瓦にすれば、屋根の重量も土葺き工法の約半分程度に。建物への負荷を大幅に軽減します。</p>
                            </div>
                            <div className='w50p center'><img src='/images/yanefuki/yanefuki_img21.jpg' loading="lazy" alt="" /></div>
                          </div>
                        </div>
                      </div>

                      <div className='taisin_box'>
                        <div className='taisin_l'>
                          
                          <h5 className='noto_san dark-green'>固定不足で瓦が飛散…</h5>
                          <div className='flex-wrap'>
                            <div className='w60p pr3p'>
                              <p>以前は釘止め基準が4枚に1枚程度で、大きな台風が来ると瓦が飛び、隣家に被害をもたらすことも…。</p>
                            </div>
                            <div className='w40p center'><img src='/images/yanefuki/yanefuki_img22.jpg' loading="lazy" alt="" /></div>
                          </div>
                        </div>
                        <div className='taisin_r'>
                          
                          <h5 className='noto_san dark-green'><span className='skyblue txt140p'>スーパーロック工法</span>でズレ・飛散防止</h5>

                          <div className='flex-wrap'>
                            <div className='w50p pr3p'>                  
                              <p>上下の瓦同士をがっちりロック。さらに瓦を釘で固定し、大地震の揺れや台風でも安心です。</p>
                            </div>
                            <div className='w50p center'><img src='/images/yanefuki/yanefuki_img23.png' loading="lazy" alt="" /></div>
                          </div>
                        </div>
                      </div>

                      <div className='taisin_box'>
                        <div className='taisin_l'>
                          
                          <h5 className='noto_san dark-green'>棟の崩壊…</h5>
                          <div className='flex-wrap'>
                            <div className='w60p pr3p'>
                              <p>棟を銅線で固定している場合の多くが棟芯材なし。地震時に崩壊する可能性が…。</p>
                            </div>
                            <div className='w40p center'><img src='/images/yanefuki/yanefuki_img24.jpg' loading="lazy" alt="" /></div>
                          </div>
                        </div>
                        <div className='taisin_r'>
                          
                          <h5 className='noto_san dark-green'><span className='skyblue txt140p'>ガイドライン工法</span>で崩壊防止</h5>

                          <div className='flex-wrap'>
                            <div className='w50p pr3p'>                  
                              <p>パッキン付ステンレスねじで棟部をしっかり固定。科学的実験により実証された、耐震性の高い工法です。<br />
                              ※棟金具仕様は、地域によって仕様が異なります</p>
                            </div>
                            <div className='w50p center'><img src='/images/yanefuki/yanefuki_img25.png' loading="lazy" alt="" /></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="yanefuki_box3">
                    <div className="yanefuki_box3_inner">
                    <h3><span className='skyblue txt120p'>耐久性</span>が違う！<img src='/images/yanefuki/yanefuki_img09.png' loading="lazy" alt="" /></h3>
                    
                    
                    <div className='yanefuki_box3_inbox'>
                      <div>
                      <h4>サビない<br className='pc' />
                    色落ちしない</h4>
                        <p>鶴弥の防災瓦は釉薬を施し、高音で焼き上げた粘土瓦です。<br />
                        30年経過しても、サビない、色落ちしない。塗り替えメンテナンスがいらないことも特徴のひとつです。</p>
                      </div>
                      <div>
                        <h5>サビた金属屋根</h5>
                        <img src='/images/yanefuki/yanefuki_img10.jpg' loading="lazy" alt="" />
                      </div>
                      <div>
                        <h5>色落ちした化粧スレート屋根</h5>
                        <img src='/images/yanefuki/yanefuki_img11.jpg' loading="lazy" alt="" />
                      </div>
                      <div>
                        <h5>30年後の瓦屋根</h5>
                        <img src='/images/yanefuki/yanefuki_img12.jpg' loading="lazy" alt="" />
                      </div>
                    </div>

                    </div>
                  </div>

                  <div className="yanefuki_box4">
                    <div className="yanefuki_box4_inner">

                      <h3><span className='skyblue txt120p'>経済性</span>が違う！<img src='/images/yanefuki/yanefuki_img13.png' loading="lazy" alt="" /></h3>

                      <div className='flex-wrap'>

                        <div className='w60p'>

                          <p>［コストとメンテナンスのイメージ］<br />
                          屋根面積100m&sup2;で、メンテナンスコスト・シミュレーションを行いました。</p>

                          <p><img src='/images/yanefuki/yanefuki_img14.png' loading="lazy" alt="" /></p>

                          <p>※1 専門業者による定期点検を10年に1回程度を目安として実施するようにお願いします。</p>

                        </div>

                        <div className='w40p'>

                          <h4 className='yanefuki_fukidasi'>化粧スレートと比べて30年間で<br className='pc' />
                          <span>約</span><span className='txt220p'>230万円</span>お得!!</h4>
                          
                          <h5 className='noto_san bold txt180p dark-green'>長持ちするから<br className='pc' />
                          「塗替えコスト不要」</h5>
                          
                          <p>防災瓦の初期費用は、化粧スレートに比べると高いのは事実。しかし、20年、30年という単位でみると、200万円以上のコストメリットがあります。</p>

                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="yanefuki_box4">
                    <div className="yanefuki_box4_inner">

                      <h3><span className='skyblue txt120p'>快適性</span>が違う！<img src='/images/yanefuki/yanefuki_img15.png' loading="lazy" alt="" /></h3>

                      <div className='flex-wrap'>

                      <div className='kaiteki_box'>

                      <h4 className='noto_san bold dark-green txt160p'>高い「通気性」と<br className='pc' />
                      「断熱性」を実現</h4>
                      
                      <p>防災瓦の場合、野地面との間に空気層ができます。そのため通気性もよくなり、熱を屋根裏へ伝えにくく、また室内の熱を逃しにくい働きがあります。</p>

                      </div>

                      <div className='kaiteki_box'><img src='/images/yanefuki/yanefuki_img16.png' loading="lazy" alt="" /></div>

                      <div className='kaiteki_box'><img src='/images/yanefuki/yanefuki_img17.png' loading="lazy" alt="" /></div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>

              <h3 className="page_title01">屋根葺き替え工事の流れ</h3>

              <p className="center red">（スレート屋根から陶器平板瓦に交換する場合）</p>

              <div className="flex-wrap">            
                <div className="yane_fuki_box">
                  <p><img src="../images/yanefuki/yane_fuki_pic05.jpg" loading="lazy" alt="" /></p>
                  <p>1.既存屋根材撤去</p>
                </div>
                <div className="yane_fuki_box">
                  <p><img src="../images/yanefuki/yane_fuki_pic06.jpg" loading="lazy" alt="" /></p>
                  <p>2.新規コンパネ追い張り</p>
                </div>
                <div className="yane_fuki_box">
                  <p><img decoding="async" src="/images/yanefuki/yane_fuki_pic07.jpg" loading="lazy" alt="" /></p>
                  <p>3.新規ルーフィング(防水シート)張り</p>
                </div>
                <div className="yane_fuki_box">
                  <p><img decoding="async" src="/images/yanefuki/yane_fuki_pic08.jpg" loading="lazy" alt="" /></p>
                  <p>4.桟木取付け</p>
                </div>
                <div className="yane_fuki_box">
                  <p><img decoding="async" src="/images/yanefuki/yane_fuki_pic09.jpg" loading="lazy" alt="" /></p>
                  <p>5.新規瓦葺き</p>
                </div>
                <div className="yane_fuki_box">
                  <p><img decoding="async" src="/images/yanefuki/yane_fuki_pic10.jpg" loading="lazy" alt="" /></p>
                  <p>6.棟換気取付け</p>
                </div>
                <div className="yane_fuki_box">
                  <p><img decoding="async" src="/images/yanefuki/yane_fuki_pic11.jpg" loading="lazy" alt="" /></p>
                  <p>7.新規棟積み</p>
                </div>
                <div className="yane_fuki_box">
                  <p><img decoding="async" src="/images/yanefuki/yane_fuki_pic12.jpg" loading="lazy" alt="" /></p>
                  <p>8.新規壁際板金取付け</p>
                </div>
                <div className="yane_fuki_box">
                  <p><img decoding="async" src="/images/yanefuki/yane_fuki_pic13.jpg" loading="lazy" alt="" /></p>
                  <p>屋根葺き替え完</p>
                </div>
              </div>

              <div className="yanefuki_content mt50">
                <h3 className="title">(株)神清 和型BASIC(J型)</h3>
                <div className="yanefuki_inner">
                <div className="yanefuki_l">
                    <p><img src="../images/yanefuki/yanefuki_img27.jpg" loading="lazy" alt="" /></p>
                  </div>
                  <div className="yanefuki_r">
                    <h4 className="noto_san bold orange txt160p mb3p">和風住宅に合う落ち着きのある屋根材</h4>
                    <p><span className="noto_san bold txt140p">三州瓦</span><br />製品保証在り</p>
                    <p className='noto_san bold txt160p'>㎡=¥8,500～</p>                
                  </div>
                </div>
                <div className="inner">
                  <h3 className="subtitle">商品の特徴 <br className="smp" />和型BASIC(J型)とは</h3>
                  <h4 className="noto_san bold orange txt160p_pc mb3p">進化したJ形瓦。洗練された美しさ、安らぎと安心感を与えます。</h4>
                  
                  <p>洗練された美しさ、やすらぎと安心感を与えてくれる存在感。イブシの上質な風合いが、現代人が忘れかけていた懐かしい風景を思い出させてくれます。</p>
                  <p>建築のデザインや街並みの雰囲気に合わせて、住まう人の自由な感性で選びたいこれからの瓦。一人ひとり異なったライフスタイルがあるように、瓦にもそれぞれの自己主張と個性があります。 神清は、豊富なカラーバリエーションをご用意して、多彩な建築ニーズにお応えしています。</p>

                  <h4 className="subtitle2">カラーバリエーション</h4>
                  <ul>
                    <li><img src="/images/yanefuki/b1a1sn.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b1a2sn.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b1a3sn.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b1a4sn.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b1a5sn.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b1a6sn.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b1a7sn.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b1a8sn.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b1a9sn.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b1a10sn.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b1a11sn.jpg" loading="lazy" alt="" /></li>
                  </ul>

                  <h4 className="subtitle2">軒部分バリエーション</h4>

                  <ul>
                    <li><img src="/images/yanefuki/b2a1s.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b2a2s.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b2a3s.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b2a4s.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b2a5s.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b2a6s.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b2a7s.jpg" loading="lazy" alt="" /></li>
                  </ul>

                  <h4 className="subtitle2">袖部分バリエーション</h4>
                  <ul>
                    <li><img src="/images/yanefuki/b2b1s.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b2b2s.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b2b3s.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b2b4s.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b2b5s.jpg" loading="lazy" alt="" /></li>
                  </ul>

                  <h4 className="subtitle2">棟部分バリエーション</h4>

                  <ul>
                    <li><img src="/images/yanefuki/b2c1s.jpg" loading="lazy" alt="" /></li>
                    <li><img src="/images/yanefuki/b2c2s.jpg" loading="lazy" alt="" /></li>
                  </ul>

                </div>
              </div>

              <div className="yanefuki_content mt50">
                <h3 className="title">(株)鶴弥 スーパートライ110 TYPEⅠ</h3>
                <div className="yanefuki_inner">
                <div className="yanefuki_l">
                    <p><img src="../images/yanefuki/yanefuki_img28.jpg" loading="lazy" alt="" /></p>
                  </div>
                  <div className="yanefuki_r">
                    <h4 className="noto_san bold orange txt160p_pc mb3p">スッキリとしたフォルムが洋風住宅にぴったりの屋根材</h4>
                    <p><span className="noto_san bold txt140p">三州瓦</span><br />製品保証在り</p>
                    <p className='noto_san bold txt160p'>切妻 ㎡＝9,300円～<br />
                    寄棟 ㎡＝9,800円～</p>
                  </div>
                </div>
                <div className="inner">
                <h3 className="subtitle">商品の特徴 <br className="smp" />スーパートライ110 TYPEⅠ</h3>

                <h4 className="subtitle2">1. 耐風性能</h4>
                <div className="flex-wrap">
                <div className="yanefuki_l1"><img src="/images/yanefuki/qlt-1.jpg" loading="lazy" alt="" /></div>
                <div className="yanefuki_r1">
                    下の瓦のハイパーアームが上の瓦のアンダーロックをがっちりと押さえ込むため耐風性能が発揮されます。台風時などの強風に威力を発揮するオリジナルな工夫です。愛知県三河窯業試験場で行った「瓦屋根標準設計施工ガイドライン」にもとづいた耐風圧性能試験にて、強さも証明されています。
                  </div>
                </div>
                <h4 className="subtitle2">2. 耐震性能</h4>
                <div className="flex-wrap">
                <div className="yanefuki_l1"><img src="/images/yanefuki/qlt-2.jpg" loading="lazy" alt="" /></div>
                <div className="yanefuki_r1">
                    独立行政法人都市再生機構の三次元振動台にて試験を実施。阪神大震災の地震波においても瓦のズレ、破損、脱落はなく震度７クラスの地震でも脱落しないことが証明されました。震度７クラスの大地震でもハイパーアームが耐震性を発揮します。
                  </div>
                </div>
                <h4 className="subtitle2">3. 耐久性能</h4>
                <div className="flex-wrap">
                <div className="yanefuki_l1"><img src="/images/yanefuki/qlt-3.jpg" loading="lazy" alt="" /></div>
                <div className="yanefuki_r1">
                    自然素材である粘土とゆう薬を高温(1130℃)で焼き締めた、表面がガラス質の被膜で覆われた陶器質の屋根材です。変色や変質が起こりにくく、時間が経過しても美しい外観を保つことができます。セメント系屋根材のように、表面が塗料による着色でないため、塗り替えの必要はありません。何十年も、雨風、暑さ、寒さにさらされ続ける屋根。そんな過酷な条件下でも決して品質・性能が低下することのない耐久性を持っています。
                  </div>
                </div>
                <h4 className="subtitle2">4. 防水性能</h4>
                <div className="flex-wrap">
                <div className="yanefuki_l1"><img src="/images/yanefuki/qlt-4.jpg" loading="lazy" alt="" /></div>
                <div className="yanefuki_r1">
                    当社製品は設計開発時に愛知県三河窯業試験場にて漏水試験（圧力箱試験）を実施しています。最も厳しい条件である降水量240mm/h、圧力1470Pa(風速49m/秒)で検証し、安心な防水性能をお届けします。
                  </div>
                </div>
                <h4 className="subtitle2">5. 施工性能</h4>
                <div className="flex-wrap">
                <div className="yanefuki_l1"><img src="/images/yanefuki/qlt-5.png" loading="lazy" alt="" /></div>
                <div className="yanefuki_r1">
                    ロック構造でありながら普通の施工方法と変わりなく施工が可能です。(働き長さの調節可能。)7形釘、クリップを使う耐風工法に比べて、施工性は大幅に向上しています。
                  </div>
                </div>
                <h4 className="subtitle2">6. 太陽光発電システム</h4>
                <div className="flex-wrap">
                <div className="yanefuki_l1"><img src="/images/yanefuki/qlt-6.png" loading="lazy" alt="" /></div>
                <div className="yanefuki_r1">
                  省エネに係る取り組みとして注目を集めている太陽光発電システムについても取り組んでいます。
                  </div>
                </div>


                </div>
              </div>

              <div className="yanefuki_content mt50">
                <h3 className="title">(株)丸惣 ニューセラECO</h3>
                <div className="yanefuki_inner">
                  <div className="yanefuki_l">
                    <p><img src="../images/yanefuki/yanefuki_img29.jpg" loading="lazy" alt="" /></p>
                  </div>
                  <div className="yanefuki_r">
                    <h4 className="noto_san bold orange txt160p mb3p">和風にも洋風にも合う柔らかなイメージの屋根材</h4>
                    <p><span className="noto_san bold txt140p">石州瓦</span><br />製品保証在り</p>
                    <p className='noto_san bold txt160p'>㎡＝9,000円～</p>
                  </div>
                </div>
                <div className="inner">
                  <h3 className="subtitle">商品の特徴 <br className="smp" />ニューセラECO</h3>
                  <img src="/images/yanefuki/newcera_01.jpg" loading="lazy" alt="" />

                  <p className="bold txt140p_pc">屋根の軽量化・システム化を図るとともに、施工現場でのゼロミッションを実現するための多くの機能を兼ね備えたこれからの時代を先取りする新しいＳ瓦です</p>
                  
                  <h4 className="subtitle2">大判設計</h4>
                  
                  <p>従来のS形は1坪あたり49枚必要でしたが、ニューセラＥＣＯは1坪あたりの必要枚数が47枚です。平板タイプと同様の働き長さで従来のS形と比べて重量を10％削減、高いコストパフォーマンスを実現しました。</p>
                  
                  <h4 className="subtitle2">カット瓦工法　-オプション-</h4>
                  
                  <p>カット[プレプレカット]瓦は4.5寸と５寸の２パターンに対応してます。<br />
                  専用工場で加工した部材を供給するこにより、現場でのカット作業を無くすことで施工スピードの向上、危険作業の軽減、騒音・粉塵・残材を大幅に軽減することが可能になる環境にやさしいエコロジー瓦です</p>
                  
                  <div className="flex-wrap">
                  <div className="yanefuki_l2">
                    <h4 className="subtitle2">どんなモジュールにも対応</h4>
                      <p>高い２段水止めとかぶり幅を大きくしすることで、働き幅の10㎜スライド調整を実現。<br />
                      最小パターンの左右２種類のカット瓦で屋根勾配4.5寸と5寸に対応が可能になり、メータモジジュールにも対応が可能になりました。</p>
                    </div>
                    <div className="yanefuki_r2">
                      <img src="/images/yanefuki/newcera_02.jpg" loading="lazy" alt="" />
                    </div>
                  </div>

                  <h4 className="subtitle2">一体袖</h4>
                      <p>瓦前面にスロープつけることで屋根勾配に近い瓦勾配の実現し雨水の流れをスムーズにするとともに、小口を直角に切り落すことで、水を跳ね飛ばし、逆巻き侵入を防ぎます。</p>

                  <div className="flex-wrap">
                  <div className="yanefuki_l2">
                      <h4 className="subtitle2 mt0">防水性能</h4>
                      <p>流れ方向に高い水返し、サイドに二段の水返しを設け、逆水を強力にハネ返します。</p>
                      <h4 className="subtitle2">防災性能</h4>
                      <p>従来のおしりの部分に設けた重なり板で、瓦同士を押さえ込む合体構造。風による瓦の浮き上がりを阻止。特に左下からの逆風に、大きな威力を発揮します。</p>
                    </div>
                    <div className="yanefuki_r2">
                      <img src="/images/yanefuki/newcera_03.jpg" loading="lazy" alt="" />
                    </div>
                  </div>
                  
                <h4 className="subtitle2">カラーバリエーション</h4>

                <ul>
                  <li><img src="/images/yanefuki/newcera_04.jpg" loading="lazy" alt="" /></li>
                  <li><img src="/images/yanefuki/newcera_05.jpg" loading="lazy" alt="" /></li>
                  <li><img src="/images/yanefuki/newcera_06.jpg" loading="lazy" alt="" /></li>
                  <li><img src="/images/yanefuki/newcera_07.jpg" loading="lazy" alt="" /></li>
                </ul>

                <p className="mt35"><span className="bold noto_san">ミックスカラー　Mixture Color</span><br />
                ミックスカラーはナチュラルなベースカラーに、さらに2色のパウダースプレーを施した多色瓦です。無地の瓦と彩色瓦が製造工程で適度に混ざり合い、シックで奥行きのある表現を演出します</p>

                <ul>
                  <li><img src="/images/yanefuki/newcera_08.jpg" loading="lazy" alt="" /></li>
                  <li><img src="/images/yanefuki/newcera_09.jpg" loading="lazy" alt="" /></li>
                  <li><img src="/images/yanefuki/newcera_10.jpg" loading="lazy" alt="" /></li>
                </ul>

                <p><span className="bold noto_san orange">ミックスカラーに関するご注意</span><br />
                自然な風合いを生みだす為に、吹き付けのない無地を意図的に混入してあります。<br />
                吹き付けは製造段階で自動でランダムに行うため、吹き付け量や位置にばらつきがあり指定することはできません</p>
                  
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
      title="屋根葺替え"
      description="外壁塗装・屋根塗装なら広島の佐々木塗装の屋根葺替えページです。"
    />
    
  </>
)

export default yanefuki
