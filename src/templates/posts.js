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
export const query = graphql`
  query ($blogId: String) {
    microcmsBlog(id: { eq: $blogId }) {
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
    }
  }
`;
const PostPage = ({ data }) => {
  dayjs.locale("ja");
  const { microcmsBlog } = data; // フィールド名を修正
  console.log(data.microcmsBlog);
  return (
    <>
      <Layout>
        <div id="mainimage-sub" className="yane-cover">
          <div id="mainimage-inner"></div>
        </div>

        <section id="sub-page">
          <div className="main-content">
            <article className="main">
              <div
                className="post_main_box"
                dangerouslySetInnerHTML={{ __html: data.microcmsBlog.body }}
              />
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const Head = ({ data }) => (
  <>
    <Seo />
  </>
);

export default PostPage;
