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
      const [secvalue, secsetvalue] = useState(true)
      
     
    
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
                <h2 className="text-4xl font-semibold text-center lg:text-start text-white pt-20" style={{color: "#B3D5EE"}}> Projects I made </h2>
        
                   <div ref={ref2} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-16 fade-up ${inView2 ? 'visible' : ''}`}>

                        {projectone && 
                        <div className=" justify-center mb-26 fade">
                        <div className="flex justify-center -mb-11 mt-6">
                            <img className="w-28" src={inBoxImage} />  
                        </div>
                        <div className="projectSquare-div  pt-14">

                        <p className="p-6 pt-8 font-semibold"> I played a pivotal role in the programming phase of this project, ensuring seamless functionality aligned with the designer's vision. </p> 
                        <div className="flex justify-center  pb-10 lg:pb-12 p-0 lg:p-4">
                           <div className="p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{backgroundColor:"#335EF5", width: "fit-content"}}> React </div>
                           <div className="p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{backgroundColor:"#33A3F5", width: "fit-content"}}> Tailwind </div>
                        </div>



                        </div>
                        <div className="flex justify-center" >
                           <button className="-mt-5 m-4 clickNe-btn" onClick={() => window.location.assign("https://inboxcompany.website/")}> Check It </button>
                        </div>
                       </div>}

                       {projecttwo && 
                       <div className=" justify-center mb-12 fade">
                        <div className="flex justify-center -mb-24">
                            <img className="w-60" src={whiteTigerImage} />  
                        </div>
                        <div className="projectSquare-div  pt-14">

                        <p className="p-6 pt-8 font-semibold">  I took the lead in programming for this project, meticulously bringing the designer's vision to life with flawless execution and precision. </p> 
                        <div className="flex justify-center  pb-10 lg:pb-12 p-0 lg:p-4">
                           <div className="p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{backgroundColor:"#335EF5", width: "fit-content"}}> React </div>
                           <div className="p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{backgroundColor:"#33A3F5", width: "fit-content"}}> Tailwind </div>
                        </div>



                        </div>
                        <div className="flex justify-center" >
                           <button className="-mt-5 m-4 clickNe-btn" onClick={() => window.location.assign("https://whitetigerdrink.com/")}> Check It </button>
                        </div>
                       </div>}


                       {projectthree && 
                       <div className=" justify-center mb-12 fade">
                        <div className="flex justify-center -mb-14 mt-1 lg:-mb-11 lg:mt-12">
                            <img className="w-40" src={codeGxImage} />  
                        </div>
                        <div className="projectSquare-div  pt-14">

                        <p className="p-6 pt-8 font-semibold">  I collaborated with the CodeGx team to bring this website to life. While they handled the design, I took charge of the programming. </p> 
                        <div className="flex justify-center  pb-10 lg:pb-12 p-0 lg:p-4">

                           <div className="p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7 " style={{backgroundColor:"#F55633", width: "fit-content"}}> HTML </div>
                           <div className="p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox " style={{backgroundColor:"#00518D", width: "fit-content"}}> BootStrap </div>

                           <div className="p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7 " style={{backgroundColor:"#EB9B00", width: "fit-content"}}> JavaScript </div>
                        
                        </div>



                        </div>
                        <div className="flex justify-center" >
                           <button className="-mt-5 m-4 clickNe-btn" onClick={() => window.location.assign("https://codegxiq.com/")}> Check It </button>
                        </div>
                       </div>}

                            
                       {projectfour &&  
                       <div className=" justify-center mb-24 fade">
                        <div className="flex justify-center -mb-14 -mt-1">
                            <img className="w-40" src={tntImage} />  
                        </div>
                        <div className="projectSquare-div  pt-14 pb-10">

                        <p className="p-6 pt-8 font-semibold"> I'm the creative force behind the design and programming of this website. Currently a work in progress, stay tuned for the exciting completion of this project!  </p> 
                        <div className="flex justify-center  lg:p-3 ">
                       
                        <div className="p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{backgroundColor:"#335EF5", width: "fit-content"}}> React </div>
                        <div className="p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox " style={{backgroundColor:"#00518D", width: "fit-content"}}> BootStrap </div>
                        <div className="p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox " style={{backgroundColor:"#E41313", width: "fit-content"}}> Figma </div>
                        
                        </div>

                        </div>
                        <div className="flex justify-center" >
                           <button className="-mt-5 m-4 clickNe-btn" onClick={() => window.location.assign("https://sajadkenani.github.io/tntdecoration/")}> Check It </button>
                        </div>
                       </div>}


                   </div>
                   
                   <h2 className="text-4xl font-semibold text-center lg:text-start text-white mt-20 mb-10" style={{color: "#B3D5EE"}}> What Im currently working on </h2>

                   <div className=" md:flex bg-white justify-between m-2 p-1 relative rounded" onMouseEnter={() => useprojectapperance(true)} onMouseLeave={() => useprojectapperance(false)}>
                    <div className="onProjectSquare-div"></div>
                    <div className="flex justify-start"><img className="bigImage" src={shopifyImage} /></div>
                    <div style={{width: "5px", height: "100%", backgroundColor: "white"}}></div>
                    <div className="flex justify-center"><img className="miniImage" src={shopifyMobileImage}/></div>
                    {projectapperance &&  <div className="myWorkingProjects  p-10 lg:pl-16">
                        <h3 className="text-white text-1xl text-center lg:text-start font-semibold w-80">I’m currently working on it. Do you want to see what I finished so far?</h3>
                        <div className="flex justify-start pt-4">
                            <button className="seeDesign-btn mr-4" onClick={() => document.location.assign("https://www.figma.com/file/ur004M63vCSpU88H70Jlpx/Shopify-Store?type=design&node-id=108-86&mode=design&t=Wd9cWJPfUaDrNcwI-0")}> See The Design </button>
                            <button className="seeCodes-btn" onClick={() => document.location.assign("https://github.com/SajadKenani/shopifyStore")}>  See The Codes </button>
                        </div>
                        
                        </div> }
                   </div>
                   
            </div>

            
           <div className="flex justify-center mt-20">
              <div className="line"></div>
            </div>

            <div className="mt-14 "  style={{paddingTop: "40px"}}>
                <h2 className="text-4xl font-semibold text-center lg:text-start text-white " style={{color: "#B3D5EE"}}> Companies I worked with </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2" id="contactMeSection">
                    <div className="flex justify-center"><img src={tntImage} className="h-28 mt-1" /></div>
                    <div className="flex justify-center"><img src={boxImage} className="h-32" /></div>
                    <div className="flex justify-center"><img src={malahihImage} className="h-20  mt-6" /></div>
                    <div className="flex justify-center"><img src={codeGxImage} className="h-28 mt-2" /></div>
                </div>

                
            </div>
            </div>}
        </div>
        </ScrollProvider>
    )
}