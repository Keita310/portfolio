import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import ExternalImage from "../components/external-image"
import SkillStar from "../components/skill-star"
const moment = require("moment");

const Skills = ({ location, data }) => (
  <Layout location={location}>
    <SEO title="スキル" />

    <div className="eyecatch">
      <h1>スキル</h1>
      <Image filename="skill_bg.png" alt="スキル" />
    </div>

    {data.allMicrocmsSkillCategory.edges.map(edge => {
      const category = edge.node
      return (
        <div key={category.skillCategoryId}>
          <h2>{category.name}</h2>

          <div className="d-flex flex-wrap">
            {category.skills.map(skill => (
              <div className="skill-box" key={skill.id}>
                <div className="card">
                  <div className="d-flex align-items-center border-bottom bg-light p-2">
                    <div className="icon">
                      <ExternalImage url={skill.icon.url} />
                    </div>
                    <div>
                      <div className="title">{skill.name}</div>
                      <div><SkillStar level={skill.level} /></div>
                      <div className="text-secondary">{skill.experience_type} {getYearsOfExperience(skill)}</div>
                    </div>
                  </div>
                  <div
                    className="card-body content"
                    dangerouslySetInnerHTML={{
                      __html: skill.comment
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    })}

  </Layout>
)

// 経験年数を返す
const getYearsOfExperience = function (skill) {
  if (skill.experience) {
    return skill.experience + '年'
  }
  if (skill.start_year) {
    return moment().diff(moment(skill.start_year), 'years') + '年'
  }
  return '- 年'
}

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
