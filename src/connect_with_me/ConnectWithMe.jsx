import React from "react";
import './connectWithMeStyle.css'
import { ConnectWithMeHelper } from "./connectWithMeHelper";

function ConnectWithMe() {
  return (
    <div className="connect_with_me_container" id="connect_with_me">
      <p className="connect_with_me_main_title">Connect with Me</p>
      <p className="connect_with_me_sub_title">
        Get in touch through my professional networks and repositories
      </p>
      <div className="connect_with_me_list_container">
        {ConnectWithMeHelper && ConnectWithMeHelper.map((item)=>(
          <div className="connect_with_me_icon" onClick={()=>{
            window.open(item.link, '_blank').focus();
          }}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConnectWithMe;
