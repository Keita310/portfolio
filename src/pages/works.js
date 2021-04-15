import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import ExternalImage from "../components/external-image"

const Works = ({ data }) => (
  <Layout>
    <SEO title="実績" />
    
    <div className="eyecatch">
      <h1>実績</h1>
      <Image filename="works_bg.png" alt="実績" />
    </div>

    <div className="d-flex flex-wrap mt-4">
    {data.allMicrocmsWorks.edges.map(edge => {
       const work = edge.node
       return (
         <div className="w-50 p-3 work-box" key={work.worksId}>
           <Link className="card" to={'/works/' + work.worksId}>
             <div className="card-img-top eyecatch-wrap">
               <ExternalImage
                 url={work.pc_eyecatch}
               />
             </div>
             <div className="card-body bg-light content">
               <div className="card-title font-weight-bold text-lg">{work.name}</div>

               <div className="card-text" dangerouslySetInnerHTML={{
                 __html: work.description
               }}></div>
               {/*<p className="card-text text-sm">{work.catch_copy}</p>*/}
             </div>
           </Link>
         </div>
       )
    })}
    </div>

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
