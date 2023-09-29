import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Sideb from "../components/Sideb";
import { Pagination } from "../components/Pagination";

import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const MAX_CONTENT_LENGTH = 100; // 最大文字数を設定してください
const PAGES_PER_GROUP = 5; // 1グループに表示するページ数
const PAGE_PADDING = 1; // 前後に追加で表示するページ数

const categoryPage = ({ data, pageContext }) => {
  const { allMicrocmsBlog } = data;
  const { numPages, currentPage, categoryId } = pageContext;

  dayjs.locale("ja");

  const blog = allMicrocmsBlog.edges;
  const totalCount = allMicrocmsBlog.totalCount;

  let startPage = Math.max(1, currentPage - PAGE_PADDING);
  let endPage = Math.min(numPages, currentPage + PAGE_PADDING);

  // ページ番号が最小値未満にならないように調整
  if (endPage - startPage + 1 < PAGES_PER_GROUP) {
    if (startPage === 1) {
      endPage = startPage + PAGES_PER_GROUP - 1;
    } else {
      startPage = endPage - PAGES_PER_GROUP + 1;
    }
  }

  console.log("numPages:", numPages);
  console.log("currentPage:", currentPage);
  console.log("startPage:", startPage);
  console.log("endPage:", endPage);

  return (
    <>
      <Header />

      <Layout>
        <div id="mainimage-sub">
          <div id="mainimage-inner"></div>
        </div>
        <section id="sub-page">
          <div className="main-content">
            <div className="flex-wrap">
              <div className="main_b">
                {blog.map(({ node }) => (
                  <div className="column_box" key={node.blogId}>
                    {node.mainimage ? (
                      <div className="column_img">
                        <a href={`/blog/${node.category.id}/${node.blogId}/`}>
                          <img
                            src={node.mainimage.url + "?fm=webp"}
                            width={370}
                            height={277}
                            alt={node.title + "サムネイル画像"}
                            loading="lazy"
                          />
                        </a>
                      </div>
                    ) : (
                      <div className="column_img">
                        <a href={`/blog/${node.category.id}/${node.blogId}/`}>
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
                        {dayjs
                          .utc(node.date)
                          .tz("Asia/Tokyo")
                          .format("YYYY/MM/DD")}
                      </time>
                      <a href={`/blog/${node.category.id}/${node.blogId}/`}>
                        {node.title}
                      </a>
                      {stripHTML(node.body).length > MAX_CONTENT_LENGTH
                        ? stripHTML(node.body).substring(
                            0,
                            MAX_CONTENT_LENGTH
                          ) + "..."
                        : stripHTML(node.body)}
                    </div>
                  </div>
                ))}

                <Pagination
                  currentPage={currentPage}
                  numPages={numPages}
                  basePath={`/blog/${categoryId}`}
                  startPage={startPage}
                  endPage={endPage}
                  totalCount={totalCount}
                />
              </div>
              <aside className="side_b">
                <Sideb />
              </aside>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

// HTMLタグを削除する関数
function stripHTML(html) {
  if (html === null) {
    return ""; // もし html が null の場合、空文字列を返す
  }
  return html.replace(/<[^>]*>/g, "");
}

export const query = graphql`
  query ($categoryId: String, $limit: Int, $skip: Int) {
    allMicrocmsBlog(
      filter: { category: { id: { eq: $categoryId } } }
      limit: $limit
      skip: $skip
      sort: { date: DESC }
    ) {
      edges {
        node {
          id
          blogId
          title
          date
          category {
            id
            name
          }
          mainimage {
            url
          }
          body
        }
      }
      totalCount
    }
  }
`;

export const Head = () => {
  return (
    <>
      <body className="blog" />
      <Seo />
    </>
  );
};

export default categoryPage;
