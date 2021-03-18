import { Link } from "gatsby"
import React from "react"
// import { Container } from 'react-bootstrap'

const Sidebar = () => (
    <>
      <nav>
        <ul>
          <li><Link to="/">プロフィール</Link></li>
          <li><Link to="/skills/">スキル</Link></li>
          <li><Link to="/works/">実績</Link></li>
          <li><Link to="/contact/">お問い合わせ</Link></li>
        </ul>
      </nav>
    </>
)

export default Sidebar
