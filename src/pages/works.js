import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Works = ({ data }) => (
  <Layout>
    <SEO title="実績" />
    <h1>実績</h1>

    {data.allMicrocmsWorks.edges.map(edge => {
       const work = edge.node
       return (
         <div key={work.worksId}>
           <Link to={'/works/' + work.worksId}>{work.name}</Link>
         </div>
       )
    })}

  </Layout>
)

export const query = graphql`
  {
    allMicrocmsWorks {
      edges {
        node {
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
          sp_eyecatch{
            url
          }
          catch_copy
          description
          content
        }
      }
    }
  }
`

export default Works
