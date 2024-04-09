import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useState } from 'react'


const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "c8b60a7d-537a-4cab-8ebd-1c124c43eb5c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="contact" id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern}alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets talk</h1>
                <p>im currently available so feel free to take any new projects 
                 You can contact me any time</p>
                 
            
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>greatstackdev@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+772-825-524</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Ca,united states</p>
                </div>
            </div>
            </div>
    
        
        <form className='contact-right' onSubmit={onSubmit}>
            <label htmlFor="Your name">Your name</label>
            <input type="text"  name="name" placeholder='enter your name' />
            <label htmlFor="">email</label>
            <input type="email" name="email" placeholder='enter your email here' />
            <label htmlFor="">write your message here</label>
            <textarea name="" id=""  rows="8" placeholder='enter your message here' className='text'></textarea>
            <button type="submit" className='contact-submit'>Submit now</button>
            <span>{result}</span>

        </form>
       
        </div>
        

    </div>

  )
}

export default Contact