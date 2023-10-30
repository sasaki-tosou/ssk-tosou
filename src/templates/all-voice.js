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

const postsPerPage = 10; // 1ページあたりの記事数
const pagePadding = 1; // 前後に追加で表示するページ数

const AllVoice = ({ data, pageContext }) => {
  dayjs.locale('ja');
  const { allMicrocmsCase } = data;
  const { numPages, currentPage, startPage, endPage } = pageContext;
  const posts = allMicrocmsCase.edges;
  const postsPerPage = pageContext.postsPerPage || 10;

  return (
    <Layout>
      <div id='mainimage-sub' className='voice'>
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
            <Link to='/voice/' itemProp='item'>
              <span itemProp='name'>お客様の声</span>
            </Link>
            <meta itemProp='position' content='2' />
          </li>
        </ul>
      </div>

      <section id='sub-page'>
        <div className='main-content'>
          <div className='main_b'>
            <h2 class='page_title01 mt0'>お客様の声</h2>

            {posts.map(({ node }) => (
              <div className='user_voice_box'>
                <h3 className='voice_title'>{node.title}</h3>
                <p className='date'>
                  更新日：
                  <time dateTime={dayjs.utc(node.date).tz('Asia/Tokyo').format('YYYY-MM-DDTHH:mm:ss')}>{dayjs.utc(node.date).tz('Asia/Tokyo').format('YYYY/MM/DD')}</time>
                </p>
                <div className='flex-wrap'>
                  <div className='kansya_img'>{node.maeImg && <img src={node.maeImg.url + '?fm=webp'} alt={node.title + 'サムネイル画像'} loading='lazy' />}</div>
                  <div className='kansya_img'>{node.atoImg && <img src={node.atoImg.url + '?fm=webp'} alt={node.title + 'サムネイル画像'} loading='lazy' />}</div>
                </div>

                {node.casetxt && (
                  <>
                    <h4 className='voice_subtitle'>お客様からのコメント</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${node.casetxt}`,
                      }}
                    />
                  </>
                )}

                {node.caseDescription && (
                  <>
                    <h4 className='voice_subtitle'>オススメポイント</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${node.caseDescription}`,
                      }}
                    />
                  </>
                )}
              </div>
            ))}

            {numPages > 1 && posts.length > 1 && (
              <div className='pager'>
                {currentPage > 1 && <Link to={currentPage === 2 ? `/voice` : `/voice/${currentPage - 1}`}>&lt;&lt; 前へ</Link>}
                {/* ページャーの数字を表示 */}
                {Array.from({ length: numPages }, (_, i) => {
                  const pageNumber = startPage + i; // ページャーの数字を計算
                  if (pageNumber <= endPage) {
                    return (
                      <Link key={`pagination-link${pageNumber}`} to={pageNumber === 1 ? `/voice` : `/voice/${pageNumber}`} className={pageNumber === currentPage ? 'current' : ''}>
                        {pageNumber}
                      </Link>
                    );
                  }
                  return null;
                })}
                {currentPage < numPages && <Link to={`/voice/${currentPage + 1}`}>次へ &gt;&gt;</Link>}
              </div>
            )}
          </div>
          <aside className='side_b'>
            <Sideb />
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export const Head = ({ pageContext }) => {
  const currentPage = pageContext.currentPage; // 現在のページ数を取得
  return (
    <>
      <body id='pagetop' className='blogpage' />
      <Seo
        title2={currentPage === 1 ? 'お客様の声一覧｜外壁塗装なら広島の佐々木塗装' : `お客様の声一覧｜外壁塗装なら広島の佐々木塗装｜ページ${currentPage}`}
        description={currentPage === 1 ? '外壁塗装なら広島の佐々木塗装｜お客様の声一覧' : `外壁塗装なら広島の佐々木塗装｜お客様の声一覧｜ページ${currentPage}`}
      />
    </>
  );
};

export const query = graphql`
  query ($limit: Int, $skip: Int) {
    allMicrocmsCase(limit: $limit, skip: $skip, sort: { date: DESC }, filter: { category: { id: { in: "voice" } } }) {
      edges {
        node {
          caseId
          title
          date
          eyecatch {
            url
          }
          casetxt
          maeImg {
            url
          }
          atoImg {
            url
          }
          caseDescription
          casePeriod
        }
      }
    }
  }
`;

export default AllVoice;
