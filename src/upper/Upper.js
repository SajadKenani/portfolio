import React, { useEffect, useState } from "react";
import menu from "../images/menu.png";
import backMenu from "../images/back-menu.png";
import "../upper/Upper.css";
import { useRef } from 'react';
import { useScrollContext } from '../ScrollContext';

export const Upper = () => {
  const [scrollY, setScrollY] = useState(0);
  const [appearance, setAppearance] = useState(false);
  const [appearance1, setAppearance1] = useState(false);
  const [appearance2, setAppearance2] = useState(false);
  const [appearance3, setAppearance3] = useState(false);

  const [shownav, useshownav] = useState(false);

  const { scrollToSection } = useScrollContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect( () => {
    const myFunction = async () => {
    // Check if "mommory" is set to "value" in localStorage
    if (localStorage.getItem("mommory") === "value") {
      // Update all states to true
      setAppearance(true);
      setAppearance1(true);
      setAppearance2(true);
      setAppearance3(true);

    } 
}
myFunction()
  }, []); // Empty dependency array ensures that the effect runs once after the initial render



  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setAppearance(true);
    }, 8000);

    const timeout2 = setTimeout(() => {
      setAppearance1(true);
    }, 8500);

    const timeout3 = setTimeout(() => {
      setAppearance2(true);
    }, 9000);

    const timeout4 = setTimeout(() => {
      setAppearance3(true);
    }, 9500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);

  if (shownav){
    document.getElementById("main").classList.add("myOverflow")
    
  }

  const leaveNav = async () => {
    document.getElementById("myNav").classList.replace("nav", "reversedNav")
    document.getElementById("backgroundNav").classList.replace("background_nav", "reversedbackground_nav")
    await new Promise(resolve => setTimeout(resolve, 1000));
    useshownav(!shownav)

  }


  const handleClick = (myNum) => {
    scrollToSection(myNum);

 
  }

  
  const handleClickMobile = (myNum) => {
    scrollToSection(myNum);
    leaveNav()
 
  }

  const reactivateAnimation = () => {
    localStorage.setItem("mommory", "");
    window.location.reload()

  }

  return (
    <>
      <div id="main" style={{ position: "absolute", zIndex: "32434" }}>
      {shownav &&
        <>
        <div id="backgroundNav" className="background_nav" onClick={leaveNav}>
        </div>
        <div id="myNav" className="nav">
        <img id="myNavImage" src={backMenu} alt="Back Menu" className="w-12 a mt-2 ml-2" onClick={leaveNav} />

        <p className="text-start ml-6 mb-4 font-semibold" onClick={() => handleClickMobile(0)} > Home </p>
        <p className="text-start ml-6 mb-4 font-semibold" onClick={() => handleClickMobile(1)}> About me </p>
        <p className="text-start ml-6 mb-4 font-semibold" onClick={() => handleClickMobile(2)}> My work </p>
        <p className="text-start ml-6 mb-4 font-semibold" onClick={() => handleClickMobile(3)}> Contact me </p>

        <p className="text-start ml-6 mb-4 font-semibold mt-20"> Want to see the animation again? <span style={{color: "red", cursor: "pointer"}} onClick={reactivateAnimation}> Reactive it! </span> </p>
        </div>
        </>}
        <div
          className={
            scrollY > 150
              ? "fixed justify-start mainUpperDivHover  mt-2 hidden lg:flex"
              : "fixed justify-start mainUpperDiv  mt-2 hidden lg:flex"
          }
        >
          {appearance && (
            <a
              className="m-2 text-lg"
              style={{
                cursor: "pointer",
                margin: "20px",
                marginTop: "35px",
                fontSize: "1rem",
                color: scrollY > 150 ? "#B3D5EE" : "initial",
              }}
              onClick={() => handleClick(0)} 
            >
              Home
            </a>
          )}
          {appearance1 && (
            <a
              className="m-2 text-lg"
              style={{
                cursor: "pointer",
                margin: "20px",
                marginTop: "35px",
                fontSize: "1rem",
                color: scrollY > 150 ? "#B3D5EE" : "initial",
              }}
              onClick={() => handleClick(1)} 
            >
              About me
            </a>
          )}
          {appearance2 && (
            <a
              className="m-2 text-lg"
              style={{
                cursor: "pointer",
                margin: "20px",
                marginTop: "35px",
                fontSize: "1rem",
                color: scrollY > 150 ? "#B3D5EE" : "initial",
              }}
              onClick={() => handleClick(2)}
            >
              My work
            </a>
          )}
          {appearance3 && (
            <a
              className="m-2 text-lg"
              style={{
                cursor: "pointer",
                margin: "20px",
                marginTop: "35px",
                fontSize: "1rem",
                color: scrollY > 150 ? "#B3D5EE" : "initial",
              }}
              onClick={() => handleClick(3)}
            >
              Contact me
            </a>
          )}
        </div>

        <div className="flex justify-center mainUpperDivMobile fixed lg:hidden mt-6">
          {appearance && <img id="myNavImage" src= {menu} alt="menu" className= "w-14 b" onClick={() => useshownav(!shownav)} />}
        </div>  



      </div>
    </>
  );
};
