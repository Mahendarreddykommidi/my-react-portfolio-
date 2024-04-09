import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Profile_img from "../../assets/about_profile.svg";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={Profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p> Iam frontend developer in california,Usa wth 10 years experience worked in multiple
          companies like amazon facebook etc</p>
            <p>my passion for frontend development is not enly restricted in my extensive experience</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>Html and css</p><hr style={{width:"50%"}} />  </div>
            
            <div className="about-skill"><p>React js</p><hr style={{width:"70%"}} />   </div>
             
            <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
            
            <div className="about-skill"><p>Next js</p> <hr style={{width:"50%"}}/>   </div>
             
</div>
</div>
</div>
<div className="about-achievements">
    <div className="about-achievement">
        <h1>10+</h1>
        <p>Yeras of experience</p>
    </div>
    <hr />
    <div className="about-achievement">
        <h1>90+</h1>
        <p>Projects Completed</p>
    </div>
    <hr />
    <div className="about-achievement">
        <h1>15+</h1>
        <p>Happy Clients</p>
    </div>

</div>
</div>


    
        
  );
};

export default About;
