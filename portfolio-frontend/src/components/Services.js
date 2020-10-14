import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { ServicesWrapper, Service, ServiceCenter } from "../elements/ServicesElements"

const Services = () => {
  return (
    <ServicesWrapper>
      {/* {<section className="section bg-grey">} */}
      <Title title="Services" />
      <ServiceCenter>
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <Service>
              <article key={id}>
              {icon}
              <h4>{title}</h4>
              {/* {<div className="underline"></div>} */}
              <p>{text}</p>
            </article>
            </Service>
          )
        })}
      </ServiceCenter>
    
    </ServicesWrapper>
    
  )
}

export default Services
