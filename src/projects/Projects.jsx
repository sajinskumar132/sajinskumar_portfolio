import React from "react";
import { ProjectsHelper } from "./ProjectsHelper";
import './projectStyle.css'
function Projects() {
  const description_toggle_container=(sub_description_container_id)=>{
    let element=document.getElementById(sub_description_container_id)
    if(element){
      if(element.style.display==""||element.style.display=='none'){
        element.style.display='block'
      }else{
        element.style.display='none'
      }
    }
}
  return (
    <div id="project">
      <p className="project_main_title">My Projects</p>
      <p className="project_sub_title">
        A showcase of my recent projects and concepts
      </p>
      <div className="projects_main_container">
        {ProjectsHelper && ProjectsHelper.map((item,index)=>(
          <div className="project_main_container" onClick={()=>{
            description_toggle_container(`project_description_${index}`)
          }}>
            <p className="project_title">{item.project_name}</p>
            <p className="project_description">{item.short_description}</p>
            <div className="project_tech_stack_container">
              {item.tech_stack && item.tech_stack.map((item)=>(
                <p className="project_tech_stack_item">{item}</p>
              )) }
            </div>
            <div className="project_description_container" 
            // id={`project_description_${index}`}
            >
              <p className="project_description_title">Description</p>
              <div>
                <ul >
                  {item.description &&
                    item.description.map((item) => <li className="project_description_text">{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )) }
      </div>
     
    </div>
  );
}

export default Projects;
