import React from "react"

import netlify from '../assets/netlify.png'
import gatsby from '../assets/gatsbyjs.png'
import github from '../assets/github-light.png'

const Footer = () => {
  const madeWithLinks = [
    { url: "https://www.gatsbyjs.org/", label: "Gatsby", icon: gatsby },
    { url: "https://github.com/Neoxs", label: "GitHub", icon: github },
    { url: "https://www.netlify.com", label: "Netlify", icon: netlify },
  ]

  return (
    <footer className="footer">
      <nav>
        {madeWithLinks.map(link => (
          <a
            href={link.url}
            title={link.label}
            target="_blank"
            rel="noopener noreferrer"
            key={link.url}
          >
            <span>{link.label}</span>
            <img src={link.icon} alt={link.label} />
          </a>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
