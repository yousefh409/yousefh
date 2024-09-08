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
              href="mailto:yousefh@stanford.edu"
              target="_blank"
              rel="noopener noreferrer"
              className={indexStyles.linkIcon}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                title="yousefh@stanford.edu"
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
            <div>
              I’m currently pursuing an MS in Electrical Engineering at Stanford University, with an expected graduation in June 2026. Before this, I completed my BS in Electrical Engineering and Computer Sciences at UC Berkeley.          
            </div>
            <div>
              During my internships, I had the chance to work with a number of great teams. At AMD, I contributed to the development of the Microblaze V processor, a RISC-V based soft processor, and at Cloudera, I helped automate network monitoring processes, which improved efficiency in their release pipeline. 
            </div>
            <div>
              I also enjoy teaching, and as a TA at UC Berkeley, I taught EE 120 (Signals and Systems) for 3 semesters. For 2 of these semesters, I had the oppurtunity to lead the team as a Head TA, where I led a team of 5 TAs and handled admin duties. For my work in EE120, I had the honor of recieving the “Outstanding GSI” and “EECS Outstanding TA” awards.
            </div>
            <div>
              In my time TAing EE120, we employed a number of innovative teaching methods, including industry application labs, deployable labs that could be run in the cloud, and automated grading to save TA hours. Our work (Toward Scalable Laboratories in Signals and
Systems: Content, Deployment, and Grading) was published and presented at ISCAS 2024.
            </div>
            <div>
              As a Research Assistant at UC Berkeley Skylab, I worked on Spatialyze, the first geospatially optimized Video Database Management System (VDBMS), under Prof. Alvin Cheung. By leveraging road network data, we improved video query execution times by up to 100%, enhancing performance for geospatial applications. Our work (Spatialyze: A Geospatial Video Analytics System
with Spatial-Aware Optimizations) was published in VLDB 2024.
            </div>
                  
            
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
