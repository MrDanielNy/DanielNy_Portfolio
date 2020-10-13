import React from "react"
import { SocialLink } from '../elements/FooterElements'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare></FaFacebookSquare>,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com",
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url}>
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <SocialLink>
      <ul>{links}</ul>
    </SocialLink>
    
  )
}
