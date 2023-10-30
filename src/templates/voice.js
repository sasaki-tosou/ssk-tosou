import React from 'react';
import { graphql } from 'gatsby';
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

const VoicePage = ({ data }) => {
  dayjs.locale('ja');

  return (
    <>
      <Layout>
        <div id='mainimage-sub' className='voice'>
          <div id='mainimage-inner'></div>
        </div>

        <section id='sub-page'>
          <div className='main-content'>
            <article className='main_b'>
              <h2 className='page_title01 mt0'>お客様の声</h2>

              <div className='user_voice_box'>
                <h3 className='voice_title'>{data.microcmsCase.title}</h3>
                <p className='date'>
                  更新日：
                  <time dateTime={dayjs.utc(data.microcmsCase.date).tz('Asia/Tokyo').format('YYYY-MM-DDTHH:mm:ss')}>{dayjs.utc(data.microcmsCase.date).tz('Asia/Tokyo').format('YYYY/MM/DD')}</time>
                </p>
                <div className='flex-wrap'>
                  <div className='kansya_img'>{data.microcmsCase.maeImg && <img src={data.microcmsCase.maeImg.url + '?fm=webp'} alt={data.microcmsCase.title + 'サムネイル画像'} loading='lazy' />}</div>
                  <div className='kansya_img'>{data.microcmsCase.atoImg && <img src={data.microcmsCase.atoImg.url + '?fm=webp'} alt={data.microcmsCase.title + 'サムネイル画像'} loading='lazy' />}</div>
                </div>

                {data.microcmsCase.casetxt !== null && (
                  <>
                    <h4 className='voice_subtitle'>お客様からのコメント</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${data.microcmsCase.casetxt}`,
                      }}
                    />
                  </>
                )}

                {data.microcmsCase.caseDescription !== null && (
                  <>
                    <h4 className='voice_subtitle'>オススメポイント</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${data.microcmsCase.caseDescription}`,
                      }}
                    />
                  </>
                )}
              </div>

              <p class='center'>
                <a href={`/voice/`} className='bt02'>
                  一覧に戻る
                </a>
              </p>
            </article>
            <aside className='side_b'>
              <Sideb />
            </aside>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const Head = ({ data }) => {
  const pageName = data.microcmsCase.title;
  const maxTextLength = 80;

  const body = data.microcmsCase.casetxt;
  const truncatedBody = body ? body.replace(/<[^>]+>/g, '') : null;
  const limitedBody = truncatedBody && truncatedBody.length > maxTextLength ? truncatedBody.slice(0, maxTextLength) + '...' : truncatedBody;

  return (
    <>
      <body id='pagetop' className='blogpage' />
      <Seo title2={`${pageName}｜外壁塗装なら広島の佐々木塗装`} description={limitedBody} />
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    microcmsCase(id: { eq: $id }, category: { id: { in: "voice" } }) {
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

export default VoicePage;
