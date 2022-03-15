import React from "react"
import Layout from "../components/Layout"

const hireme = () => {
  const me = {
    firstName: "Mohamed Yacine",
    lastName: "ABDELKADER-KHAROUBI",
    summary:
      "I am a self-taught web developer that beliefs in and demonstrate the striving for excellence. I love spending my time learning new stuff and building quality softwares.",
    experience: [
      {
        title: "PORSAY",
        profile: "Full-Stack developer | Aug 2020 - Today (Part-Time)",
        keyLearnings: [
          "Build the main functionalities of Porsay.com using VueJs & NodeJs.",
          "Maintain the website and fix any reported issue.",
        ],
      },
      {
        title: "CLINITY",
        profile: "Front-End & DevOps | Feb 2021 - Sept 2021",
        keyLearnings: [
          "Build the main UI using React/TypeScript & SASS",
          "Build the the CI/CD pipeline using Travis CI",
          "Deploy the app using Docker",
        ],
      },
      {
        title: "IN-TUITION",
        profile: "Front-End | Dec 2020 - Dec 2021",
        keyLearnings: [
          "Build the main dashbord for in-tuition plateform using react and firebase",
        ],
      },
    ],
    contact: {
      place: "SIDI BEL ABBES, Algeria 🇩🇿",
      email: "m.abdelkaderkharoubi@esi-sba.dz",
      web: "neoxs.github.io",
      linkedIn:
        "https://www.linkedin.com/in/mohamed-yacine-abdelkader-kharoubi-9955a8174/",
    },
  }
  return (
    <Layout>
      <h1>{`${me.firstName} ${me.lastName}`}</h1>
      <p className="mb-2">{me.summary}</p>
      <h2>Selected experience</h2>
      {me.experience.map((exp, index) => {
        return (
          <>
            <h3>{`${index + 1} ${exp.title}`}</h3>
            <sub>{exp.profile}</sub>
            <ul>
              {exp.keyLearnings.map(key => (
                <li>{key}</li>
              ))}
            </ul>
            <br />
          </>
        )
      })}
      <h2>Contact me @</h2>
      <ul>
        <li>📍 {me.contact.place}</li>
        <li>✉️ {me.contact.email}</li>
        <li>🌍 {me.contact.web}</li>
        <li>
          🖇 <a href={me.contact.linkedIn}>Click me</a>
        </li>
      </ul>
    </Layout>
  )
}

export default hireme
