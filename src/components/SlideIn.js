import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

const SlideInElement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 300; // スクロールしきい値（ピクセル単位）

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className={`slide-in-element ${isVisible ? "visible" : ""}`}>
      
      <ul>
        <li>
          <Link to="/toiawase/" className="mail_bt">
            <img
              src="/images/mail_icon.svg"
              width={45}
              height={45}
              className="opa"
              alt=""
            />
            <span>お問い合わせ</span>
          </Link>
        </li>
        <li>
          <a
            href="https://lin.ee/HR9JB00"
            className="line_bt"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <img
              src="/images/line_icon.svg"
              width={45}
              height={45}
              className="opa"
              alt=""
            />
            <span>ライン見積もり</span>
          </a>
        </li>
        <li className="tub">
          <a
            href="https://twitter.com/sasakipaint1116"
            aria-label="佐々木塗装のTwitter"
            target="_blank"
            rel="noopenner noreferrer"
            className="tw_bt"
          >
            <img
              src="/images/tw_icon.png"
              width={25}
              height={25}
              className="opa"
              alt=""
            />
          </a>
        </li>
        <li className="tub">
          <a
            href="https://www.facebook.com/profile.php?id=100063604571277"
            aria-label="佐々木塗装のFacebook"
            target="_blank"
            rel="noopenner noreferrer"
            className="fb_bt"
          >
            <img
              src="/images/fb_icon.png"
              width={25}
              height={25}
              className="opa"
              alt=""
            />
          </a>
        </li>
        <li className="tub">
          <a
            href="https://www.instagram.com/sasaki.ryoko/"
            aria-label="佐々木塗装のinstagram"
            target="_blank"
            rel="noopenner noreferrer"
            className="insta_bt"
          >
            <span className="insta">
              <img
                src="/images/insta_icon.svg"
                width={25}
                height={25}
                className="opa"
                alt=""
              />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SlideInElement;
