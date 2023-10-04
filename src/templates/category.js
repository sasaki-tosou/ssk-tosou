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
const PAGES_PER_GROUP = 5; // 1グループに表示するページ数
const PAGE_PADDING = 1; // 前後に追加で表示するページ数

const CategoryPage = ({ data, pageContext }) => {
  dayjs.locale("ja");
  const { allMicrocmsBlog } = data;
  const { category, numPages, currentPage, startPage, endPage } = pageContext;
  const posts = allMicrocmsBlog.edges;
  const stripHTML = (html) => {
    if (typeof document !== "undefined") {
      const tmp = document.createElement("div");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }
    return html; // SSR中にはhtmlをそのまま返す
  };

  let pageTitle = "";

  const blogEdges = data.allMicrocmsBlog.edges; // ブログ記事のリスト

  // カテゴリに応じて見出しを設定
  if (blogEdges.length > 0) {
    const firstBlog = blogEdges[0].node; // 最初のブログ記事を取得
    const categoryId = firstBlog.category.id; // カテゴリ ID を取得

    if (categoryId === "tosou-arekore") {
      pageTitle = (
        <>
          <h2 className="page_title01 mt0">外壁塗装コラム</h2>
          <h3 className="page_title03 center">
            外壁塗装をする前に知っておきたい塗装アレコレ
          </h3>
        </>
      ); // カテゴリが "tosou-arekore" の場合の見出し
    } else if (categoryId === "now-working") {
      pageTitle = (
        <>
          <h2 className="page_title01 mt0">ただいま施工中</h2>
        </>
      ); // カテゴリが "now-working" の場合の見出し
    } else if (categoryId === "omoide") {
      pageTitle = (
        <>
          <h2 className="page_title01 mt0">思い出のかべ</h2>
        </>
      ); // カテゴリが "omoide" の場合の見出し
    } else if (categoryId === "arekore-blog") {
      pageTitle = (
        <>
          <h2 className="page_title01 mt0">アレコレブログ</h2>
        </>
      ); // カテゴリが "arekore-blog" の場合の見出し
    } else {
      pageTitle = (
        <>
          <h2 className="page_title01 mt0">ブログ</h2>
          <p className="center bold orange">{firstBlog.category.name}</p>
          <h3 className="page_title03 center">{firstBlog.title}</h3>
        </>
      ); // それ以外の場合のデフォルトの見出し
    }
  }

  return (
    <>
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
              <Link to={`/category/${category.categoryId}/`} itemprop="item">
                <span itemprop="name">{category.name}</span>
              </Link>
              <meta itemprop="position" content="2" />
            </li>
          </ul>
        </div>

        <section id="sub-page">
          <div className="main-content">
            <div className="main_b">
              {pageTitle}
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
                      {typeof window !== "undefined" &&
                      stripHTML(node.body).length > MAX_CONTENT_LENGTH
                        ? stripHTML(node.body).substring(
                            0,
                            MAX_CONTENT_LENGTH
                          ) + "..."
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
              {numPages > 1 && (
                <div className="pager">
                  {currentPage > 1 && (
                    <Link
                      to={
                        currentPage === 2
                          ? `/category/${category.categoryId}`
                          : `/category/${category.categoryId}/${
                              currentPage - 1
                            }`
                      }
                    >
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
                          to={
                            pageNumber === 1
                              ? `/category/${category.categoryId}`
                              : `/category/${category.categoryId}/${pageNumber}`
                          }
                          className={
                            pageNumber === currentPage ? "current" : ""
                          }
                        >
                          {pageNumber}
                        </Link>
                      );
                    }
                    return null;
                  })}
                  {currentPage < numPages && (
                    <Link
                      to={`/category/${category.categoryId}/${currentPage + 1}`}
                    >
                      次へ &gt;&gt;
                    </Link>
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
    </>
  );
};

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
          mainimage {
            url
          }
          body
          date
          category {
            id
            name
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => {
  const catName = data.allMicrocmsBlog.edges[0].node.category.id; // ページのタイトルを取得
  const catTitle = data.allMicrocmsBlog.edges[0].node.category.name;
  return (
    <>
      <body id="pagetop" className={`blogpage ${catName}`} />
      <Seo
        title2={`${catTitle}の記事一覧｜外壁塗装なら広島の佐々木塗装`}
        description={`外壁塗装なら広島の佐々木塗装｜${catTitle}の記事一覧`}
      />
    </>
  );
};

export default CategoryPage;
