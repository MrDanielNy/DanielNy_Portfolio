import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { ProjectItem, 
  ProjectImage, 
  ProjectInfo, 
  ProjectNumber, 
  ProjectImageCover,
  ProjectDesc,
  ProjectStack,
  ProjectIcon
  } from '../elements/ProjectsElements'

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <ProjectItem>
      {/* if image is not supplied, instead of breaking, dont show any image */}
      {image && (
        <ProjectImage fluid={image.childImageSharp.fluid}/>
      )}
      <ProjectInfo>
        <ProjectNumber>0{index + 1}.</ProjectNumber>
        {/* if title is not supplied, set a defualt title */}
        <h3>{title || "Projekt"}</h3>
        <p>{description}</p>
        <ProjectStack>
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </ProjectStack>
        <div>
          <a href={github}>
            <ProjectIcon>
              <FaGithubSquare />
            </ProjectIcon>
            
          </a>
          <a href={url}>
            <ProjectIcon>
              <FaShareSquare />
            </ProjectIcon>
            
          </a>
        </div>
      </ProjectInfo>
    </ProjectItem>
  )
}

/*if you for example forget to set these fields in strapi,
so if you forget to give them values, you will get a error in your console
*/
Project.propTypes = {
  title: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project

