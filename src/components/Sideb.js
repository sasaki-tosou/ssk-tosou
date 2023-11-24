import React from 'react';
import { Link } from 'gatsby';

const Sideb = () => {
  return (
    <>
      <ul className='center'>
        <li>
          <Link to='/leak/'>
            <img src='/images/side01.jpg' width={264} height={264} loading='lazy' alt='雨漏り診断' />
          </Link>
        </li>
        <li>
          <Link to='/drone/'>
            <img src='/images/side02.jpg' width={264} height={264} loading='lazy' alt='ドローンによる調査・診断を始めました' />
          </Link>
        </li>
        <li>
          <Link to='/category/omoide/'>
            <img src='/images/side03.jpg' width={264} height={264} loading='lazy' alt='思い出のかべ' />
          </Link>
        </li>
        <li>
          <a href='https://lin.ee/HR9JB00' target='_blank' rel='noopener noreferrer'>
            <img src='/images/side04.jpg' width={264} height={264} loading='lazy' alt='お気軽にLINEで簡単お問い合わせ' />
          </a>
        </li>
        <li>
          <Link to='/karucera_works/'>
            <img src='/images/karucera_bn.jpg' width={264} height={92} loading='lazy' alt='カルセラ' />
          </Link>
        </li>
        <li>
          <a href='https://www.chord.or.jp/' target='_blank' rel='noopener noreferrer'>
            <img src='/images/smiledial_logo.png' width={264} height={101} loading='lazy' alt='住まいるダイヤル' />
          </a>
        </li>
        <li>
          <a href='https://www.j-anshin.co.jp/' target='_blank' rel='noopener noreferrer'>
            <img src='/images/side_ansin.svg' width={231} height={63} loading='lazy' alt='株式会社住宅あんしん保証' />
          </a>
        </li>
        <li>
          <img src='/images/side06.jpg' width={264} height={88} loading='lazy' alt='外装リフォームの教科書' />
        </li>
        <li>
          <a href='https://www.mokutokyo.jp/' target='_blank' rel='noopener noreferrer'>
            <img src='/images/side07.jpg' width={264} height={106} loading='lazy' alt='（一社）木造住宅塗装リフォーム協会' />
          </a>
        </li>
        <li>
          <Link to='/aeon_credit/'>
            <img src='/images/side05.jpg' width={250} height={131} loading='lazy' alt='便利な分割ローン' />
          </Link>
        </li>
        <li>
          <img src='/images/side09.jpg' width={264} height={336} loading='lazy' alt='選べる支払方法' />
        </li>
      </ul>
    </>
  );
};

export default Sideb;
