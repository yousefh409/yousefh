import React from "react"
import indexStyles from "../styles/index.module.css"
// import Image from "../components/image.jsx"
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'font-awesome/css/font-awesome.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet"
import resume from "../../static/Resume.pdf"
import Typing from "react-typing-animation"

export default function Home() {
  return (

    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Yousef H.</title>
          <link rel="canonical" href="https://www.yousefh.org/" />
        </Helmet>
      <div className={indexStyles.landingContainer}>
        <div>
          <div className={indexStyles.mainInfo}>
            {/* <Image className={indexStyles.profilePic} filename={"yousef.jpg"} /> */}
            <Typing
              speed={50}
              hideCursor={false}
            >
              Salutations, I am Yousef
            </Typing>
            
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
              href={resume}
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
