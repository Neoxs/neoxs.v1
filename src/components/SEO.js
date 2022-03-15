import React from "react"
import Helmet from "react-helmet"

import config from "../utils/config"

const SEO = ({ page }) => {
  return (
    <Helmet>
      <meta name="description" content={config.description} />
      <meta name="image" content={config.siteLogo} />

      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:title" content={config.siteTitle} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content={config.siteLogo} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={config.siteTitle} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={config.siteLogo} />
      <title>{page ? `${page} | ${config.siteTitle}` : config.siteTitle}</title>
    </Helmet>
  )
}

export default SEO
