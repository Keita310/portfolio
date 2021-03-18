import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => {
  const work = data.microcmsWorks
  console.log(work)
  return (
    <Layout>
      <div>{work.name}</div>
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
      sp_eyecatch{
        url
      }
      catch_copy
      description
      content
    }
  }
`