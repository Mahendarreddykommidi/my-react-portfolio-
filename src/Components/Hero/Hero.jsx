import './Hero.css'
import Profile_img from '../../assets/profile_img.svg'

export default function Hero() {
  return (
    <div className="hero-section" id='home'>
        <img src={Profile_img} alt="" />
        <h1><span>Im Alex Bennet</span> frontend developer based in Usa</h1>
        <p>Iam frontend developer in california,Usa wth 10 years experience worked in multiple
          companies like amazon facebook etc
        </p>
        <div className="hero-action">
        <div className="hero-connect">connect with me </div>
        <div className="hero-resume">my resume</div>
        </div>
      
        

    </div>
  )
}
