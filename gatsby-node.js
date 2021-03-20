/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { createRemoteFileNode } = require('gatsby-source-filesystem');

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

// 外部URL画像のファイルノードを作る
exports.sourceNodes = async ({ actions, createNodeId, cache, store, getNodes }) => {

  // microcmsの画像URL配列を作る
  // sourceNodesライフサイクルでGraphQLnoのAPIを呼べない為getNode()で直接取得
  let imgUrls = [];
  const nodes = getNodes()
  for (const i in nodes) {
    const node = nodes[i]
    if (node.pc_eyecatch !== undefined && node.pc_eyecatch.url.length > 0) {
      imgUrls.push(node.pc_eyecatch.url);
    }
    if (node.sp_eyecatch !== undefined && node.sp_eyecatch.url.length > 0) {
      imgUrls.push(node.sp_eyecatch.url);
    }
    if (node.icon !== undefined && node.icon.url.length > 0) {
      imgUrls.push(node.icon.url);
    }
  }

  // 対象外部画像URLをループ
  await Promise.all(imgUrls.map(async imgUrl => {

    // 外部画像用ファイルノード作成
    const fileNode = await createRemoteFileNode({
      url: imgUrl,
      cache,
      store,
      createNode: actions.createNode,
      createNodeId: createNodeId,
    });

    // 外部画像用識別子を付与
    await actions.createNodeField({
      node: fileNode,
      name: 'externalImage',
      value: true,
    });

    // メタ情報に画像のURLを付与
    await actions.createNodeField({
      node: fileNode,
      name: 'link',
      value: imgUrl,
    });

    return fileNode;
  }));
}
