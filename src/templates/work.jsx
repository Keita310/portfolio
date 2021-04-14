import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import ExternalImage from "../components/external-image"
const moment = require("moment");

export default ({data}) => {
  const work = data.microcmsWorks
  console.log(work)
  return (
    <Layout>

      <div className="work-eyecatch">
        <div className="inner">
          <div className="pc-wrap">
            <Image filename="pc_wrap.png" alt="" />
            <div className="pc-eyecatch">
              <ExternalImage
                url={work.pc_eyecatch}
                alt={work.name}
              />
            </div>
          </div>
          <div className="sp-wrap">
            <Image filename="sp_wrap.png" alt="" />
            <div className="sp-eyecatch">
              <ExternalImage
                url={work.sp_eyecatch}
                alt={work.name}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="work-title">
        <p>{work.catch_copy}</p>
        <h1>{work.name}</h1>
      </div>

      <div className="work-description" dangerouslySetInnerHTML={{
        __html: work.description
      }}></div>

      <h2>概要</h2>
      <dl className="detail-table">
        <dt>サイト名</dt>
        <dd>{work.name}</dd>
        {work.link &&
          <>
            <dt>URL</dt>
            <dd><a href={work.link} target="_blank">{work.link}</a></dd>
          </>
        }
        {work.github &&
          <>
            <dt>github</dt>
            <dd><a href={work.github} target="_blank">{work.github}</a></dd>
          </>
        }
        <dt>担当</dt>
        <dd>{work.assign}</dd>
        <dt>使用した言語など</dt>
        <dd>{work.pg_language}</dd>
        {work.release_date &&
          <>
            <dt>公開時期</dt>
            <dd>{moment(work.release_date).format('YYYY/M/D')}〜</dd>
          </>
        }
      </dl>

      {/* 本文 */}
      <div dangerouslySetInnerHTML={{
        __html: work.content
      }}></div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    microcmsWorks(
      worksId: { eq: $id }
    ) {
      worksId
      name
      link
      github
      assign
      pg_language
      release_date
      pc_eyecatch {
        url
      }
      sp_eyecatch {
        url
      }
      catch_copy
      description
      content
    }
  }
`