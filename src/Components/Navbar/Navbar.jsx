
import Logo from '../../assets/logo.svg'
import './Navbar.css'
import { useRef, useState } from 'react'
import underline from '../../assets/nav_underline.svg'
import {Link} from 'react-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

export default function Navbar() {
  const[menu,setmenu]=useState("about")

  const menuref=useRef();
const openmenu=()=>{
  menuref.current.style.right="0"
}
const closemenu=()=>{
  menuref.current.style.right="-360px"
}



  return (
    <>
    <div className="navbar">
        <img src={Logo} alt="" />
        <img src={menu_open} onClick={openmenu} className='nav-mob-open' alt="" />

        <ul className='menu-links' ref ={menuref}>
          <img src={menu_close} onClick={closemenu} alt="" className="nav-mob-close" />
        <li onClick={()=>setmenu('home')} ><Link className="Link" offset={0}  duration={500}smooth="true"to="hero-section"><p>Home</p></Link>
        {menu==="home"?<img src={underline} alt=''/>:<> </>}</li>
       <li onClick={()=>setmenu('about')}><Link  className='Link'  offset={-260} duration={500}smooth="true"to="about"><p>About me</p></Link> 
        {menu==="about"?<img src={underline} alt=''/>:<> </>}  </li>
      <li onClick={()=>setmenu('services')} ><Link  className='Link'  offset={-150} duration={500} smooth="true" to="services"><p>Services</p></Link> 
       {menu==="services"?<img src={underline} alt=''/>:<> </>}</li>
       <li onClick={()=>setmenu('portfolio')}><Link className='Link'  offset={-260} duration={-260}smooth="true" to="work"> <p>Portfolio</p></Link>  
       {menu==="portfolio"?<img src={underline} alt=''/>:<> </>} </li>
      <li onClick={()=>setmenu('contact')}><Link  className=" Link" offset={-260}  duration={-260}smooth="true"to="contact"><p>Contact</p></Link> 
       {menu==="contact"?<img src={underline} alt=''/>:<> </>} </li>

      </ul>  
    
          


        <div className="conect">
            conect with me
        </div>
        </div>
  
    </>

  )
}
