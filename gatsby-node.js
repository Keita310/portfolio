/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

// 動的に生成したいページをgraphqlで取得し、createPageでページ生成する
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve('./src/templates/work.jsx')
  const result = await graphql(`
    {
      allMicrocmsWorks {
        edges {
          node {
            worksId
          }
        }
      }
    }
  `)

  result.data.allMicrocmsWorks.edges.forEach(edge => {
    const work = edge.node
    createPage({
      path: '/works/' + work.worksId,
      component: template,
      context: {
        id: work.worksId
      }
    })
  })
}
