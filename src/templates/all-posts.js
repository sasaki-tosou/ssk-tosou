import React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Sideb from "../components/Sideb";

import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const MAX_CONTENT_LENGTH = 50; // 最大文字数を設定してください
const postsPerPage = 30; // 1ページあたりの記事数
const pagePadding = 1; // 前後に追加で表示するページ数

const AllPosts = ({ data, pageContext }) => {
  dayjs.locale("ja");
  const { allMicrocmsBlog } = data;
  const { numPages, currentPage, startPage, endPage } = pageContext;
  const posts = allMicrocmsBlog.edges;
  const postsPerPage = pageContext.postsPerPage || 30;
  const stripHTML = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };
  return (
    <Layout>
      <div id="mainimage-sub" className="blog">
        <div id="mainimage-inner"></div>
      </div>
      <div id="breadcrumb">
        <ul
          className="breadcrumb__list"
          itemscope
          itemtype="https://schema.org/BreadcrumbList"
        >
          <li
            className="breadcrumb__item"
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <Link to="/" itemprop="item">
              <span itemprop="name">ホーム</span>
            </Link>
            <meta itemprop="position" content="1" />
          </li>
          <li
            className="breadcrumb__item"
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <Link to="/blog/" itemprop="item">
              <span itemprop="name">ブログ</span>
            </Link>
            <meta itemprop="position" content="2" />
          </li>
        </ul>
      </div>
      <section id="sub-page">
        <div className="main-content">
          <div className="main_b">
            <h2 class="page_title01 mt0">ブログ</h2>

            <div className="kiji_list">
              {posts.map(({ node }) => (
                <div className="kiji_box" key={node.blogId}>
                  {node.mainimage ? (
                    <div className="kiji_thumb">
                      <a href={"/posts/" + node.blogId + "/"}>
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
                    <div className="kiji_thumb">
                      <a href={"/posts/" + node.blogId + "/"}>
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
                  <div className="kiji_txt">
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
                    <a href={"/posts/" + node.blogId + "/"}>{node.title}</a>

                    {stripHTML(node.body).length > MAX_CONTENT_LENGTH
                      ? stripHTML(node.body).substring(0, MAX_CONTENT_LENGTH) +
                        "..."
                      : stripHTML(node.body)}

                    <ul className="cat_list">
                      <li className={`${node.category.id}`}>
                        <Link to={`/category/${node.category.id}`}>
                          {node.category.name}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* ページネーションリンク */}
            {numPages > 1 && (
              <div className="pager">
                {currentPage > 1 && (
                  <Link
                    to={
                      currentPage === 2 ? `/blog/` : `/blog/${currentPage - 1}`
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
                        to={pageNumber === 1 ? `/blog/` : `/blog/${pageNumber}`}
                        className={pageNumber === currentPage ? "current" : ""}
                      >
                        {pageNumber}
                      </Link>
                    );
                  }
                  return null;
                })}

                {currentPage < numPages && (
                  <Link to={`/blog/${currentPage + 1}`}>次へ &gt;&gt;</Link>
                )}
              </div>
            )}
          </div>
          <aside className="side_b">
            <Sideb />
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <body id="pagetop" className="blogpage" />
      <Seo title="ブログ記事一覧" />
    </>
  );
};

export const query = graphql`
  query ($limit: Int, $skip: Int) {
    allMicrocmsBlog(
      limit: $limit
      skip: $skip
      sort: { date: DESC }
      filter: {
        category: { id: { nin: ["tosou-arekore", "omoide", "now-working"] } }
      }
    ) {
      edges {
        node {
          blogId
          title
          date
          mainimage {
            url
          }
          body
          category {
            name
            id
          }
        }
      }
    }
  }
`;

export default AllPosts;
