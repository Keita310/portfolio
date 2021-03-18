/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "./sidebar"
// cssインポート
import './../styles/tailwind.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/layout.scss'

/*
<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
*/


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <img src="" alt={data.site.siteMetadata?.title || `Title`} />
      <div className="d-flex">
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
