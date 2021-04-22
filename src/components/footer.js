import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const title = site.siteMetadata?.title

  return (
    <footer>
      <ul>
        <li><Link to="/">プロフィール</Link></li>
        <li><Link to="/skills/">スキル</Link></li>
        <li><Link to="/works/">実績</Link></li>
        <li><Link to="/contact/">お問い合わせ</Link></li>
      </ul>
      <p>Copyright &copy; {title} All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
