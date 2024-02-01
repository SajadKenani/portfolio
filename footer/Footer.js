import "../footer/Footer.css"

import instagramIcom from "../images/Instagram.png"
import linkedinIcom from "../images/linkedIn.png"
import twitterIcon from "../images/Twitter.png"

import { useState, useEffect } from "react"

export const Footer = () => {

    const [appearence, useappearence] = useState(false);


    useEffect(() => {
        setTimeout(() => {

          useappearence(true)
        }, 5000);


    
      
      }, []); 

    return (
        <>
       { appearence &&
        <div className="pl-0 lg:pl-48 pb-14" style={{backgroundColor: "#121A25"}}>
            
            <h2 className="pt-20 text-center lg:text-start text-2xl" style={{color: '#B3D5EE'}}> Contact me via  </h2>
            <div className="flex justify-center lg:justify-start">
                <div className="line" style={{width: "180px"}}> </div>
            </div>

            <h2 className="pt-4 text-center lg:text-start text-lg" style={{color: '#B3D5EE'}}> +964 774 262 0979  </h2>
            <h2 className="text-center lg:text-start text-lg" style={{color: '#B3D5EE'}}> sajadkenani999@gmail.com  </h2>

            <div className="flex justify-center lg:justify-start mt-14">
                <img className="icon  m-0 ml-0" src={instagramIcom} onClick={() => window.location.assign("https://www.instagram.com/____00boy/")}/>
                <img className="linkedIcon  m-0 " src={linkedinIcom} onClick={() => window.location.assign("https://www.linkedin.com/in/sajad-kenani-518a8322a/")}/>
                <img className="icon  m-0" src={twitterIcon} onClick={() => window.location.assign("https://www.linkedin.com/in/sajad-kenani-518a8322a/")}/>

            </div>

        </div>}
        </>
    )
}