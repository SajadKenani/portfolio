import "../content/Content.css"

import { useState, useEffect } from "react"

import mountain from "../images/mountain.png"
import inBoxImage from "../images/in_box_icon_blue.png"
import whiteTigerImage from "../images/whiteTigerImage.png"
import tntImage from "../images/TNTImage.png"
import shopifyImage from "../images/shopifyImage.png"
import shopifyMobileImage from "../images/shopifyMobileImage.png"
import malahihImage from "../images/malamihImage.png"
import boxImage from "../images/mainInBox.png"
import codeGxImage from "../images/codeGxImage.png"

import instagramIcom from "../images/Instagram.png"
import linkedinIcom from "../images/linkedIn.png"
import twitterIcon from "../images/Twitter.png"

import { useInView } from 'react-intersection-observer';

import { ScrollProvider, useScrollContext } from '../ScrollContext';

import { useRef } from 'react';

export const Content = () => {

    const [appearence, useappearence] = useState(false);
    const [appearence1, useappearence1] = useState(false);
    const [appearence2, useappearence2] = useState(false);
    const [appearence3, useappearence3] = useState(false);
    const [appearence4, useappearence4] = useState(false);

    const [projectapperance, useprojectapperance] = useState(false);

    const [myhtml, usemyhtml] = useState(false)
    const [mycss, usemycss] = useState(false)
    const [myjavascript, usemyjavascript] = useState(false)
    const [myreact, usemyreact] = useState(false)
    const [mytailwind, usemytailwind] = useState(false)
    const [mybootstrap, usemybootstrap] = useState(false)
    const [mycharp, usemycharp] = useState(false)
    const [myapi,  usemyapi] = useState(false)
    const [mysass, usemysass] = useState(false)

    const [projectone, useprojectone] = useState(false)
    const [projecttwo, useprojecttwo] = useState(false)
    const [projectthree, useprojectthree] = useState(false)
    const [projectfour, useprojectfour] = useState(false)

    const [button, usebutton] = useState(false);

    const [techparaone, usetechparaone] = useState(false);
    const [techparatwo, usetechparatwo] = useState(false);

    const { scrollToSection } = useScrollContext();

    

    useEffect( () => {
        const myFunction = async () => {
        // Check if "mommory" is set to "value" in localStorage
        if (localStorage.getItem("mommory") === "value") {
          // Update all states to true
          useappearence(true);
          useappearence1(true);
          useappearence2(true);
          useappearence3(true);
          useappearence4(true);
        

          usebutton(true)
          usetechparaone(true)
          usetechparatwo(true)

          usemyhtml(true)
          usemycss(true)
          usemyjavascript(true)
          usemyreact(true)
          usemytailwind(true)
          usemybootstrap(true)
          usemycharp(true)
          usemyapi(true)
          usemysass(true)

        setMainmessage(`With over two years of expertise, I specialize in designing and coding websites using the latest technologies. I ensure seamless functionality across all devices. Let's collaborate on your website project or check out my projects for a glimpse of my work, or contact me to start working on your website!`)
        secsetvalue(false)
          document.getElementById("myImage").classList.replace("image", "staticImage");

          await new Promise(resolve => setTimeout(resolve, 0));

          document.getElementById("myH2").classList.replace("h2", "h2-Static");
          document.getElementById("myH3").classList.replace("h2", "h2-Static");
          document.getElementById("myH4").classList.replace("h2", "h2-Static");

          document.getElementById("myButton").classList.replace("knowMore-btn", "static-knowMore-btn")
          document.getElementById("myButton").classList.replace("hireMe-btn", "static-hireMe-btn")

          
        } 
        await new Promise(resolve => setTimeout(resolve, 0));
        localStorage.setItem("mommory", "value")
        
    }
    myFunction()
      }, []); // Empty dependency array ensures that the effect runs once after the initial render
    
 
     

    useEffect(() => {
        setTimeout(() => {

          useappearence(true)
        }, 2000);

        setTimeout(() => {

            useappearence1(true)
        }, 2000);

        setTimeout(() => {

            useappearence2(true)
        }, 3500);

        setTimeout(() => {

            useappearence3(true)
        }, 5000);
    
        setTimeout(() => {

            useappearence4(true)
        }, 6500);
    
         
      
      }, []); 



      const [contactme, usecontactme] = useState(false);

      const handleClick = (myNum) => {
        scrollToSection(myNum);
    
     
      }


      const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.5, 
      });

      const [ref2, inView2] = useInView({
        triggerOnce: true, 
        threshold: 0.2, 
      });


      
      let [paragraph, useparagraph] = useState(`With over two years of expertise, I specialize in designing and coding websites using the latest technologies. I ensure seamless functionality across all devices. Let's collaborate on your website project or check out  my projects for a glimpse of my work, or contact me to start working on your website!`);

      const message = paragraph.split('');
      const [mainmessage, setMainmessage] = useState([]);

      const [value, setvalue] = useState(true)
      const [secvalue, secsetvalue] = useState(true);



    
      const updateMessage = (index) => {
        if (index < message.length) {
            if (secvalue === false){
                return;
              }else{
          setMainmessage(message.slice(0, index) + message[index]);
          
          setTimeout(() => updateMessage(index + 1), 40);
}
        }
      };
    
      useEffect(() => {
        setMainmessage(paragraph)
      
      }, []); 

      

        if(inView){
           
            const myFuntion = async () =>{
                if (secvalue){
                    
                    setMainmessage(0)
                    updateMessage(0);
                    secsetvalue(false)
                }
            await new Promise(resolve => setTimeout(resolve, 13500));
            usebutton(true)
            await new Promise(resolve => setTimeout(resolve, 500));
            usetechparaone(true)
  

            await new Promise(resolve => setTimeout(resolve, 700));
            usemyhtml(true)
            await new Promise(resolve => setTimeout(resolve, 700));
            usemycss(true)
            await new Promise(resolve => setTimeout(resolve, 700));
            usemyjavascript(true)
            await new Promise(resolve => setTimeout(resolve, 700));
            usemyreact(true)
            await new Promise(resolve => setTimeout(resolve, 700));
            usemybootstrap(true)
            await new Promise(resolve => setTimeout(resolve, 700));
            usemytailwind(true)
            await new Promise(resolve => setTimeout(resolve, 700));
            usemycharp(true)
            await new Promise(resolve => setTimeout(resolve, 700));
            usetechparatwo(true)
            await new Promise(resolve => setTimeout(resolve, 1200));
            usemyapi(true)
            await new Promise(resolve => setTimeout(resolve, 700));
            usemysass(true)
    
    
        
        }
        myFuntion()
          }

          if(inView2){
           
            const myFuntion = async () =>{


            await new Promise(resolve => setTimeout(resolve, 0));
            useprojectone(true)
            await new Promise(resolve => setTimeout(resolve, 700));
            useprojecttwo(true)
            await new Promise(resolve => setTimeout(resolve, 700));
            useprojectthree(true)
            await new Promise(resolve => setTimeout(resolve, 700));
            useprojectfour(true)

        
        }
        myFuntion()
          }

          const [scrolled, setScrolled] = useState(false);
          const [myPadding, setmypadding] = useState(window.innerWidth > 1000 ? 1200 : 1700);
        
          useEffect(() => {
            const handleScroll = () => {
        
              
              const isScrolled = window.scrollY > myPadding;
              setScrolled(isScrolled);
            };
        
            // Attach the event listener when the component mounts
            window.addEventListener('scroll', handleScroll);
        
            // Clean up the event listener when the component unmounts
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []); // Empty dependency array means this effect runs once when the component mounts
        
          
          // Change background color based on the scroll state
          useEffect(() => {
            if(document.querySelector(".myProjects"))
            if (scrolled) {
              document.querySelector(".myProjects").style.color = '#1F2C3C'; // Change to your desired color
            } else {
              document.querySelector(".myProjects").style.color = '#B3D5EE'; // Change to your desired color
            }
          }, [scrolled]);

          const mouseEnterProject = (event) => {
            const element = document.querySelectorAll(".projectSquare-div");
            const para = document.querySelectorAll(".para");
            const myPara = document.querySelectorAll(".myPara");
          
            if (element) {
              element.forEach((div, i) => {
                if (Number(event.target.classList[0]) === i) {
                  div.style.transition = "background 0.2s ease"; // Adjust the duration and easing as needed
                  div.style.background = "linear-gradient(to top left, #1F2C3C, #B3D5EE)";
                }
              });
            }
          
            if (para) {
              para.forEach((para, i) => {
                if (Number(event.target.classList[0]) === i) {
                  para.style.transition = "color 0.2s ease";
                  para.style.color = "#B3D5EE";
                }
              });
            }
          
            if (myPara) {
              myPara.forEach((myPara, i) => {
                if (Number(event.target.classList[0]) === i) {
                  myPara.style.transition = "color 0.2s ease";
                  myPara.style.color = "#B3D5EE";
                }
              });
            }
          };
          
          const mouseLeaveProject = (event) => {
            const element = document.querySelectorAll(".projectSquare-div");
            const para = document.querySelectorAll(".para");
            const myPara = document.querySelectorAll(".myPara");
          
            if (element) {
              element.forEach((div, i) => {
                if (Number(event.target.classList[0]) === i) {
                  div.style.transition = "background 0.2s ease";
                  div.style.background = "linear-gradient(to top left, #B3D5EE, #1F2C3C)";
                }
              });
            }
          
            if (para) {
              para.forEach((para, i) => {
                if (Number(event.target.classList[0]) === i) {
                  para.style.transition = "color 0.2s ease";
                  para.style.color = "#1F2C3C";
                }
              });
            }
          
            if (myPara) {
              myPara.forEach((myPara, i) => {
                if (Number(event.target.classList[0]) === i) {
                  myPara.style.transition = "color 0.2s ease";
                  myPara.style.color = "#1F2C3C";
                }
              });
            }
          };
          

         
    return (
        <ScrollProvider>
        <div id="mainSection">
            <img style={{width: "100%", height: "700px", objectFit: "cover", position: "relative", zIndex: "32"}} id="myImage" className="-mt-2 image" src={mountain} />

            {contactme &&
            <div onClick={() => usecontactme(false)} className="flex justify-center outerFormPage" >
                <div className="formPage" >

                </div>
            </div>
            }

           { appearence &&
            <div className="mainDiv" >

            <div className="flex justify-center miniDiv" id="myMiniDiv" style={{position: 'absolute', zIndex: "324", marginTop: "-530px"}} > 
            <div className="" >
                { appearence1 && <h2  id="myH2" className="h2 text-4xl font-semibold text-center lg:text-start"> Hi, </h2> }
                { appearence2 && <h2  id="myH3" className="h2 text-4xl font-semibold text-center lg:text-start"> I’m Sajad, </h2> }
                { appearence3 && <h2  id="myH4" className="h2 text-4xl font-semibold text-center lg:text-start"> Front-End Developer! </h2> }

                { appearence4 &&
                <div className="flex justify-center lg:justify-start" >
                    <button id="myButton" className="mt-16 m-4 knowMore-btn" onClick={() => handleClick(1)}> Know more! </button>
                    <button id="myButton" className="mt-16 m-4 hireMe-btn" onClick={() => usecontactme(true)}> Hire me! </button>
                </div>
                }

            </div>
            </div>

            <div className="flex justify-center mt-20" >
              <div className="line"></div>
            </div>

           <div className={` grid lg:flex justify-center lg:justify-between pt-20 fade-up ${inView ? 'visible' : ''}`}  id="aboutMeSection" >
            <div ref={ref} className=" mt-14 ml-0 lg:ml-4 "  >
                 <h2 className="text-4xl font-semibold text-center lg:text-start text-white " style={{color: "#B3D5EE"}}> Who am I? </h2>
                 <p className=" text-center lg:text-start p-4 lg:p-0 mt-10 fontP lg:mr-20" style={{color: "#809EB5"}}>{mainmessage.split(",").join("")}</p>



                 { button && <div className="flex justify-center lg:justify-start">
                 <div className="flex justify-center lg:justify-start h-12   mt-10" >
                    <button className=" cv-btn rounded" > CV/Resume </button>
                 </div>
                 </div>}
            </div>

            <div className=" mt-10">                 
            {techparaone && <p className=" text-center lg:text-start p-4 lg:p-0 mt-6 fontP text-2xl fade" style={{color: "#809EB5"}}> Techniques I know  </p>}
                 
                 <div className=" pt-6 ">

                    <div className="flex justify-center lg:justify-start">
                    {myhtml && <div  className={ `fade p-3 pt-0 pb-1 text-white font-semibold rounded miniBox h-7 `} style={{backgroundColor:"#F55633", width: "fit-content"}}> HTML </div>}
                    {mycss && <div  className={ `fade p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox`} style={{backgroundColor:"#30548D", width: "fit-content"}}> CSS </div>}
                    {myjavascript && <div  className={ `fade p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7`} style={{backgroundColor:"#EB9B00", width: "fit-content"}}> JavaScript </div>}
                    {myreact && <div  className={ `fade p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox`} style={{backgroundColor:"#335EF5", width: "fit-content"}}> React </div>}
                    </div>

                    <div className="flex mt-2 justify-center lg:justify-start"> 
                    {mybootstrap && <div  className={`fade p-3 pt-0 pb-1 text-white font-semibold rounded  miniBox `} style={{backgroundColor:"#00518D", width: "fit-content"}}> BootStrap </div>}
                    {mytailwind && <div  className={`fade p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox `} style={{backgroundColor:"#33A3F5", width: "fit-content"}}> Tailwind </div>}
                    {mycharp && <div  className={`fade p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox `} style={{backgroundColor:"#285b23", width: "fit-content"}}> c# </div>}
                    </div>
                </div>

                {techparatwo && <p className=" text-center lg:text-start p-4 lg:p-0 mt-10 fontP text-2xl fade" style={{color: "#809EB5"}}> Techniques I'm Currently learning  </p>}
                 
                 <div className="flex justify-center lg:justify-start pt-6 ">
                    {myapi && <div className="fade p-3 pt-0 pb-1 text-white font-semibold rounded miniBox " style={{backgroundColor:"#30548D", width: "fit-content"}}> API </div>}
                    {mysass && <div className="fade p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7 " style={{backgroundColor:"#33A3F5", width: "fit-content"}}> SCSS/SASS </div>}
   
                </div>
                </div>
            </div>

           <div className="flex justify-center mt-40 -mb-20">
              <div className="line"></div>
            </div>

            <div className="d-flex justify-center mt-20  " style={{ paddingTop: "40px"}} id="projectsSection">
                <h2 className="text-4xl font-semibold text-center lg:text-start pt-20 myProjects" style={{color: "#B3D5EE"}} > Projects I made </h2>
        
                   <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 `}>


                        <div className=" justify-center mb-26 fade" >
                        <div className="flex justify-center -mb-11 mt-6">
                            <img className="w-28" src={inBoxImage} />  
                        </div>
                        <div className="0 projectSquare-div  pt-14" style={{cursor: "pointer"}} onClick={() => window.location.assign("https://inboxcompany.website/")} onMouseEnter={mouseEnterProject} onMouseLeave={mouseLeaveProject}>
                        <div className="0 flex justify-center -pt-4 "><p className="0 pt-0 font-light text-3xl myPara"> In Box Company </p> </div>
                        <p className="0 p-6 pt-4 font-semibold para"> I played a pivotal role in the programming phase of this project, ensuring seamless functionality aligned with the designer's vision. </p> 
                        <div className="0 flex justify-center  pb-10 lg:pb-12 p-0 lg:p-4">
                           <div className="0 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{backgroundColor:"#335EF5", width: "fit-content"}}> React </div>
                           <div className="0 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{backgroundColor:"#33A3F5", width: "fit-content"}}> Tailwind </div>
                        </div>



                        </div>
                       </div>

                       <div className="1 justify-center mb-12 fade">
                        <div className="1 flex justify-center -mb-24">
                            <img className="1 w-60" src={whiteTigerImage} />  
                        </div>
                        <div className="1 projectSquare-div  pt-14 d-2"  style={{cursor: "pointer"}} onClick={() => window.location.assign("https://whitetigerdrink.com/")} onMouseEnter={mouseEnterProject} onMouseLeave={mouseLeaveProject}>
                        <div className="1 flex justify-center -pt-4"><p className="1 pt-0 font-light text-3xl myPara"> White Tiger Drink </p> </div>
                        <p className="1 p-6 pt-4 font-semibold para">  I took the lead in programming for this project, meticulously bringing the designer's vision to life with flawless execution and precision. </p> 
                        <div className="1 flex justify-center  pb-10 lg:pb-12 p-0 lg:p-4">
                           <div className="1 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{backgroundColor:"#335EF5", width: "fit-content"}}> React </div>
                           <div className="1 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{backgroundColor:"#33A3F5", width: "fit-content"}}> Tailwind </div>
                        </div>



                        </div>
                       </div>


                       <div className=" justify-center mb-12 fade" >
                        <div className="flex justify-center -mb-14 mt-1 lg:-mb-11 lg:mt-12">
                            <img className="w-40" src={codeGxImage} />  
                        </div>
                        <div className="2 projectSquare-div  pt-14 d-3" style={{cursor: "pointer"}} onClick={() => window.location.assign("https://codegxiq.com/")} onMouseEnter={mouseEnterProject} onMouseLeave={mouseLeaveProject}> 
                        <div className="2 flex justify-center -pt-4"><p className="2 pt-0 font-light text-3xl myPara"> CodeGx Company </p> </div>
                        <p className="2 p-6 pt-4 font-semibold para">  I collaborated with the CodeGx team to bring this website to life. While they handled the design, I took charge of the programming. </p> 
                        <div className="2 flex justify-center  pb-10 lg:pb-12 p-0 lg:p-4">

                           <div className="2 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7 " style={{backgroundColor:"#F55633", width: "fit-content"}}> HTML </div>
                           <div className="2 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox " style={{backgroundColor:"#00518D", width: "fit-content"}}> BootStrap </div>

                           <div className="2 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7 " style={{backgroundColor:"#EB9B00", width: "fit-content"}}> JavaScript </div>
                        
                        </div>



                        </div>
                       </div>

                            
                       <div className=" justify-center mb-24 fade" >
                        <div className="flex justify-center -mb-14 -mt-1">
                            <img className="w-40" src={tntImage} />  
                        </div>
                        <div className="3 projectSquare-div  pt-14 pb-10 d-4" style={{cursor: "pointer"}} onClick={() => window.location.assign("https://sajadkenani.github.io/tntdecoration/")} onMouseEnter={mouseEnterProject} onMouseLeave={mouseLeaveProject}>
                        <div className="3 flex justify-center pt-2"><p className="3 pt-0 font-light text-3xl myPara"> TNTDecoration </p> </div>
                        <p className="3 p-6 pt-4 font-semibold para"> I'm the creative force behind the design and programming of this website. Currently a work in progress, stay tuned for the exciting completion of this project!  </p> 
                        <div className="3 flex justify-center  lg:p-3 ">
                       
                        <div className="3 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{backgroundColor:"#335EF5", width: "fit-content"}}> React </div>
                        <div className="3 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox " style={{backgroundColor:"#00518D", width: "fit-content"}}> BootStrap </div>
                        <div className="3 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox " style={{backgroundColor:"#E41313", width: "fit-content"}}> Figma </div>
                        
                        </div>

                        </div>
                       </div>


                   </div>
                   
   
                   
            </div>

            <div className="flex justify-center mt-10">
              <div className="line"></div>
            </div>

            <div className="grid lg:flex justify-between">
              <div className="mt-20">
              <h2 className="text-4xl font-semibold text-center lg:text-start text-white mt-10" style={{color: "#1F2C3C"}}> Contact me </h2>
              <p className=" text-center lg:text-start mt-7 p-4 lg:p-0 mt-10 fontPP lg:mr-24" style={{color: "#1F2C3C"}}>Make sure to replace the User model with your actual model if it has a different name, and adjust the route and view names accordingly.   </p>
              <div className="flex justify-center lg:justify-start mt-10">
                <img className="w-10 h-10" style={{cursor: "pointer"}} src={linkedinIcom} onClick={() => window.location.assign("https://www.linkedin.com/in/sajad-kenani-518a8322a/")} /> 
                <img className="w-10 h-9" style={{marginTop: "6px", cursor: "pointer"}} src={instagramIcom} onClick={() => window.location.assign("https://www.instagram.com/____00boy/")}/> 
                <img className="w-10 h-10 "  style={{marginTop: "3px", cursor: "pointer"}} src={twitterIcon} onClick={() => window.location.assign("https://www.linkedin.com/in/sajad-kenani-518a8322a/")}/> 
              </div>
              </div>

              <div className="contactMainDiv">
                <div className="flex justify-between p-4">
                <div style={{width: "90%"}} className="pr-3">
                  <p className="font-semibold">First Name</p>
                  <input style={{width: "100%", height: "50px", backgroundColor: "#1f2c3c29", borderRadius: "3px", padding: "10px"}} />
                </div>
                <div style={{width: "90%"}}>
                  <p className="font-semibold">Last Name</p>
                  <input style={{width: "100%", height: "50px", backgroundColor: "#1f2c3c29", borderRadius: "3px", padding: "10px"}} />
                </div>
                </div>

                <div style={{width: "93.5%"}} className="ml-4">
                  <p className="font-semibold">Last Name</p>
                  <input style={{width: "100%", height: "50px", backgroundColor: "#1f2c3c29", borderRadius: "3px", padding: "10px"}} />
                </div>

                <div style={{width: "93.5%"}} className="ml-4 mt-4">
                  <p className="font-semibold">Message</p>
                  <textarea style={{width: "100%", height: "150px", backgroundColor: "#1f2c3c29", borderRadius: "3px", padding: "10px"}} />
                </div>

                <div className="flex justify-center lg:justify-start p-4 font-semibold"><button className="mySendButton"> Send! </button></div>
                I won't recieve your message (still working on it)



              </div>
            </div>

            
           <div className="flex justify-center mt-20">
              <div className="line"></div>
            </div>


            </div>}

            <div className="mt-14 "  style={{paddingTop: "40px", paddingBottom: "80px", backgroundColor: "#1f2c3c"}}>
               
            <h2 className="text-4xl font-semibold text-center lg:text-start text-white companiesPadding" style={{color: "#B3D5EE"}}> Companies I worked with </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2 divPadding" id="contactMeSection" >
             
                    <div className="flex justify-center"><img src={tntImage} className="h-28 mt-1" /></div>
                    <div className="flex justify-center"><img src={boxImage} className="h-32" /></div>
                    <div className="flex justify-center"><img src={malahihImage} className="h-20  mt-6" /></div>
                    <div className="flex justify-center"><img src={codeGxImage} className="h-28 mt-2" /></div>
                </div>

                
            </div>
        </div>
        </ScrollProvider>
    )
}