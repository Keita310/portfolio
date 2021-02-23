import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => {
  const skill = data.microcmsSkill
  return (
    <Layout>
    <div>{skill.name}</div>
    </Layout>
  )
}

export const query = graphql`
  query($name: String!) {
    microcmsSkill(
      name: { eq: $name }
    ) {
      id
      name
    }
  }
`