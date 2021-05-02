/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from "./sidebar"
import Footer from "./footer"
import FooterNav from "../components/footer-nav"
// cssインポート
import './../styles/tailwind.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/layout.scss'

/*
<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
*/

const Layout = ({ location, children }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <Col className="p-0">
            <div className="contents-area">{children}</div>
            <FooterNav location={location} />
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
