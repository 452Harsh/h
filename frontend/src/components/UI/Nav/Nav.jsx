import React from "react";
import classes from "./Nav.module.css";
// import logo from "../../../assets/logo.png";
const NavBar = (props) => {

  const handleDarkModeToggle = (e) => {
    document.body.classList.toggle("dark");
    
    if(e.target.classList.contains(classes["dark-mode-toggle"])){
      const toggleBtn = e.target.children[0];
      toggleBtn.classList.toggle(classes["active"]);
    }else{
      // e.target.parentElement.classList.toggle(classes["dark-mode-toggle-on"]);
    }
     
  };
  return (
    <React.Fragment>
      <div className={classes["nav-bar"]}>
        <div className={classes["nav-bar-logo"]}>
          {/* <img src={logo} alt="" /> */}
          Query<span className={classes["gradient-span"]}>Whisperer</span>
        </div>
        <div className={classes["nav-bar-links"]}>
        
          <div className={classes.buttons} onClick={props.onAskIt}>Ask It</div>
          <div className={classes.buttons} onClick={props.onTeachIt}>Teach It</div>
          <div onClick={handleDarkModeToggle} className={classes["dark-mode-toggle"]}>
            <span className={classes["toggle-btn"]}></span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
