import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { Button } from './Button'
import { ProjectsWrapper, ProjectItem, ProjectsCenter } from '../elements/ProjectsElements'

const Projects = ({ projects, title, showLink }) => {
  return (
      <ProjectsWrapper>
        <Title title={title} />
        <ProjectsCenter>
          {projects.map((project, index) => {
            return <Project key={project.id} index={index} {...project} />
          })}
        </ProjectsCenter>
        {showLink && (
          <Button href="/projects">All projects</Button>
        )}
      </ProjectsWrapper>
  )
}

export default Projects
