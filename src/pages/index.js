import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    {data.gcms.articles.map((item, key) => (
      <div key={key}>
        <p>{item.title}</p>
        <small>{item.postedDate}</small>
        <div dangerouslySetInnerHTML={{ __html: item.body.html }}></div>
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    gcms {
      articles(orderBy: postedDate_DESC) {
        title
        body {
          html
        }
        postedDate
      }
    }
  }
`
