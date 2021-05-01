import React from 'react'
import {useStaticQuery, graphql, Link} from "gatsby"

/**
 * 
 *
 */
export default (props) => {

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



  console.log(props.prev)
  console.log(props.next)

  return (
    <nav className="footer-nav">
      <div><Link to="/">次へ</Link></div>
      <div><Link to="/">前へ</Link></div>
    </nav>
  )
}
