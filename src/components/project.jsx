import React from "react"
// import { Image } from "../components/image"
import projectStyles from "../styles/project-styles.module.css"
export default class ProjectContainer extends React.Component {
    render() {
        return (
            <a 
                style={{color: "black", textDecoration: "none"}}
                href={this.props.project.link}
                target="_blank"
                rel="noopener noreferrer">
                <div className={projectStyles.projectHolder}>
                    <div className={projectStyles.shine}>
                        <div className={projectStyles.projectImage}>
                            {/* <Image filename="yousef.jpg" /> */}
                        </div>
                        <div className={projectStyles.projectTitle}>
                            {this.props.project.name}
                        </div>
                        <div className={projectStyles.projectDescription}>
                            {this.props.project.description}
                        </div>
                        <div className={projectStyles.skillContainer}>
                            {this.props.project.skills.map((skill) => (
                                <div className={projectStyles.skill}>
                                    {skill}
                                    </div>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}