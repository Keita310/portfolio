import React from 'react'
import GatsbyImage from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

/**
 * node化した外部画像を表示するコンポーネント
 * (引数に外部URLを渡す)
 * 使用例：<ExternalImage url={url} default="true" />
 *
 */
export default (props) => {
  let url = props.url;

  // nullは空で返す
  if (props.url === null) {
    return '';
  }

  // urlがオブジェクトだったら
  if (props.url.url !== undefined) {
    url = props.url.url
  }

  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          # 全ファイルから外部画像だけ抽出
          filter: {fields: {externalImage: {eq: true}}}
        ) {
          edges {
            node {
              childImageSharp {
                resolutions {
                  ...GatsbyImageSharpResolutions
                }
              }
              id
              fields {
                link
              }
            }
          }
        }
      }
    `
  )

  if (props.default === undefined || props.default !== true) {
    // nodeに対象画像がなかったらそのまま外部URLを使用する
    const target = data.allFile.edges.find(edge => edge.node.fields.link === url)
    if (target && target.node.childImageSharp) {
      return (<GatsbyImage resolutions={target.node.childImageSharp.resolutions} />)
    }
  }
  return (<img className="default" alt="" src={url} />)
}
