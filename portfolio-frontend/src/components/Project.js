import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { ProjectItem, 
  ProjectImage, 
  ProjectInfo, 
  ProjectNumber, 
  ProjectName,
  ProjectStack,
  ProjectIcon,
  ProjectLinks,
  ProjectInfoHeading
  } from '../elements/ProjectsElements'

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <ProjectItem>
      {/* if image is not supplied, instead of breaking, dont show any image */}
      {image && (
        <ProjectImage fluid={image.childImageSharp.fluid}/>
      )}
      <ProjectInfo>
        <ProjectInfoHeading>
        <ProjectNumber>0{index + 1}.</ProjectNumber>
        {/* if title is not supplied, set a defualt title */}
        <ProjectName>{title || "Projekt"}</ProjectName>
        </ProjectInfoHeading>
        <p>{description}</p>
        <ProjectStack>
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </ProjectStack>
        <ProjectLinks>
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
        </ProjectLinks>
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

