import React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const MAX_CONTENT_LENGTH = 100; // 最大文字数を設定してください
const postsPerPage = 10; // 1ページあたりの記事数
const pagePadding = 1; // 前後に追加で表示するページ数

const AllCase = ({ data, pageContext }) => {
  dayjs.locale("ja");
  const { allMicrocmsCase } = data;
  const { numPages, currentPage, startPage, endPage } = pageContext;
  const posts = allMicrocmsCase.edges;
  const postsPerPage = pageContext.postsPerPage || 10;

  return (
    <Layout>
      <div id="eyecatch-sub" className="yane-cover">
        <div id="eyecatch-inner"></div>
      </div>

      <section id="sub-page">
        <div className="main-content">
          <h3 className="main_title">ブログ</h3>

          {posts.map(({ node }) => (
            <div className="column_box" key={node.caseId}>
              {node.eyecatch ? (
                <div className="column_img">
                  <a href={"/case/" + node.caseId + "/"}>
                    <img
                      src={node.eyecatch.url + "?fm=webp"}
                      width={370}
                      height={277}
                      alt={node.title + "サムネイル画像"}
                      loading="lazy"
                    />
                  </a>
                </div>
              ) : (
                <div className="column_img">
                  <a href={"/case/" + node.caseId + "/"}>
                    <img
                      src="/img/alternative-image.png"
                      width={370}
                      height={277}
                      alt={node.title + "の代替画像"}
                      loading="lazy"
                    />
                  </a>
                </div>
              )}
              <div className="column_txt">
                <time
                  dateTime={dayjs
                    .utc(node.date)
                    .tz("Asia/Tokyo")
                    .format("YYYY-MM-DDTHH:mm:ss")}
                >
                  {dayjs.utc(node.date).tz("Asia/Tokyo").format("YYYY/MM/DD")}
                </time>
                <a href={"/case/" + node.caseId + "/"}>{node.title}</a>
                {stripHTML(node.casetxt).length > MAX_CONTENT_LENGTH
                  ? stripHTML(node.casetxt).substring(0, MAX_CONTENT_LENGTH) +
                    "..."
                  : stripHTML(node.casetxt)}
              </div>
            </div>
          ))}

          {/* ページネーションリンク */}
          {numPages > 1 && (
            <div className="pager">
              {currentPage > 1 && (
                <Link
                  to={
                    currentPage === 2 ? `/cases` : `/cases/${currentPage - 1}`
                  }
                >
                  &lt;&lt; 前へ
                </Link>
              )}

              {/* ページャーの数字を表示 */}
              {Array.from({ length: numPages }, (_, i) => {
                const pageNumber = startPage + i; // ページャーの数字を計算
                if (pageNumber <= endPage) {
                  return (
                    <Link
                      key={`pagination-link${pageNumber}`}
                      to={pageNumber === 1 ? `/cases` : `/cases/${pageNumber}`}
                      className={pageNumber === currentPage ? "current" : ""}
                    >
                      {pageNumber}
                    </Link>
                  );
                }
                return null;
              })}

              {currentPage < numPages && (
                <Link to={`/cases/${currentPage + 1}`}>次へ &gt;&gt;</Link>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

// HTMLタグを削除する関数
function stripHTML(html) {
  if (html === undefined || html === null) {
    return ""; // もし html が undefined または null の場合、空文字列を返す
  }
  return html.replace(/<[^>]*>/g, "");
}

export const Head = ({ data }) => {
  return (
    <>
      <body id="pagetop" />
      <Seo title="ブログ記事一覧" />
    </>
  );
};

export const query = graphql`
  query ($limit: Int, $skip: Int) {
    allMicrocmsCase(limit: $limit, skip: $skip, sort: { date: DESC }) {
      edges {
        node {
          caseId
          title
          date
          eyecatch {
            url
          }
          casetxt
        }
      }
    }
  }
`;

export default AllCase;
