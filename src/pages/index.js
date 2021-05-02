import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import ExternalImage from "../components/external-image"

const IndexPage = ({ data }) => {
  const profile = data.allMicrocmsProfile.edges[0].node
  return (
    <Layout>
      <SEO title="プロフィール" />

      <div className="profile-eyecatch">
        <div className="image">
          <Image filename="profile_bg.png" alt="プロフィール" />
        </div>
        <div className="text">
          <span>- {profile.sub_title} -</span>
          <h1>{profile.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: profile.description
            }}
          ></div>
        </div>
      </div>

      <div className="profile-contents">
        {profile.contents.map(content => {
          return (
            <div key={content.title}>
              <div className="image">
                <ExternalImage
                  url={content.image}
                />
              </div>
              <div className="text">
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
      </div>
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
          sub_title
          title
        }
      }
    }
  }
`

export default IndexPage
