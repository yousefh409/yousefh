import React from "react"
import indexStyles from "../styles/index.module.css"
import Image from "../components/image.jsx"
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap"
// import "../styles/global.scss"

export default function Home() {
  return (

    <div>
      <div className={indexStyles.landingContainer}>
        <div className={indexStyles.mainInfo}>
          {/* <Image className={indexStyles.profilePic} filename={"yousef.jpg"} /> */}
          Hello, I am Yousef
          
        </div>
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="https://www.freecodecamp.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "free-code-camp"]}
              className="icons fcc"
              title="FreeCodeCamp"
            />
          </a>
          <a
            href="https://www.hackerrank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "hackerrank"]}
              className="icons hr"
              title="Hackerrank"
            />
          </a>
          <a
            href="mailto:johndoe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>

      </div>
      <div className={indexStyles.aboutContainer}>
        d
      </div>
      <div className={indexStyles.experienceContainer}>
        d
      </div>
      <div className={indexStyles.projectContainer}>
        d
      </div>
    </div>)
}
