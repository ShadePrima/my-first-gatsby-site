// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to='/'>Back to Home</Link>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <p>This is my first gatsby site</p>
    </main>
  )
}

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name='description' content='Your description' />
  </>
)

// Step 3: Export your component
export default AboutPage
