import React from 'react'

import { graphql,Link } from "gatsby"

import Seo from "../../components/Seo"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import Sideb from '../../components/sideb'
import Pagetop from '../../components/Pagetop'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck,faAngleRight,faChevronUp } from "@fortawesome/free-solid-svg-icons"

const index = () => {
  return (
    <>
      <Header />
    
    <Layout>
        <Seo title="お問い合わせ" />    
        
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/contact/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <Pagetop />

        <div id="mainimage-sub" className='contact'>
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
          </ul>
        </div>

        <section id="sub-page">
            <div className='main-content'>
                
                <h2 className="page_title01 mt0">お問い合わせ</h2>
                <p><span className="must">必須</span>は必ずご入力ください。</p>
                
                <form action="https://ssgform.com/s/WLQ2NgMqEU46" method="post">
                    <div style={{display: 'none'}}><input type="text" name="wana" /></div>
                        <table className="form">
                            <tbody>
                                <tr>
                                    <th>お名前<span className="must">必須</span></th>
                                    <td>
                                        姓 <input type="text" name="姓" size={15} required="required" />　名 <input type="text" name="名" size={15} required="required" /></td>
                                </tr>
                                <tr>
                                    <th>フリガナ</th>
                                    <td>セイ <input type="text" name="セイ" size={15} />　メイ <input type="text" name="メイ" size={15} /></td>
                                </tr>
                                <tr>
                                    <th>メールアドレス<span className="must">必須</span></th>
                                    <td><input type="email" data-type="email" name="email" size={40} required="required" /></td>
                                </tr>
                                <tr>
                                    <th>確認用メールアドレス<span className="must">必須</span></th>
                                    <td><input type="email" data-type="email" name="確認用メールアドレス" data-post-disable={1} size={40} required="required" /></td>
                                </tr>
                                <tr>
                                    <th>電話番号<span className="must">必須</span></th>
                                    <td><input type="tel" data-type="tel" name="電話番号" required="required" size={25} /></td>
                                </tr>
                                <tr>
                                    <th>郵便番号<span className="must">必須</span></th>
                                    <td><input type="text" name="郵便番号" size={30} required="required" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>都道府県<span className="must">必須</span></th>
                                    <td>
                                        <select name="都道府県" required="required">
                                        <option value selected="selected">【選択して下さい】</option>
                                        <optgroup label="北海道・東北地方">
                                            <option value="北海道">北海道</option>
                                            <option value="青森県">青森県</option>
                                            <option value="岩手県">岩手県</option>
                                            <option value="秋田県">秋田県</option>
                                            <option value="宮城県">宮城県</option>
                                            <option value="山形県">山形県</option>
                                            <option value="福島県">福島県</option>
                                        </optgroup>
                                        <optgroup label="関東地方">
                                            <option value="栃木県">栃木県</option>
                                            <option value="群馬県">群馬県</option>
                                            <option value="茨城県">茨城県</option>
                                            <option value="埼玉県">埼玉県</option>
                                            <option value="東京都">東京都</option>
                                            <option value="千葉県">千葉県</option>
                                            <option value="神奈川県">神奈川県</option>
                                        </optgroup>
                                        <optgroup label="中部地方">
                                            <option value="山梨県">山梨県</option>
                                            <option value="長野県">長野県</option>
                                            <option value="新潟県">新潟県</option>
                                            <option value="富山県">富山県</option>
                                            <option value="石川県">石川県</option>
                                            <option value="福井県">福井県</option>
                                            <option value="静岡県">静岡県</option>
                                            <option value="岐阜県">岐阜県</option>
                                            <option value="愛知県">愛知県</option>
                                        </optgroup>
                                        <optgroup label="近畿地方">
                                            <option value="三重県">三重県</option>
                                            <option value="滋賀県">滋賀県</option>
                                            <option value="京都府">京都府</option>
                                            <option value="大阪府">大阪府</option>
                                            <option value="兵庫県">兵庫県</option>
                                            <option value="奈良県">奈良県</option>
                                            <option value="和歌山県">和歌山県</option>
                                        </optgroup>
                                        <optgroup label="四国地方">
                                            <option value="徳島県">徳島県</option>
                                            <option value="香川県">香川県</option>
                                            <option value="愛媛県">愛媛県</option>
                                            <option value="高知県">高知県</option>
                                        </optgroup>
                                        <optgroup label="中国地方">
                                            <option value="鳥取県">鳥取県</option>
                                            <option value="島根県">島根県</option>
                                            <option value="岡山県">岡山県</option>
                                            <option value="広島県">広島県</option>
                                            <option value="山口県">山口県</option>
                                        </optgroup>
                                        <optgroup label="九州・沖縄地方">
                                            <option value="福岡県">福岡県</option>
                                            <option value="佐賀県">佐賀県</option>
                                            <option value="長崎県">長崎県</option>
                                            <option value="大分県">大分県</option>
                                            <option value="熊本県">熊本県</option>
                                            <option value="宮崎県">宮崎県</option>
                                            <option value="鹿児島県">鹿児島県</option>
                                            <option value="沖縄県">沖縄県</option>
                                        </optgroup>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>ご住所<span className="must">必須</span></th>
                                    <td>
                                        <div>
                                        <input type="text" name="市区町村" placeholder="市区町村" required="required" size={50} />
                                        <p>例）広島市安佐北区三入東</p>
                                        </div>
                                        <div>
                                        <input type="text" name="丁目番地" placeholder="丁目番地" required="required" size={50} />
                                        <p>例）４丁目２－８</p>
                                        </div>
                                        <div>
                                        <input type="text" name="建物名" placeholder="建物名・号室" size={50} />
                                        <p>例）ササキトソウ１０１号</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>ご希望のご返答方法<span className="must">必須</span></th>
                                    <td><label><input type="radio" name="ご返答方法" required="required" value="メール" /> メール</label><label><input type="radio" name="ご返答方法" required="required" value="お電話" /> お電話</label></td>
                                </tr>
                                <tr>
                                    <th>具体的な内容</th>
                                    <td><textarea name="具体的な内容" style={{width: '100%', height: '200px'}} rows={10} cols={60} /></td>
                                </tr>
                                <tr>
                                    <th>お問い合わせ内容</th>
                                    <td><label><input type="radio" name="お問い合わせ内容" value="ご質問・ご相談" /> ご質問・ご相談</label><label><input type="radio" name="お問い合わせ内容" value="無料お見積り" /> 無料お見積り</label></td>
                                </tr>
                                <tr>
                                    <th>建物の種類</th>
                                    <td>
                                        <label><input type="radio" name="建物の種類" value="一戸建て" /> 一戸建て</label>
                                        <label><input type="radio" name="建物の種類" value="アパート" /> アパート</label>
                                        <label><input type="radio" name="建物の種類" value="マンション" /> マンション</label>
                                        <label><input type="radio" name="建物の種類" value="店舗" /> 店舗</label>
                                        <label><input type="radio" name="建物の種類" value="その他" /> その他</label>
                                        <input type="text" name="建物の種類(その他)" placeholder="その他" size={20} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>建物の築年数</th>
                                    <td>
                                        <label><input type="radio" name="建物の築年数" value="５年未満" /> ５年未満</label>
                                        <label><input type="radio" name="建物の築年数" value="５年～１０年" /> ５年～１０年</label>
                                        <label><input type="radio" name="建物の築年数" value="１０年～１５年" /> １０年～１５年</label>
                                        <label><input type="radio" name="建物の築年数" value="１５年～２０年" /> １５年～２０年</label>
                                        <label><input type="radio" name="建物の築年数" value="２０年以上" /> ２０年以上</label>
                                        <label><input type="radio" name="建物の築年数" value="その他" /> その他</label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>ご興味があるもの、<br className="pc" />
                                        ご検討しているもの</th>
                                    <td>
                                        <label><input type="radio" name="ご興味があるもの" value="外壁塗装" /> 外壁塗装</label>
                                        <label><input type="radio" name="ご興味があるもの" value="屋根塗装" /> 屋根塗装</label>
                                        <label><input type="radio" name="ご興味があるもの" value="その他" /> その他</label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>工事をお考えの期間</th>
                                    <td>
                                        <label><input type="radio" name="工事期間" value="すぐに取り掛かりたい" /> すぐに取り掛かりたい</label>
                                        <label><input type="radio" name="工事期間" value="３ヶ月以内" /> ３ヶ月以内</label>
                                        <label><input type="radio" name="工事期間" value="１年以内" /> １年以内</label>
                                        <label><input type="radio" name="工事期間" value="未定" /> 未定</label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>ご予算</th>
                                    <td>
                                        <input type="text" name="ご予算" placeholder="ご予算" size={20} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <ul className="bt_list">
                            <li><button type="submit" className="form_bt">送信する</button></li>
                            <li><button type="reset" className="form_bt">リセット</button></li>
                        </ul>
                </form>
                    
                <h3 className="page_title01">送信前にご確認ください</h3>
                <ul className="check_list2">
                    <li><FontAwesomeIcon icon={faCheck} /><a href="/privacy/">個人情報のお取扱いについてはこちらをご覧下さい</a></li>
                    <li><FontAwesomeIcon icon={faCheck} />各項目にご記入のうえ、「送信」ボタンを押してください。</li>
                    <li><FontAwesomeIcon icon={faCheck} /><span className="must">必須</span>のついた項目は必須項目となっております。</li>
                    <li><FontAwesomeIcon icon={faCheck} />お問い合わせ内容により、ご回答するのに日数を要する場合もございますので、予めご了承ください。</li>
                    <li><FontAwesomeIcon icon={faCheck} />お問い合わせ完了後、弊社より自動返信メールが送られてきます。もし、自動返信メールが届かないという場合がございましたら、入力されたメールアドレスに誤りがある可能性がございますので、一度お電話いただければ幸いです。</li>
                </ul>

            </div>
        </section>
    </Layout>
    </>
  )
}

export default index
