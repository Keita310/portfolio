import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Image from "./image"
// import { Container } from 'react-bootstrap'

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          urls {
            github
            qiita
            twitter
          }
        }
      }
    }
  `)
  const meta = data.site.siteMetadata;

  return (
    <nav className="sidebar">
      <div className="logo">
        <Link to="/">
          <Image filename="logo.png" alt={meta.title} />
        </Link>
      </div>
      <ul>
        <li><Link to="/">プロフィール</Link></li>
        <li><Link to="/skills/">スキル</Link></li>
        <li><Link to="/works/">実績</Link></li>
        <li><Link to="/contact/">お問い合わせ</Link></li>
      </ul>
      <div className="d-flex justify-content-around">
        <div className="flex-fill p-3">
          <a href={meta.urls.twitter} target="_blank">
            <Image filename="twitter_icon.png" alt="twitter" />
          </a>
        </div>
        <div className="flex-fill p-3">
          <a href={meta.urls.github} target="_blank">
            <Image filename="github_icon.png" alt="github" />
          </a>
        </div>
        <div className="flex-fill p-3">
          <a href={meta.urls.qiita} target="_blank">
            <Image filename="qiita_icon.png" alt="qiita" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
