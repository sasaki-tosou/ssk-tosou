import React from 'react';
import { graphql, Link } from 'gatsby';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const MAX_CONTENT_LENGTH = 100; // 最大文字数を設定してください
const PAGES_PER_GROUP = 5; // 1グループに表示するページ数
const PAGE_PADDING = 1; // 前後に追加で表示するページ数

const CategoryPage = ({ data, pageContext }) => {
  dayjs.locale('ja');
  const { allMicrocmsCase } = data; // クエリの変更
  const { category, numPages, currentPage, startPage, endPage } = pageContext;
  const Case = allMicrocmsCase.edges; // クエリの変更

  return (
    <>
      <div id='wrap'>
        <Header />
        
        <Layout>
          <div className="main pb">
            {Case.map(({ node }) => (
              <div className="column_box" key={node.caseId}>
                {node.eyecatch ? (
                  <div className="column_img">
                    <a href={'/case/' + node.caseId + '/'}><img
                      src={node.eyecatch.url + '?fm=webp'}
                      width={370}
                      height={277}
                      alt={node.title + 'サムネイル画像'}
                      loading="lazy"
                    /></a>
                  </div>
                ) : (
                  <div className="column_img">
                    <a href={'/case/' + node.caseId + '/'}><img
                      src="/img/alternative-image.png"
                      width={370}
                      height={277}
                      alt={node.title + 'の代替画像'}
                      loading="lazy"
                    /></a>
                  </div>
                )}
                <div className="column_txt">
                  <time dateTime={dayjs.utc(node.date).tz('Asia/Tokyo').format('YYYY-MM-DDTHH:mm:ss')}>{dayjs.utc(node.date).tz('Asia/Tokyo').format('YYYY/MM/DD')}</time>
                  <a href={'/case/' + node.caseId + '/'}>{node.title}</a>
                  {stripHTML(node.casetxt).length > MAX_CONTENT_LENGTH
                    ? stripHTML(node.casetxt).substring(0, MAX_CONTENT_LENGTH) + '...'
                    : stripHTML(node.casetxt)}
                </div>
              </div>
            ))}


            {numPages > 1 && (
              <div className='pager'>
                {currentPage > 1 && (
                  <Link to={currentPage === 2 ? `/${category.categoryId}` : `/${category.categoryId}/${currentPage - 1}`}>
                    &lt;&lt; 前へ
                  </Link>
                )}

                {/* ページャーの数字を表示 */}
                {Array.from({ length: 5 }, (_, i) => {
                  const pageNumber = startPage + i; // ページャーの数字を計算
                  if (pageNumber <= endPage) {
                    return (
                      <Link
                        key={`pagination-link${pageNumber}`}
                        to={pageNumber === 1 ? `/${category.categoryId}` : `/${category.categoryId}/${pageNumber}`}
                        className={pageNumber === currentPage ? "current" : ""}
                      >
                        {pageNumber}
                      </Link>
                    );
                  }
                  return null;
                })}

                {currentPage < numPages && (
                  <Link to={`/${category.categoryId}/${currentPage + 1}`}>
                    次へ &gt;&gt;
                  </Link>
                )}
              </div>
            )}

          </div>
        </Layout>
        <Footer />
      </div>
    </>
  );
};

// HTMLタグを削除する関数
function stripHTML(html) {
  return html.replace(/<[^>]*>/g, '');
}

export const query = graphql`
query ($categoryId: String, $limit: Int, $skip: Int) {
    allMicrocmsCase(
      filter: {category: {id: {eq: $categoryId}}}
      limit: $limit
      skip: $skip
      sort: {date: DESC}
    ) {
      edges {
        node {
          id
          caseId
          title
          date
          category {
            id
            name
          }
          eyecatch {
            url
          }
          casetxt
        }
      }
    }
  }
`;

export const Head = ({ data }) => {
  const pageTitle = data.allMicrocmsCase.edges[0].node.category.name; // ページのタイトルを取得

  return (
    <>
      <Seo title2={pageTitle} />
    </>
  );
};

export default CategoryPage;
