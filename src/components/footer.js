import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import FooterNav from "../components/footer-nav"

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
    <>
      <FooterNav />
      <footer>
        <ul>
          <li>
            <Link to="/">
              <span>プロフィール</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </li>
          <li>
            <Link to="/skills/">
              <span>スキル</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </li>
          <li>
            <Link to="/works/">
              <span>実績</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </li>
          <li>
            <Link to="/contact/">
              <span>お問い合わせ</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </li>
        </ul>
        <p>Copyright &copy; {title} All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default Footer
