import React from "react"
import indexStyles from "../styles/index.module.css"
// import Image from "../components/image.jsx"
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import Container from "react-bootstrap"
// import "../styles/global.scss"
import 'font-awesome/css/font-awesome.min.css';
// import 'font-awesome/less/font-awesome.less';
import "@fortawesome/fontawesome-svg-core/styles.css";
// import { faCoffee } from '@fortawesome/pro-regular-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (

    <div>
      <div className={indexStyles.landingContainer}>
        <div>
          <div className={indexStyles.mainInfo}>
            {/* <Image className={indexStyles.profilePic} filename={"yousef.jpg"} /> */}
            Salutations, I am Yousef
          </div>
          <div className={indexStyles.linkInfo}>
            <a
              href="https://github.com/yousefh409"
              target="_blank"
              rel="noopener noreferrer"
              className={indexStyles.linkIcon}
            >
              <FontAwesomeIcon
                icon={faGithub}
                title="Github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yousef-helal-2a9a42199/"
              target="_blank"
              rel="noopener noreferrer"
              className={indexStyles.linkIcon}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                title="LinkedIn"
              />
            </a>
          </div>
          <a
              href="/Resume.pdf"
              className={indexStyles.resumeLink}
              download="Yousef Helal Resume.pdf"
            >
              Resume
            </a>
        </div>

      </div>
      {/* <div className={indexStyles.aboutContainer}>
        d
      </div>
      <div className={indexStyles.experienceContainer}>
        d
      </div>
      <div className={indexStyles.projectContainer}>
        d
      </div> */}
    </div>)
}
