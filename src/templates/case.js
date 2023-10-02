import React from "react";
import { graphql } from "gatsby";
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

const PostPage = ({ data }) => {
  dayjs.locale("ja");
  const { microcmsCase } = data; // フィールド名を修正

  return (
    <>
      <Layout>
        <div id="mainimage-sub" className="case">
          <div id="mainimage-inner"></div>
        </div>

        <section id="sub-page">
          <div className="main-content">
            <article className="main_b">
              <h2 className="page_title01 mt0">施工事例</h2>
              <h3 className="page_title03 center">{data.microcmsCase.title}</h3>
              <p className="date">
                更新日：
                <time
                  dateTime={dayjs
                    .utc(data.microcmsCase.date)
                    .tz("Asia/Tokyo")
                    .format("YYYY-MM-DDTHH:mm:ss")}
                >
                  {dayjs
                    .utc(data.microcmsCase.date)
                    .tz("Asia/Tokyo")
                    .format("YYYY/MM/DD")}
                </time>
              </p>

              <div className="case_box">
                {data.microcmsCase.maeImg ? (
                  <div className="case_box_l">
                    <p className="case_title2">before</p>
                    <img
                      src={data.microcmsCase.maeImg.url + "?fm=webp"}
                      width={370}
                      height={277}
                      alt={data.microcmsCase.title + "サムネイル画像"}
                      loading="lazy"
                    />
                  </div>
                ) : null}
                {data.microcmsCase.atoImg ? (
                  <div className="case_box_r">
                    <p className="case_title2">after</p>
                    <img
                      src={data.microcmsCase.atoImg.url + "?fm=webp"}
                      width={370}
                      height={277}
                      alt={data.microcmsCase.title + "サムネイル画像"}
                      loading="lazy"
                    />
                  </div>
                ) : null}
              </div>

              <table className="case_table">
                <tbody>
                  <tr>
                    <th>施工内容</th>
                    <td
                      dangerouslySetInnerHTML={{
                        __html: `${data.microcmsCase.casetxt}`,
                      }}
                    />
                  </tr>
                  <tr>
                    <th>工期</th>
                    <td>{data.microcmsCase.casePeriod}</td>
                  </tr>
                  <tr>
                    <th>説明</th>
                    <td
                      dangerouslySetInnerHTML={{
                        __html: `${data.microcmsCase.caseDescription}`,
                      }}
                    />
                  </tr>
                </tbody>
              </table>

              <p class="center">
                <a href={`/case/`} className="bt02">
                  一覧に戻る
                </a>
              </p>
            </article>
            <aside className="side_b">
              <Sideb />
            </aside>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const Head = ({ data }) => (
  <>
    <body id="pagetop" className="blogpage" />
    <Seo />
  </>
);

export const query = graphql`
  query ($id: String) {
    microcmsCase(id: { eq: $id }) {
      title
      category {
        id
        name
      }
      caseId
      date
      id
      casetxt
      eyecatch {
        url
      }
      maeImg {
        url
      }
      atoImg {
        url
      }
      casePeriod
      caseDescription
    }
  }
`;

export default PostPage;
