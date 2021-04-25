import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Image from "./image"

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
      {/* スマホハンバーガーメニュー */}
      <input type="checkbox" id="toggle_flag" />
      <div className="sp-fixed-header">
        <div>
          <Link to="/">{meta.title}</Link>
        </div>
        <label for="toggle_flag">
          <div className="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="mask"></div>
        </label>
      </div>

      <div className="logo pb-4">
        <Link to="/">
          <Image filename="logo.png" alt={meta.title} />
        </Link>
      </div>
      <div className="menu-wrap">
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
      </div>
    </nav>
  )
}

export default Sidebar
