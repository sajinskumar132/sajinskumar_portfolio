import React from "react";
import { WorkExperience } from "./WorkExperience";
import { BsBuildingsFill } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import "./experienceStyle.css";
function Experience() {
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
    <div id ="experience">
      <p className="experience_main_title">My Work Experience</p>
      <p className="experience_sub_title">
        A journey through my recent professional roles
      </p>
      <div className="experience_super_conatiner">
        {WorkExperience.map((item, index) => (
          <div
            className="experience_main_conatiner"
            id={`experience_main_${index}`}
            onClick={()=>{
              description_toggle_container(`experience_description_${index}`)
            }}
          >
            <div className="flex_container">
              <div className="full_width_container">
                <div className="flex_container_space_between">
                  <div className="flex_container">
                    <BsBuildingsFill className="company_icon" />
                    <p className="company_name_text">{item.company_name}</p>
                  </div>
                  <div className="flex_container">
                    <FaCalendarAlt className="calender_icon" />
                    <p className="duration_text">{item.start_date}</p>
                    <p className="duration_text">-</p>
                    <p className="duration_text">{item.end_date}</p>
                  </div>
                </div>
                <div className="flex_container">
                  <FaLaptop className="designation_icon" />
                  <p className="designation_text">{item.designation}</p>
                </div>
                <div className="tech_stack_container">
                  {item.tech_stack &&
                    item.tech_stack.map((item) => (
                      <p className="tech_stack_skills">{item}</p>
                    ))}
                </div>
              </div>
            </div>
            <div className="experience_description_container" id={`experience_description_${index}`}>
              <p className="description_title">Description</p>
              <div>
                <ul >
                  {item.description &&
                    item.description.map((item) => <li className="description_text">{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
