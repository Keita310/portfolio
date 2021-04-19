import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import Image from "../components/image"
import ExternalImage from "../components/external-image"

const IndexPage = ({ data }) => {
  const profile = data.allMicrocmsProfile.edges[0].node
  return (
    <Layout>
      <SEO title="プロフィール" />

      <div>
        <ExternalImage
          url={profile.eyecatch}
        />
        <div>
          <span>{profile.sub_title}</span>
          <h1>{profile.title}</h1>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: profile.description
          }}
        ></div>
      </div>

      {profile.contents.map(content => {
        return (
          <div className="d-flex" key={content.title}>
            <div>
              <ExternalImage
                url={content.image}
              />
            </div>
            <div>
              <h2>{content.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: content.content
                }}
              ></div>
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    allMicrocmsProfile {
      edges {
        node {
          contents {
            image {
              url
            }
            title
            content
          }
          description
          eyecatch {
            url
          }
          sub_title
          title
        }
      }
    }
  }
`

export default IndexPage
