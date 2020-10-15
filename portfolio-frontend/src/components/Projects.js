import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { Button } from './Button'
import { ProjectsWrapper, ProjectItem } from '../elements/ProjectsElements'

const Projects = ({ projects, title, showLink }) => {
  return (
    
      <ProjectsWrapper>
        <section>
        <Title title={title} />
        <div>
          {projects.map((project, index) => {
            return <Project key={project.id} index={index} {...project} />
          })}
        </div>
        {showLink && (
          <Button href="/projects">All projects</Button>
        )}
        </section>
      </ProjectsWrapper>
  )
}

export default Projects
