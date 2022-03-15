import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"

import config from "../utils/config"

export default function NotFound() {
  return (
    <>
      <Helmet title={`404 | ${config.siteTitle}`} />
      <Layout>
          <h2>404 😵‍💫</h2>
          <p>This probably was a mistake.</p>
      </Layout>
    </>
  )
}
