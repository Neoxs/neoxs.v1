import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const index = () => {
  return (
    <>
      <Seo />
      <Layout>
        <h1>Hi, I'm Yacine 👋</h1>
        <p>
          I am a self-taught web developer who believes in and demonstrates the
          striving for excellence. I love spending my time learning new stuff
          and building quality software.
        </p>
        <p>
          🤝 Reach me:{" "}
          <a
            href="https://github.com/Neoxs"
            target="_blank"
            without
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          /{" "}
          <a
            href="https://twitter.com/YacineKharoubi2"
            target="_blank"
            without
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          / <a href="mailto: m.abdelkaderkharoubi@esi-sba.dz">Email</a>
        </p>
        <h2>💁‍♂️ About me</h2>
        <p>Hey stalker, here is some random facts about me:</p>
        <ul>
          <li>
            🏫 I am a 4th year student at the higher school of computer science{" "}
            <a
              href="https://www.esi-sba.dz/"
              target="_blank"
              without
              rel="noreferrer"
            >
              ESI-SBA
            </a>
          </li>
          <li>
            🇫🇷 I am a full stack developer at{" "}
            <a
              href="https://porsay.com/en"
              target="_blank"
              without
              rel="noreferrer"
            >
              PORSAY
            </a>
          </li>
          <li>👨‍🎓 I’m currently learning: DevOps and Machine learning.</li>
          <li>🧐 I’m currently open for a new internship.</li>
          <li>💬 Ask me about: anything, I am happy to help.</li>
        </ul>
      </Layout>
    </>
  )
}

export default index
