import './App.css';

import { Upper } from './upper/Upper.js';
import { Content } from "./content/Content.js"
import { Footer } from './footer/Footer.js';
import { ScrollProvider } from './ScrollContext';

import { useState,useEffect } from 'react';





function App() {

const [scrolled, setScrolled] = useState(false);
const [myPadding, setMyPadding] = useState(window.innerWidth > 1000 ? 1200 : 1700);

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
}, [myPadding]); // Include myPadding in the dependency array

// Change background color based on the scroll state and scroll position
useEffect(() => {
  if (scrolled && window.scrollY <= 2000) {
    document.body.style.backgroundColor = '#B3D5EE';
  } else  {
    document.body.style.backgroundColor = '#1F2C3C';
  }
}, [scrolled]);
  
  return (
    <ScrollProvider>
    <div className="App">
      <Upper />
      <Content />
      <Footer />

    </div>
    </ScrollProvider>
  );
}

export default App;
