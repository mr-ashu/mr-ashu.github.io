import React from 'react'
import { Projectelement } from './projext_element'
import Fade from "react-reveal/Fade";
export const Project = () => {
  return (
    <>
  
      <section id="project">
            <h1>Project</h1>
            <div className="project-box">
              <Projectelement/>
            </div>
            <div className="linediv">
            <div className="d"></div>
            <div className="d"></div>
            <div className="d"></div>

            <div className="d3"></div>
            <div className="d"></div>
            <div className="d"></div>
          </div>
          </section>
 
    
    </>
  )
}
