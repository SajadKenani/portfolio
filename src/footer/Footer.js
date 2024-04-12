import "../footer/Footer.css"

import instagramIcom from "../images/Instagram.png"
import linkedinIcom from "../images/linkedIn.png"
import twitterIcon from "../images/Twitter.png"
import { ScrollProvider, useScrollContext } from '../ScrollContext';
import { useState, useEffect } from "react"

export const Footer = () => {

    const [appearence, useappearence] = useState(false);

    const { item } = useScrollContext();

    useEffect(() => {
        setTimeout(() => {

          useappearence(true)
        }, 5000);


    
      
      }, []); 

    return (

        <ScrollProvider>
        {appearence && 
                <div className="pl-0 pb-14" style={{backgroundColor: "#121A25"}}>
            
                <h2 className="pt-20 text-center text-2xl" style={{color: '#B3D5EE', fontFamily: "Tajawal"}}> {item === "english" ? "Contact me via": "تواصل معي عن طريق"}   </h2>
                <div className="flex justify-center mt-4">
                    <div className="line" style={{width: "180px"}}> </div>
                </div>
    
                <h2 className="pt-4 text-center text-lg" style={{color: '#B3D5EE'}}> +964 774 262 0979  </h2>
                <h2 className="text-center text-lg" style={{color: '#B3D5EE'}}> sajadkenani999@gmail.com  </h2>
    
                <div className="flex justify-center mt-14">
                    <img className="icon  m-0 ml-0" src={instagramIcom} onClick={() => window.location.assign("https://www.instagram.com/____00boy/")}/>
                    <img className="linkedIcon  m-0 " src={linkedinIcom} onClick={() => window.location.assign("https://www.linkedin.com/in/sajad-kenani-518a8322a/")}/>
                    <img className="icon  m-0" src={twitterIcon} onClick={() => window.location.assign("https://x.com/MRGolar?t=rFaB8INFwUtoB2BBWrv-5w&s=09")}/>
    
                </div>
    
            </div>
            }

        </ScrollProvider>
    )
}
