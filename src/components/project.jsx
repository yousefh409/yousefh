import React from "react"
import projectStyles from "../styles/project-styles.module.css"
export default class ProjectContainer extends React.Component {
    render() {
        return (
            <a 
                style={{color: "black", textDecoration: "none"}}
                href={this.props.project.link}
                target="_blank"
                rel="noopener noreferrer">
                <div className={projectStyles.projectContainer}>
                    <div className={projectStyles.projectImage}>

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
            </a>
        )
    }
}