import React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Sideb from "../components/Sideb";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const Blog = ({ data }) => {
  dayjs.locale("ja");
  const { microcmsBlog } = data; // フィールド名を修正

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
              <article className="main_b">
                <h2 className="page_title01 mt0">ブログ</h2>
                <p className="center bold orange">
                  {data.microcmsBlog.category.name}
                </p>

                <h3 className="page_title03 center">
                  {data.microcmsBlog.title}
                </h3>
                <p>
                  <span className="date">
                    <time
                      dateTime={dayjs
                        .utc(data.microcmsBlog.date)
                        .tz("Asia/Tokyo")
                        .format("YYYY-MM-DDTHH:mm:ss")}
                    >
                      {dayjs
                        .utc(data.microcmsBlog.date)
                        .tz("Asia/Tokyo")
                        .format("YYYY年MM月DD日")}
                    </time>
                  </span>
                </p>
                <ul className="cat_list">
                  <li className="blog-sekou-blog">
                    <a
                      href={"/blog/" + data.microcmsBlog.category.id + "/"}
                      className="txt12"
                    >
                      {data.microcmsBlog.category.name}
                    </a>
                  </li>
                </ul>

                {data.microcmsBlog && data.microcmsBlog.mainimage ? (
                  <div className="post_img">
                    <img
                      src={data.microcmsBlog.mainimage.url + "?fm=webp"}
                      width={370}
                      height={277}
                      alt={data.microcmsBlog.title + "サムネイル画像"}
                      loading="lazy"
                    />
                  </div>
                ) : null}

                <div
                  dangerouslySetInnerHTML={{
                    __html: `${data.microcmsBlog.body}`,
                  }}
                />

                <p className="center">
                  <Link to="/blog/" className="bt01">
                    一覧へ戻る
                  </Link>
                </p>
              </article>
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

export const Head = ({ data }) => (
  <>
    <body className="blog" />
    <Seo title2={data.microcmsBlog.title} />
  </>
);

export const query = graphql`
  query ($id: String) {
    microcmsBlog(id: { eq: $id }) {
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
`;

export default Blog;
