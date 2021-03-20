import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalImage from "../components/external-image"

const Skills = ({ data }) => (
  <Layout>
    <SEO title="スキル" />
    <h1>スキル</h1>

    {data.allMicrocmsSkillCategory.edges.map(edge => {
       const category = edge.node
       return (
         <div key={category.skillCategoryId}>
           <div>{category.name}</div>
           <div>
             {category.skills.map(skill => (
               <div key={skill.id}>
                 <span>{skill.name}</span>
                 <ExternalImage url={skill.icon.url} />
                 <span>{skill.experience_type}</span>
                 <span>{skill.experience}</span>
                 <span>{skill.start_year}</span>
                 <span>{skill.level}</span>
                 <span>{skill.comment}</span>
               </div>
             ))}
           </div>
         </div>
       )
    })}

  </Layout>
)

export const query = graphql`
  {
    allMicrocmsSkillCategory {
      edges {
        node {
          id
          name
          skillCategoryId
          skills {
            id
            name
            icon {
              url
            }
            experience_type
            experience
            start_year
            level
            comment
          }
        }
      }
    }
  }
`

export default Skills
