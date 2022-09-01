import React from "react"
import indexStyles from "../styles/index.module.css"
// import Image from "../components/image.jsx"
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'font-awesome/css/font-awesome.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet"
import resume from "../../static/Resume Yousef Helal.pdf"
import Typing from "react-typing-animation"
import { faArrowAltCircleDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import projectData from "../data/projectData.json"
import ProjectContainer from "../components/project";
import { Link } from "react-scroll"


export default function Home() {
  return (

    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Yousef H.</title>
          <meta name="description" content="A personal website for an individual by the name of Yousef Helal" />
          <link rel="canonical" href="https://www.yousefh.org/" />
        </Helmet>
      <div className={indexStyles.landingContainer}>
        <div>invisible</div>
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
                title="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yousef-helal/"
              target="_blank"
              rel="noopener noreferrer"
              className={indexStyles.linkIcon}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                title="LinkedIn"
              />
            </a>
            <a
              href="mailto:yousefh@berkeley.edu"
              target="_blank"
              rel="noopener noreferrer"
              className={indexStyles.linkIcon}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                title="yousefh@berkeley.edu"
              />
            </a>
          </div>
          <div className={indexStyles.resumeHolder}>
            <a
                href={resume}
                className={indexStyles.resumeLink}
                download="Yousef Helal Resume.pdf"
              >
                Resume
            </a>
          </div>
        </div>
        
        <div className={indexStyles.downHolder}>
            <Link to="#about" spy={true} smooth={true} duration={500} offset={-20}>
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                title="See the rest"
              />
            </Link>
        </div>
        
      </div>
      <div id="#about" className={indexStyles.aboutContainer}>
        <div className={indexStyles.containerTitle}>
          About
        </div>
        <div className={indexStyles.aboutInfo}>
          I am a Junior currently studying Electrical Engineering and Computer Science at the UC Berkeley. I have previously interned at Cloudera and BACR, and am currently looking for internships for summer 2023! On the research side, I am currently working on the Apperception project under Prof. Alvin Cheung at SkyLab here at Berkeley. Some of my other interests include soccer, racing, teaching (I am currently a TA for EE120: Signals and Systems), and more!
        </div>
      </div>

      <div className={indexStyles.projectContainer}>
       <div className={indexStyles.containerTitle}>
          Selected Projects
        </div>
        <div className={indexStyles.projectWrapper}>
          {projectData.map((project) => (
            <ProjectContainer project={project}/>
          ))}
        </div>
      </div>
    </div>)
}
