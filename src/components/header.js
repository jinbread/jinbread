import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 640,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#333333',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h4>
    </div>
  </div>
)

export default Header
