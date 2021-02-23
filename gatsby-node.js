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
  const postTemplate = path.resolve('./src/templates/post.jsx')
  const result = await graphql(`
    {
      allMicrocmsSkill(
        sort: { fields: [createdAt], order: DESC }
      ) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  result.data.allMicrocmsSkill.edges.forEach(edge => {
    const node = edge.node
    createPage({
      path: '/post/' + node.name,
      component: postTemplate,
      context: {
        name: node.name
      }
    })
  })
}
