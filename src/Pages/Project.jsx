import React from 'react'
import { Projectelement } from './projext_element'
import Fade from "react-reveal/Fade";
export const Project = () => {
  return (
    <>
    <Fade> 
      <section id="project">
            <h1>Project</h1>
            <div className="project-box">
              <Projectelement/>
            </div>
              
          </section>

      </Fade>
    
    </>
  )
}
