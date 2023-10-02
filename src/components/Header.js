import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <>
      <header>
        <div id="header">
          <div id="header_inner">
            <h1 className="pc">
              広島外壁塗装なら広島市安佐北区の佐々木塗装
              安心施工、保証付きのアフターサービス。
            </h1>
            <div className="h_box">
              <div className="h_logo_box">
                <Link to="/">
                  <img
                    src="/images/logo.svg"
                    width={300}
                    height={70}
                    loading="lazy"
                    alt="株式会社佐々木塗装"
                  />
                </Link>
              </div>
              <div className="g_nav">
                <ul>
                  <li>
                    <Link to="/">ホーム</Link>
                  </li>
                  <li>
                    <span>メニュー</span>
                    <ul>
                      <li>
                        <Link to="/company/">会社案内</Link>
                      </li>
                      <li>
                        <Link to="/staff/">スタッフ紹介</Link>
                      </li>
                      <li>
                        <Link to="/workflow/">
                          施工の流れ - 広島の外壁塗装なら佐々木塗装
                        </Link>
                      </li>
                      <li>
                        <Link to="/faq/">お客様Q&amp;A</Link>
                      </li>
                      <li>
                        <Link to="/voice/">お客様の声</Link>
                      </li>
                      <li>
                        <Link to="/leak/">雨漏り診断</Link>
                      </li>
                      <li>
                        <Link to="/drone/">ドローン診断</Link>
                      </li>
                      <li>
                        <Link to="/color_simulation/">
                          カラーシミュレーション
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact/">お問い合わせ</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/case/">施工事例</Link>
                  </li>
                  <li>
                    <Link to="/category/omoide/">思い出のかべ</Link>
                  </li>
                  <li>
                    <Link to="/blog/">ブログ</Link>
                  </li>
                  <li>
                    <Link to="/category/arekore-blog/" className="are_img">
                      <img
                        src="/images/sasaki_icon.png"
                        width={80}
                        alt="アレコレブログ"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="h_tel_box">
                <p>お電話でのお問い合わせはこちら</p>
                <p className="tel_no">
                  <a href="tel:0120-116-795" title="お電話でのお問い合わせ">
                    <img
                      src="/images/h_tel_icon.svg"
                      alt=""
                      width={40}
                      height={26}
                      loading="lazy"
                    />
                    0120-116-795
                  </a>
                </p>
                <p>受付時間　9:00～20:00</p>
              </div>
            </div>

            <article className="h_main dis_flex flex_jus_between flex_align_item_center smp">
              <h1 className="h_logo">
                <Link to="/">
                  <img
                    src="/images/logo.svg"
                    width={250}
                    height={58}
                    alt="株式会社佐々木塗装"
                    loading="lazy"
                  />
                </Link>
              </h1>
              <ul className="h_tools dis_flex flex_jus_end">
                <li>
                  <a href="tel:0120-116-795" aria-label="電話で相談する">
                    <img
                      src="/images/h_tel.png"
                      width={44}
                      height={44}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </li>
                <li className="btn_gnav" id="h_menu">
                  <img
                    src="/images/h_menu.png"
                    width={44}
                    height={44}
                    alt=""
                    loading="lazy"
                  />
                </li>
              </ul>

              <input type="checkbox" id="overlay-input" />
              <label htmlFor="overlay-input" id="overlay-button">
                <span></span>
              </label>

              <div id="overlay">
                <div>
                  <ul className="gnav__menu">
                    <li className="gnav__menu__item">
                      <Link to="/">ホーム</Link>
                    </li>
                    <li className="gnav__menu__item">
                      <Link to="/company/">会社案内</Link>
                    </li>
                    <li className="gnav__menu__item">
                      <Link to="/staff/">スタッフ紹介</Link>
                    </li>
                    <li className="gnav__menu__item">
                      <Link to="/blog/">ブログ</Link>
                    </li>
                    <li className="gnav__menu__item">
                      <Link to="/case/">施工事例</Link>
                    </li>
                    <li className="gnav__menu__item">
                      <Link to="/category/omoide/">思い出のかべ</Link>
                    </li>
                    <li className="gnav__menu__item">
                      <Link to="/voice/">お客様の声</Link>
                    </li>
                    <li className="gnav__menu__item">
                      <Link to="/category/arekore-blog/">アレコレブログ</Link>
                    </li>
                  </ul>
                  <ul className="sns_bt">
                    <li>
                      <a
                        href="https://twitter.com/sasakipaint1116"
                        target="_blank"
                        rel="noopenner noreferrer"
                        className="tw_bt"
                      >
                        <img
                          src="/images/tw_icon.png"
                          width={25}
                          height={25}
                          loading="lazy"
                          className="opa"
                          alt="Twitter"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100063604571277"
                        target="_blank"
                        rel="noopenner noreferrer"
                        className="fb_bt"
                        aria-label="Facebook"
                      >
                        <img
                          src="/images/fb_icon.png"
                          width={25}
                          height={25}
                          loading="lazy"
                          className="opa"
                          alt="Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/sasaki.ryoko/"
                        target="_blank"
                        rel="noopenner noreferrer"
                        className="insta_bt"
                        aria-label="instagram"
                      >
                        <span className="insta">
                          <img
                            src="/images/insta_icon.svg"
                            width={25}
                            height={25}
                            loading="lazy"
                            className="opa"
                            alt="instagram"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
