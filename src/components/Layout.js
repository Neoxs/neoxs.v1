import React, { useState } from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList, faPen, faRotateLeft } from "@fortawesome/free-solid-svg-icons"

import Footer from "./Footer"
import Helmet from "react-helmet"
import config from "../utils/config"

const Layout = ({ children }) => {
  const [edit, setEdit] = useState(false)

  const handleEdit = () => {
    setEdit(!edit)
  }
  return (
    <>
    <Helmet>
        <link rel="icon" type="image/x-icon" href={config.siteLogo} />
    </Helmet>
      <nav class="navbar">
        <div class="navbar__logo">
          <Link to="/" class="navbar__logo-title">
            NEOXS
          </Link>
        </div>
        <div class="navbar__btn">
          <Link to="/hireme" class="btn-cta">
            Hire me &rarr;
          </Link>
        </div>
      </nav>
      <div class="readme">
        <div class="readme__header">
          <div class="readme__title">
            <FontAwesomeIcon icon={faList} />
            <span class="readme__title-txt">README.md</span>
          </div>
          <div
            class="readme__cta"
            onClick={handleEdit}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "e") handleEdit()
            }}
          >
            {!edit ? <FontAwesomeIcon icon={faPen} /> : <><FontAwesomeIcon icon={faRotateLeft} /> Cancel changes</>}
          </div>
        </div>
        <div class="readme__body">
          <article class="readme__article">
            {!edit ? (
              children
            ) : (
              <p>
                I like your curiosity. Some cool easter eggs are coming soon
                🧐🕵️
              </p>
            )}
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
