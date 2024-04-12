import { createContext, useContext, useState } from 'react';


const ScrollContext = createContext();

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const [item, useitem] = useState("english"); // i want to use this in another script

  const scrollToSection = (num) => {
  if (num === 0){
    const element = document.getElementById("mainSection");
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    }}

   if (num === 1){
        const element = document.getElementById("aboutMeSection");
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    }}

    if (num === 2){
        const element = document.getElementById("projectsSection");
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    }}


        if (num === 3){
            const element = document.getElementById("contactMeSection");
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
        }}

        if (num === 8){
          if (item === "english"){
          useitem("arabic")}
          else {useitem("english")}
        console.log(item)
        }
   
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, item }}>
      {children}
    </ScrollContext.Provider>
  );
};