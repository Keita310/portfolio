import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "../components/image"
import ExternalImage from "../components/external-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// ページ定義
const pages = [
  {
    path: '/',
    title: 'プロフィール',
    img: 'profile_bg.png'
  },
  {
    path: '/skills/',
    title: 'スキル',
    img: 'skill_bg.png'
  },
  {
    path: '/works/',
    title: '実績',
    img: 'works_bg.png'
  },
  {
    path: '/contact/',
    title: 'お問い合わせ',
    img: 'contact_bg.png'
  }
]

// 実績詳細を返す
const worksDetail = function (works, path) {
  for (let i in works) {
    i = Number(i);
    const work = works[i].node
    if (path.indexOf('/works/' + work.worksId) != -1) {
      const prevKey = (i === 0) ? (works.length - 1) : i - 1
      const nextKey = (i === (works.length - 1)) ? 0 : i + 1
      let prev = {
        path: '/works/' + works[prevKey].node.worksId,
        title: '実績：' + works[prevKey].node.name,
        img: works[prevKey].node.pc_eyecatch
      }
      let next = {
        path: '/works/' + works[nextKey].node.worksId,
        title: '実績：' + works[nextKey].node.name,
        img: works[nextKey].node.pc_eyecatch
      }
      if (i === 0) {
        prev = pages[1]
      } else if (i === works.length) {
        next = pages[3]
      }

      return {
        prev: prev,
        next: next,
      }
    }
  }
}

// イメージタグを返す
const image = function (url) {
  if (url === null) {
    return '';
  }
  if (url.url !== undefined) {
    url = url.url
  }
  if (/^http.*$/.test(url)) {
    return (<ExternalImage default={true} url={url} />)
  }
  return (<span><Image filename={url} alt="" /></span>)
}

/**
 * フッター下回遊リンクコンポーネント
 *
 */
export default ({ location }) => {
  const path = location.pathname
  let links = null;

  // 実績の詳細ページの場合
  if (/^\/works\/.*$/.test(path) && path !== '/works/') {
    const works = useStaticQuery(
      graphql`
        query {
          allMicrocmsWorks {
            edges {
              node {
                worksId
                name
                pc_eyecatch {
                  url
                }
              }
            }
          }
        }
      `
    ).allMicrocmsWorks.edges
    links = worksDetail(works, path)

  // 固定ページ
  } else {
    for (let i in pages) {
      i = Number(i);
      if (pages[i].path === path) {
        const prevKey = (i === 0) ? (pages.length - 1) : i - 1
        const nextKey = (i === (pages.length - 1)) ? 0 : i + 1
        links = {
          prev: pages[prevKey],
          next: pages[nextKey]
        }
        break;
      }
    }
  }

  if (!links) {
    return '';
  }

  return (
    <nav className="footer-nav">
      <div>
        <Link to={links.prev.path}>
          <span className="arrow"><FontAwesomeIcon icon={faChevronLeft} /></span>
          <span className="image-wrap">{image(links.prev.img)}</span>
          <span>{links.prev.title}</span>
        </Link>
      </div>
      <div>
        <Link to={links.next.path}>
          <span className="arrow"><FontAwesomeIcon icon={faChevronRight} /></span>
          <span className="image-wrap">{image(links.next.img)}</span>
          <span>{links.next.title}</span>
        </Link>
      </div>
    </nav>
  )
}
