import "../content/Content.css"

import { useState, useEffect } from "react"

import mountain from "../images/mountain.png"
import inBoxImage from "../images/in_box_icon_blue.png"
import whiteTigerImage from "../images/whiteTigerImage.png"
import tntImage from "../images/TNTImage.png"
import starImage from "../images/star.png"
import shopifyImage from "../images/shopifyImage.png"
import shopifyMobileImage from "../images/shopifyMobileImage.png"
import malahihImage from "../images/malamihImage.png"
import boxImage from "../images/mainInBox.png"
import codeGxImage from "../images/codeGxImage.png"
import beaconImage from "../images/beacon.webp"
import yamanImage from "../images/yaman.webp"

import instagramIcom from "../images/Instagram.png"
import linkedinIcom from "../images/linkedIn.png"
import twitterIcon from "../images/Twitter.png"

import { useInView } from 'react-intersection-observer';

import { ScrollProvider, useScrollContext } from '../ScrollContext';

import { useRef } from 'react';
import emailjs from 'emailjs-com';
import pdf from "../content/pdf.pdf"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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
    const [myfigma,  usemyfigma] = useState(false)
    const [myphoto,  usemyphoto] = useState(false)
    const [mynode,   usemynode] = useState(false)
    const [mygithub, usemygithub] = useState(false)


    const [projectone, useprojectone] = useState(false)
    const [projecttwo, useprojecttwo] = useState(false)
    const [projectthree, useprojectthree] = useState(false)
    const [projectfour, useprojectfour] = useState(false)

    const [button, usebutton] = useState(false);

    const [techparaone, usetechparaone] = useState(false);
    const [techparatwo, usetechparatwo] = useState(false);

    const { scrollToSection } = useScrollContext();
    const { item } = useScrollContext();
    

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
          usemyfigma(true)
          usemyphoto(true)
          usemynode(true)
          usemygithub(true)
   

        setMainmessage(item === "english" ? `With over two years of expertise, I specialize in designing and coding websites using the latest technologies. I ensure seamless functionality across all devices. Let's collaborate on your website project or check out  my projects for a glimpse of my work, or contact me to start working on your website!` : "تمتلك خبرة تزيد عن سنتين في تصميم وبرمجة مواقع الويب باستخدام أحدث التقنيات. أضمن الوظائف السلسة عبر جميع الأجهزة. دعنا نتعاون في مشروع موقعك الإلكتروني أو تفقد مشاريعي للحصول على نظرة عامة على عملي، أو تواصل معي لبدء العمل على موقعك الإلكتروني!")
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
 
      let [paragraph, useparagraph] = useState(item === "english" ? `With over two years of expertise, I specialize in designing and coding websites using the latest technologies. I ensure seamless functionality across all devices. Let's collaborate on your website project or check out  my projects for a glimpse of my work, or contact me to start working on your website!` : "امتلك خبرة تزيد عن سنتين في تصميم وبرمجة مواقع الويب باستخدام أحدث التقنيات. بضمان التوافق مع جميع الأجهزة. دعنا نتعاون في مشروع موقعك الإلكتروني أو تفقد مشاريعي للحصول على نظرة عامة على عملي، أو تواصل معي لبدء العمل على موقعك الإلكتروني");

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
          
          setTimeout(() => updateMessage(index + 1), 20);
}
        }
      };

      useEffect(() => {
        setMainmessage(item === "english" ? `With over two years of expertise, I specialize in designing and coding websites using the latest technologies. I ensure seamless functionality across all devices. Let's collaborate on your website project or check out  my projects for a glimpse of my work, or contact me to start working on your website!` : "امتلك خبرة تزيد عن سنتين في تصميم وبرمجة مواقع الويب باستخدام أحدث التقنيات. بضمان التوافق مع جميع الأجهزة. دعنا نتعاون في مشروع موقعك الإلكتروني أو تفقد مشاريعي للحصول على نظرة عامة على عملي، أو تواصل معي لبدء العمل على موقعك الإلكتروني");
        useparagraph(item === "english" ? `With over two years of expertise, I specialize in designing and coding websites using the latest technologies. I ensure seamless functionality across all devices. Let's collaborate on your website project or check out  my projects for a glimpse of my work, or contact me to start working on your website!` : "امتلك خبرة تزيد عن سنتين في تصميم وبرمجة مواقع الويب باستخدام أحدث التقنيات. بضمان التوافق مع جميع الأجهزة. دعنا نتعاون في مشروع موقعك الإلكتروني أو تفقد مشاريعي للحصول على نظرة عامة على عملي، أو تواصل معي لبدء العمل على موقعك الإلكتروني");

      
      }, [item]); 

   

        if(inView){
           
            const myFuntion = async () =>{
                if (secvalue){
                    
                    setMainmessage(0)
                    updateMessage(0);
                    secsetvalue(false)
                }
            await new Promise(resolve => setTimeout(resolve, 8000));
            usebutton(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            usetechparaone(true)
  

            await new Promise(resolve => setTimeout(resolve, 300));
            usemyhtml(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            usemycss(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            usemyjavascript(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            usemyreact(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            usemybootstrap(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            usemytailwind(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            usemycharp(true)

            await new Promise(resolve => setTimeout(resolve, 300));
            usemyfigma(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            usemynode(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            usemygithub(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            usemyphoto(true)
    
    
        
        }
        myFuntion()
          }

          if(inView2){
           
            const myFuntion = async () =>{


            await new Promise(resolve => setTimeout(resolve, 0));
            useprojectone(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            useprojecttwo(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            useprojectthree(true)
            await new Promise(resolve => setTimeout(resolve, 300));
            useprojectfour(true)

        
        }
        myFuntion()
          }

          const [scrolled, setScrolled] = useState(false);
          const [myPadding, setmypadding] = useState(window.innerWidth > 1000 ? 1200 : 1500);
        
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
             const myProjectsElements = document.querySelectorAll(".myProjects");
           
             if (myProjectsElements) {
               myProjectsElements.forEach((element) => {
                 if (scrolled) {
                   element.style.color = '#1F2C3C'; // Change to your desired color
                 } else {
                   element.style.color = '#B3D5EE'; // Change to your desired color
                 }
               });
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

          const [messagesent, setmessagesent] = useState(false)

          const sendEmail = (e) => {
            e.preventDefault();
          
            // Assuming 'form' is a ref pointing to your form element
            emailjs.sendForm('service_y0yhw2l', 'template_wvuczkj', e.target, 'aLeZggOZT_un3T-tV')
              .then((result) => {
                console.log(result.text);
                setmessagesent(true)
          
              })
              .catch((error) => {
                console.error('Email error:', error);
              });
          };


          const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true, // Add autoplay property
            autoplaySpeed: 520, // Set autoplay speed (in milliseconds)
            arrows: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        
    return (
        <ScrollProvider>
        <div id="mainSection">
   
            <img
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              position: "relative",
              zIndex: "32",
              overflow: "hidden"
            }}
            id="myImage"
            className="-mt-2 image"
            src={mountain}
          />
         
                 {contactme && (
            <div onClick={() => usecontactme(false)} className="flex justify-center outerFormPage">
              <div className="formPage"></div>
            </div>
          )}

           { appearence &&
            <><div className="mainDiv">

              <div className="flex justify-center miniDiv" id="myMiniDiv" style={{ position: 'relative', zIndex: "37987924", marginTop: "-530px", zIndex: "243" }}>
                <div style={{position: 'relative', width: "100%", zIndex: "243242"}}>
                {appearence1 && <h2 style={{fontFamily: "Tajawal"}} id="myH2" className={`h2 text-4xl font-semibold text-center ${item === "arabic" ? "lg:text-end" : "lg:text-start"}`}> 
                {item === "arabic" ? "اهلا" : "Hi,"}  </h2>}
                {appearence2 && <h2 style={{fontFamily: "Tajawal"}} id="myH3" className={`h2 text-4xl font-semibold text-center ${item === "arabic" ? "lg:text-end" : "lg:text-start"}`}> 
                {item === "arabic" ? "انا سجاد" : "I'm Sajad"} </h2>}
                {appearence3 && <h2 style={{fontFamily: "Tajawal"}} id="myH4" className={`h2 text-4xl font-semibold text-center ${item === "arabic" ? "lg:text-end" : "lg:text-start"}`}> 
                {item === "arabic" ? "مطور مواقع الكترونية " : "Websites Developer"}  </h2>}


                  {appearence4 && (
                      <div className={`flex justify-center ${item === "arabic" ? "lg:justify-end" : "lg:justify-start"}`}>
                        <button
                          id="myButton"
                          className="mt-16 m-4 ml-0 mr-4 knowMore-btn"
                          style={{fontFamily: "Tajawal"}}
                          onClick={() => handleClick(1)}
                        >
                          {item === "arabic" ? "اعرف اكثر" : "Learn more!"}
                        </button>
                        <button
                          id="myButton"
                          className="mt-16 m-4 ml-0 mr-0 hireMe-btn"
                          style={{fontFamily: "Tajawal"}}
                          onClick={() => handleClick(3)}
                        >
                           {item === "arabic" ? "اطلب الان " : "Order now!"}
                        </button>
                      </div>
                    )}

                </div>
              </div>

              <div className="flex justify-center mt-80">
                <div className="line"></div>
              </div>

              <div className={` grid lg:flex justify-center lg:justify-between pt-20 fade-up ${inView ? 'visible' : ''}`} id="aboutMeSection">
                <div ref={ref} className=" mt-14 ml-0 lg:ml-4 ">
                  <h2 className={`text-4xl font-semibold text-center ${item === "arabic" ? "lg:text-end" : "lg:text-start"} text-white lg:mr-20`} style={{ color: "#B3D5EE", fontFamily: "Tajawal" }}>  {item === "arabic" ? "من انا؟   " : " Who am I?"}  </h2>
                  <p className={` text-center ${item === "arabic" ? "lg:text-end" : "lg:text-start"} p-4 lg:p-0 mt-10 fontP lg:mr-20`} style={{ color: "#809EB5", fontFamily: "Tajawal" }}>{mainmessage.split(",").join("")}</p>



                  {button && <div className={`lg:mr-20 flex justify-center ${item === "arabic" ? "lg:justify-end" : "lg:justify-start"}`}>
                    <div className={`flex justify-center ${item === "arabic" ? "lg:justify-end" : "lg:justify-start"} h-12   mt-10`}>
                      <button className=" cv-btn rounded" onClick={() => {
               
                        var downloadLink = document.createElement("a");
                        downloadLink.href = pdf;
                        downloadLink.download = "My CV-Resume.pdf";
                        document.body.appendChild(downloadLink);
                        downloadLink.click();
                
                        document.body.removeChild(downloadLink);}}> {item === "arabic" ? "السيرة الذاتية " : " CV/Resume"}  </button>
                    </div>
                  </div>}
                </div>

                <div className=" mt-10">
                  {techparaone && <p className={` text-center ${item === "arabic" ? "lg:text-center lg:-ml-10" : "lg:text-start "} p-4 lg:p-0 mt-6 fontP text-2xl fade myProjects ` }style={{ color: "#809EB5", fontFamily: "Tajawal" }}> {item === "arabic" ? "مهاراتي " : " My Skills!"}  </p>}

                  <div className=" pt-6 ">

                    <div className={`flex justify-center ${item === "arabic" ? "lg:justify-end lg:mr-60" : "lg:justify-start "}`}>
                      {myhtml && <div className={`fade p-3 pt-0 pb-1 text-white font-semibold rounded miniBox h-7 `} style={{ backgroundColor: "#F55633", width: "fit-content",fontFamily: "Tajawal" }}> HTML </div>}
                      {mycss && <div className={`fade p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox`} style={{ backgroundColor: "#30548D", width: "fit-content", fontFamily: "Tajawal" }}> CSS </div>}
                      {myjavascript && <div className={`fade p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7`} style={{ backgroundColor: "#EB9B00", width: "fit-content", fontFamily: "Tajawal" }}> JavaScript </div>}
                      {myreact && <div className={`fade p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox`} style={{ backgroundColor: "#335EF5", width: "fit-content", fontFamily: "Tajawal" }}> React </div>}
                    </div>

                    <div className={`flex mt-2 justify-center ${item === "arabic" ? "lg:justify-end lg:mr-60" : "lg:justify-start "}`}>
                      {mybootstrap && <div className={`fade p-3 pt-0 pb-1 text-white font-semibold rounded  miniBox `} style={{ backgroundColor: "#00518D", width: "fit-content", fontFamily: "Tajawal" }}> BootStrap </div>}
                      {mytailwind && <div className={`fade p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox `} style={{ backgroundColor: "#33A3F5", width: "fit-content", fontFamily: "Tajawal" }}> Tailwind </div>}
                      {mycharp && <div className={`fade p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox `} style={{ backgroundColor: "#285b23", width: "fit-content", fontFamily: "Tajawal" }}> C# </div>}
                      {myfigma && <div className="fade p-3 pt-0 pb-1 text-white font-semibold rounded miniBox ml-2" style={{ backgroundColor: "#30548D", width: "fit-content", fontFamily: "Tajawal" }}> Figma </div>}
                    </div>
                    <div className={`flex mt-2 justify-center ${item === "arabic" ? "lg:justify-end lg:mr-60" : "lg:justify-start "}`}>
                      {mynode && <div className={`fade p-3 pt-0 pb-1 text-white font-semibold rounded  miniBox `} style={{ backgroundColor: "#EB9B00", width: "fit-content", fontFamily: "Tajawal" }}> Node.js </div>}
                      {mygithub && <div className={`fade p-3 pt-0 pb-1 text-white font-semibold rounded  miniBox ml-2`} style={{ backgroundColor: "gray", width: "fit-content", fontFamily: "Tajawal" }}> Github </div>}
                      {myphoto && <div className="fade p-3 pt-0 pb-1 text-white font-semibold rounded miniBox ml-2" style={{ backgroundColor: "#30548D", width: "fit-content", fontFamily: "Tajawal" }}> Photoshop </div>}
                    </div>

                  </div>

       


                </div>
              </div>

              <div className="flex justify-center mt-40 -mb-20">
                <div className="line"></div>
              </div>

              <div className="d-flex justify-center mt-20  " style={{ paddingTop: "40px" }} id="projectsSection">
                <h2 className={`text-4xl font-semibold text-center ${item === "english" ? "lg:text-start" : "lg:text-end"} pt-20 myProjects`} style={{ color: "#B3D5EE", fontFamily: "Tajawal" }}> {item === "arabic" ? "مشاريع أنجزتها" : " Projects I made!"}  </h2>

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 `}>

                <div className="0 justify-center fade">
                    <div className="0 flex justify-center -mb-14 " style={{marginTop: "-2px"}}>
                      <img className="0 w-32 -mt-7" src={starImage} style={{filter: "drop-shadow(7px 7px 0px rgba(0, 0, 0, 0.446))"}} />
                    </div>
                    <div className="0 projectSquare-div  pt-14 pb-10 d-4" style={{ cursor: "pointer" }} onClick={() => window.open("https://baghdadstar.online")} onMouseEnter={mouseEnterProject} onMouseLeave={mouseLeaveProject}>
                      <div className="0 flex justify-center pt-2"><p className="0 pt-0 font-light text-3xl myPara" style={{fontFamily: "Tajawal"}}>  {item === "arabic" ? "نجمة بغداد" : " Baghdad Star"} </p> </div>
                      <p className="0 p-6 pt-4 font-semibold para" style={{fontFamily: "Tajawal"}}>{item === "english" ? "This website facilitates the process of hiring house workers through a user-friendly interface and efficient functionality. It reflects my dedication to creating accessible and effective solutions for everyday tasks  " : "يُسهّل هذا الموقع عملية توظيف عمال المنازل من خلال واجهة مستخدم سهلة الاستخدام ووظائف فعّالة. إنه يعكس التفاني الذي أبديته في إيجاد حلول متاحة وفعّالة للمهام اليومية"}</p>
                      <div className="0 flex justify-center  lg:p-3 ">

                        <div className="0 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{ backgroundColor: "#335EF5", width: "fit-content" }}> React </div>
                        <div className="0 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{ backgroundColor: "#33A3F5", width: "fit-content" }}> Tailwind </div>
                        <div className="0 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox " style={{ backgroundColor: "gray", width: "fit-content" }}> Github APIs</div>
                      </div>
                     

                    </div>
                  </div>

                  <div className="1 justify-center fade">
                    <div className="1 flex justify-center -mb-14 " style={{marginTop: "-2px"}}>
                      <img className="1 w-28 -mt-9" src={yamanImage} style={{filter: "drop-shadow(7px 7px 0px rgba(0, 0, 0, 0.446))"}} />
                    </div>
                    <div className="1 projectSquare-div  pt-14 pb-10 d-4" style={{ cursor: "pointer" }} onClick={() => window.open("https://yamanalkhair.com/")} onMouseEnter={mouseEnterProject} onMouseLeave={mouseLeaveProject}>
                      <div className="1 flex justify-center pt-2"><p className="1 pt-0 font-light text-3xl myPara" style={{fontFamily: "Tajawal"}}>  {item === "arabic" ? " يمان الخير" : " Yaman Al-Khair"}  </p> </div>
                      <p className="1 p-6 pt-4 font-semibold para" style={{fontFamily: "Tajawal"}}> {item === "english" ? "Discover a website I recently designed and programmed. It's a project I'm proud of, blending thoughtful design with functional programming. Take a look around and see what you think! " : "اكتشف موقعًا قمت بتصميمه وبرمجته مؤخرًا. إنه مشروع أفتخر به، حيث يمزج بين التصميم المدروس وتوظيف البرمجة فيه"}</p>
                      <div className="1 flex justify-center  lg:p-3 ">

                      <div className="1 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7 " style={{ backgroundColor: "#F55633", width: "fit-content" }}> HTML </div>
                        <div className="1 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox " style={{ backgroundColor: "#00518D", width: "fit-content" }}> BootStrap </div>

                        <div className="1 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7 " style={{ backgroundColor: "#EB9B00", width: "fit-content" }}> JavaScript </div>

                      </div>
                     

                    </div>
                  </div>

                  <div className="2 justify-center fade">
                    <div className="2 flex justify-center -mb-14 " style={{marginTop: "-2px"}}>
                      <img className="2 w-32 -mt-7" src={beaconImage} style={{filter: "drop-shadow(7px 7px 0px rgba(0, 0, 0, 0.446))"}} />
                    </div>
                    <div className="2 projectSquare-div  pt-14 pb-10 d-4" style={{ cursor: "pointer" }} onClick={() => window.open("https://baghdad-beacon.iq")} onMouseEnter={mouseEnterProject} onMouseLeave={mouseLeaveProject}>
                      <div className="2 flex justify-center pt-2"><p className="2 pt-0 font-light text-3xl myPara" style={{fontFamily: "Tajawal"}}>  {item === "arabic" ? "منارة بغداد" : " Baghdad Beacon"}  </p> </div>
                      <p className="2 p-6 pt-4 font-semibold para" style={{fontFamily: "Tajawal"}}> {item === "english" ? "Explore my latest website creation, meticulously designed and programmed for a seamless user experience. Dive in and discover the perfect blend of form and function." : "استكشف أحدث مواقع الويب الخاصة بي، التي صممت وبرمجت بعناية فائقة لتوفير تجربة مستخدم سلسة. اغمر نفسك واكتشف الجمع المثالي بين الشكل والوظيفة"}  </p>
                      <div className="2 flex justify-center  lg:p-3 ">

                      <div className="2 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7 " style={{ backgroundColor: "#F55633", width: "fit-content" }}> HTML </div>
                        <div className="2 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox " style={{ backgroundColor: "#00518D", width: "fit-content" }}> BootStrap </div>

                        <div className="2 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7 " style={{ backgroundColor: "#EB9B00", width: "fit-content" }}> JavaScript </div>

                      </div>
                     

                    </div>
                  </div>



                  <div className="3 justify-center mb-26 fade">
                    <div className="3 flex justify-center -mb-11 mt-6">
                      <img className="3 w-28" src={inBoxImage} />
                    </div>
                    <div className="3 projectSquare-div  pt-14" style={{ cursor: "pointer" }} onClick={() => window.open("https://sajadkenani.github.io/boxProject/")} onMouseEnter={mouseEnterProject} onMouseLeave={mouseLeaveProject}>
                      <div className="3 flex justify-center -pt-4 "><p className="3 pt-0 font-light text-3xl myPara" style={{fontFamily: "Tajawal"}}>  {item === "arabic" ? " داخل الصندوق" : " In Box Company"} </p> </div>
                      <p className="3 p-6 pt-4 font-semibold para" style={{fontFamily: "Tajawal"}}> {item === "english" ? "I played a pivotal role in the programming phase of this project, ensuring seamless functionality aligned with the designer's vision." : "لعبت دوراً حيوياً في مرحلة البرمجة في هذا المشروع، مضموناً وظائف سلسة تماشياً مع رؤية المصمم"} </p>
                      <div className="3 flex justify-center  pb-10 lg:pb-12 p-0 lg:p-4">
                        <div className="3 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{ backgroundColor: "#335EF5", width: "fit-content" }}> React </div>
                        <div className="3 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{ backgroundColor: "#33A3F5", width: "fit-content" }}> Tailwind </div>
                      </div>



                    </div>
                  </div>

                  <div className="4 justify-center mb-12 fade">
                    <div className="4 flex justify-center -mb-24">
                      <img className="4 w-60" src={whiteTigerImage} />
                    </div>
                    <div className="4 projectSquare-div  pt-14 d-2" style={{ cursor: "pointer" }} onClick={() => window.open("https://whitetigerdrink.com/")} onMouseEnter={mouseEnterProject} onMouseLeave={mouseLeaveProject}>
                      <div className="4 flex justify-center -pt-4"><p className="4 pt-0 font-light text-3xl myPara"  style={{fontFamily: "Tajawal"}}>  {item === "arabic" ? "وايت تايجر" : " White Tiger Drinl"} </p> </div>
                      <p className="4 p-6 pt-4 font-semibold para" style={{fontFamily :"Tajawal"}}> {item === "english" ? "I took the lead in programming for this project, meticulously bringing the designer's vision to life with flawless execution and precision." : "لقد قمت بقيادة عملية البرمجة لهذا المشروع، حيث قمت بتحويل رؤية المصمم إلى واقع بدقة وتنفيذ متقن"} </p>
                      <div className="4 flex justify-center  pb-10 lg:pb-12 p-0 lg:p-4">
                        <div className="4 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{ backgroundColor: "#335EF5", width: "fit-content" }}> React </div>
                        <div className="4 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox" style={{ backgroundColor: "#33A3F5", width: "fit-content" }}> Tailwind </div>
                      </div>



                    </div>
                  </div>


                  <div className="5 justify-center mb-12 fade">
                    <div className="5 flex justify-center -mb-14 mt-1 lg:-mb-11 lg:mt-12">
                      <img className="5 w-40" src={codeGxImage} />
                    </div>
                    <div className="5 projectSquare-div  pt-14 d-3" style={{ cursor: "pointer" }} onClick={() => window.open("https://codegxiq.com/")} onMouseEnter={mouseEnterProject} onMouseLeave={mouseLeaveProject}>
                      <div className="5 flex justify-center -pt-4"><p className="5 pt-0 font-light text-3xl myPara"  style={{fontFamily: "Tajawal"}}>  {item === "arabic" ? " كود جي اكس" : " CodeGX Company"}</p> </div>
                      <p className="5 p-6 pt-4 font-semibold para" style={{fontFamily: "Tajawal"}}>  {item === "english" ? "I collaborated with the CodeGx team to bring this website to life. While they handled the design, I took charge of the programming." : "لقد تعاونت مع فريق محترف لجلب هذا الموقع إلى الحياة. بينما قاموا بالتصميم، فقد توليت مسؤولية البرمجة"} </p>
                      <div className="5 flex justify-center  pb-10 lg:pb-12 p-0 lg:p-4">

                        <div className="5 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7 " style={{ backgroundColor: "#F55633", width: "fit-content" }}> HTML </div>
                        <div className="5 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox " style={{ backgroundColor: "#00518D", width: "fit-content" }}> BootStrap </div>

                        <div className="5 p-3 pt-0 pb-1 text-white font-semibold rounded ml-2 miniBox h-7 " style={{ backgroundColor: "#EB9B00", width: "fit-content" }}> JavaScript </div>

                      </div>



                    </div>
                  </div>



 
                </div>



              </div>

              <div className="flex justify-center mt-10">
                <div className="line"></div>
              </div>

              <div className="grid lg:flex justify-between" id="contactMeSection">
                <div className="mt-20">
                  <h2 className={`text-4xl font-semibold text-center ${item === "english" ? "lg:text-start" : "lg:text-end lg:mr-20"} text-white mt-10`} style={{ color: "#1F2C3C", fontFamily: "Tajawal" }}> {item === "english" ? "Contact me!" : "تواصل معي"} </h2>
                  <p className={`text-center ${item === "english" ? "lg:text-start" : "lg:text-end lg:mr-20"} mt-7 p-4 lg:p-0 mt-10 fontPP lg:mr-24`} style={{ color: "#1F2C3C", fontFamily: "Tajawal" }}>{item === "english" ? "Got a question or project in mind? Let's chat! Reach out to me at my social media or leave me a message and let's get the conversation started!" : "هل لديك سؤال أو مشروع في ذهنك؟ دعنا نتحدث! تواصل معي عبر وسائل التواصل الاجتماعي الخاصة بي أو اترك لي رسالة ولنبدأ الحديث"}  </p>
                  <div className={`flex justify-center ${item === "english" ? "lg:justify-start" : "lg:justify-end lg:mr-20"} mt-10`}>
                    <img className="w-10 h-10" style={{ cursor: "pointer" }} src={linkedinIcom} onClick={() => window.location.assign("https://www.linkedin.com/in/sajad-kenani-518a8322a/")} />
                    <img className="w-10 h-9" style={{ marginTop: "6px", cursor: "pointer" }} src={instagramIcom} onClick={() => window.location.assign("https://www.instagram.com/____00boy/")} />
                    <img className="w-10 h-10 " style={{ marginTop: "3px", cursor: "pointer" }} src={twitterIcon} onClick={() => window.location.assign("https://x.com/MRGolar?t=rFaB8INFwUtoB2BBWrv-5w&s=09")} />
                  </div>
                </div>

                <form className="contactMainDiv" onSubmit={sendEmail}>
                  <div className="flex justify-between p-4">
                    <div style={{ width: "100%" }} className="pr-3">
                      <p className="font-semibold" style={{fontFamily: "Tajawal"}}> {item === "english" ? "Full Name" : "الاسم الكامل"}</p>
                      <input name="name" style={{ width: "100%", height: "50px", backgroundColor: "#1f2c3c29", borderRadius: "3px", padding: "10px" }} required/>
                    </div>
                  </div>

                  <div style={{ width: "93.5%" }} className="ml-4">
                    <p className="font-semibold" style={{fontFamily: "Tajawal"}}>{item === "english" ? "Phone Number" : "رقم الهاتف "}</p>
                    <input name="phone" style={{ width: "100%", height: "50px", backgroundColor: "#1f2c3c29", borderRadius: "3px", padding: "10px" }} required/>
                  </div>

                  <div style={{ width: "93.5%" }} className="ml-4 mt-4">
                    <p className="font-semibold" style={{fontFamily: "Tajawal"}}>{item === "english" ? "Message" : "الرسالة "}</p>
                    <textarea name="message" style={{ width: "100%", height: "150px", backgroundColor: "#1f2c3c29", borderRadius: "3px", padding: "10px" }} required/>
                  </div>

                  <div className="flex justify-center lg:justify-start p-4 font-semibold">{!messagesent && <button className="mySendButton" style={{fontFamily: "Tajawal"}}>{item === "english" ? "Send!" : "ارسال "} </button>}</div>

                  {messagesent && <p className="text-center ml-10" style={{fontFamily: "Tajawal"}}> {item === "english" ? "Your message was sent!" : "تم ارسال رسالتك"} </p>}




                </form>
              </div>


              <div className="flex justify-center mt-20">
                <div className="line"></div>
              </div>


            </div><div className="mt-14 " style={{ paddingTop: "40px", paddingBottom: "80px", backgroundColor: "#1f2c3c" }}>

                <h2 className={`text-4xl font-semibold text-center ${item === "english" ? "lg:text-start" : "lg:text-end" } text-white companiesPadding`} style={{ color: "#B3D5EE", fontFamily: "Tajawal" }}> {item === "english" ? "Companies I worked with" : "شركات عملت معها"} </h2>
                <div className=" grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2 divPadding" >

                <Slider {...settings}>
                  <div className="flex justify-center"><img src={tntImage} className="h-28 mt-1" alt="TNT" /></div>
                  <div className="flex justify-center"><img src={boxImage} className="h-32" alt="Box" /></div>
                  <div className="flex justify-center"><img src={malahihImage} className="h-20  mt-6" alt="Malahih" /></div>
                  <div className="flex justify-center"><img src={codeGxImage} className="h-28 mt-2" alt="CodeGx" /></div>
                  <div className="flex justify-center lg:-mr-6"><img src={yamanImage} className="h-36 -mt-2 " alt="Yaman" /></div>
                </Slider>

                </div>


              </div></>}
        </div>
        </ScrollProvider>
    )
}
