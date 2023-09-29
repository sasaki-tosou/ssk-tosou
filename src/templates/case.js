import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
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
        <div className="main pb">
          <article className="main">
            {data.microcmsCase.eyecatch ? (
              <div className="eyecatch_img">
                <img
                  src={data.microcmsCase.eyecatch.url + "?fm=webp"}
                  width={370}
                  height={277}
                  alt={data.microcmsCase.title + "サムネイル画像"}
                  loading="lazy"
                />
              </div>
            ) : null}

            <h3 className="line">
              {data.microcmsCase.title}
              <br />
              <span className="date">
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
              </span>
            </h3>

            <div
              className="post_main_box"
              dangerouslySetInnerHTML={{
                __html: `${data.microcmsCase.casetxt}`,
              }}
            />

            <p class="cen">
              <a href={`/${microcmsCase.category.id}/`} className="bt01">
                一覧に戻る
              </a>
            </p>
          </article>
        </div>
      </Layout>
    </>
  );
};

export const Head = ({ data }) => (
  <>
    <Seo title2={data.microcmsCase.title} />
  </>
);

export const query = graphql`
  query ($id: String) {
    microcmsCase(id: { eq: $id }) {
      title
      caseId
      date
      category {
        name
        id
      }
      eyecatch {
        url
      }

      casePeriod
      casetxt
      caseDescription
    }
  }
`;

export default PostPage;
