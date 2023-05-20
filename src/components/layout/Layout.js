import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './Layout.module.scss'
import useSiteMetadata from '../../utils/useSiteMetadata'

const Layout = ({ pageTitle, children }) => {
  const data = useSiteMetadata()

  return (
    <div className={container}>
      <header className={siteTitle}>{data.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/'>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to='/about'>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
