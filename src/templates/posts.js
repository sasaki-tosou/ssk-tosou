import React from 'react';
import { graphql, Link } from 'gatsby';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Sideb from '../components/Sideb';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');

const PostPage = ({ data }) => {
  dayjs.locale('ja');
  const { microcmsBlog } = data; // フィールド名を修正
  console.log(data.microcmsBlog);

  let pageTitle = ''; // ページの見出しを格納する変数

  // カテゴリに応じて見出しを設定
  if (data.microcmsBlog.category.id === 'tosou-arekore') {
    pageTitle = (
      <>
        <h2 className='page_title01 mt0'>外壁塗装をする前に知っておきたい塗装アレコレ</h2>
        <h3 className='page_title03 center'>{data.microcmsBlog.title}</h3>
      </>
    );
  } else if (data.microcmsBlog.category.id === 'now-working') {
    pageTitle = (
      <>
        <h2 className='page_title01 mt0'>ただいま施工中</h2>
        <h3 className='page_title03 center'>{data.microcmsBlog.title}</h3>
      </>
    );
  } else if (data.microcmsBlog.category.id === 'omoide') {
    pageTitle = (
      <>
        <h2 className='page_title01 mt0'>思い出のかべ</h2>
        <h3 className='page_title03 center'>{data.microcmsBlog.title}</h3>
      </>
    );
  } else if (data.microcmsBlog.category.id === 'arekore-blog') {
    pageTitle = (
      <>
        <h2 className='page_title01 mt0'>アレコレブログ</h2>
        <h3 className='page_title03 center'>{data.microcmsBlog.title}</h3>
      </>
    );
  } else {
    pageTitle = (
      <>
        <h2 className='page_title01 mt0'>ブログ</h2>
        <p className='center bold orange'>{data.microcmsBlog.category.name}</p>
        <h3 className='page_title03 center'>{data.microcmsBlog.title}</h3>
      </>
    );
  }

  return (
    <>
      <Layout>
        <div id='mainimage-sub' className='blog'>
          <div id='mainimage-inner'></div>
        </div>
        <div id='breadcrumb'>
          <ul className='breadcrumb__list' itemScope itemType='https://schema.org/BreadcrumbList'>
            <li className='breadcrumb__item' itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
              <Link to='/' itemProp='item'>
                <span itemProp='name'>ホーム</span>
              </Link>
              <meta itemProp='position' content='1' />
            </li>
            <li className='breadcrumb__item' itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
              <Link to={`/category/${data.microcmsBlog.category.id}/`} itemProp='item'>
                <span itemProp='name'>{data.microcmsBlog.category.name}</span>
              </Link>
              <meta itemProp='position' content='2' />
            </li>
            <li className='breadcrumb__item' itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
              <span itemProp='name'>{data.microcmsBlog.title}</span>

              <meta itemProp='position' content='3' />
            </li>
          </ul>
        </div>

        <section id='sub-page'>
          <div className='main-content'>
            <article className='main_b'>
              {pageTitle}

              <p className='date'>
                更新日：
                <time dateTime={dayjs.utc(data.microcmsBlog.date).tz('Asia/Tokyo').format('YYYY-MM-DDTHH:mm:ss')}>{dayjs.utc(data.microcmsBlog.date).tz('Asia/Tokyo').format('YYYY/MM/DD')}</time>
              </p>

              <ul className='cat_list'>
                <li className={`${data.microcmsBlog.category.id}`}>
                  <Link to={`/category/${data.microcmsBlog.category.id}`}>{data.microcmsBlog.category.name}</Link>
                </li>
              </ul>

              <div className='post_main_box'>
                {data.microcmsBlog.body !== null && data.microcmsBlog.body !== undefined && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.microcmsBlog.body,
                    }}
                  />
                )}

                {data.microcmsBlog.arekore_txt !== null && data.microcmsBlog.arekore_txt !== undefined && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.microcmsBlog.arekore_txt,
                    }}
                  />
                )}
              </div>

              <p class='center'>
                <a href={`/category/${microcmsBlog.category.id}/`} className='bt01'>
                  一覧に戻る
                </a>
              </p>
            </article>
            <aside className='side_b'>
              <Sideb />
            </aside>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const Head = ({ data }) => {
  const catName = data.microcmsBlog.category.id; // ページのカテゴリーを取得
  const pageName = data.microcmsBlog.title;

  const body = data.microcmsBlog.body;
  const arekore_txt = data.microcmsBlog.arekore_txt;

  // bodyとarekore_txtのどちらかが存在する場合、それをdescriptionに設定
  const description = body || arekore_txt || ''; // どちらもnullの場合は空文字列にする

  // HTMLタグを取り除く
  const plainText = description.replace(/<[^>]+>/g, '');

  // 改行文字をスペースに置き換え、80文字までのテキストを設定
  const maxTextLength = 80;
  const limitedDescription = plainText.replace(/\n/g, ' ').length > maxTextLength ? plainText.replace(/\n/g, ' ').substring(0, maxTextLength) + '...' : plainText.replace(/\n/g, ' ');

  return (
    <>
      <body id='pagetop' className={`blogpage ${catName}`} />
      <Seo title2={`${pageName}｜外壁塗装なら広島の佐々木塗装`} description={limitedDescription} />
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    microcmsBlog(id: { eq: $id }) {
      id
      title
      category {
        id
        name
      }
      date
      blogId
      body
      mainimage {
        url
      }
      arekore_txt
    }
  }
`;

export default PostPage;
