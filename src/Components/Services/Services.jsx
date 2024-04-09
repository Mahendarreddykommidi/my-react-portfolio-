import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data";
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>My services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-conatiner">
        {services_data.map((services, index) => {
          return (
            <div className="services-format" key={index}>
              <h3>{services.s_no}</h3>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
              <div className="services-readmore">
        <p>Read more</p>
        <img src={arrow_icon} alt="" />
      </div>
            </div>
          );
        })}
      </div>
    
    </div>
  );
};

export default Services;
