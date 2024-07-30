import React, { useEffect } from 'react';
import '../css/App.css'; 
import { Link } from "react-router-dom";
function App() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const bubbles = document.querySelectorAll('.bubble');
      bubbles.forEach((bubble) => {
        const x = event.clientX;
        const y = event.clientY;
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Reproducir el audio cuando el componente se monte
    //esta dando error
    // const audio = new Audio(audioFile);
    // audio.play();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="button-container h-[100vh]">
    </div>
        <div className="button-container">
          <div className="large-button" id="game1" onClick={() => handleNavigation('/varajas/perro')}></div>
          <div className="large-button" id="game2" onClick={() => handleNavigation('//varajas/pato')}></div>
          <div className="large-button" id="game3" onClick={() => handleNavigation('/varajas/pokemon')}></div>
          <div className="large-button" id="game4" onClick={() => handleNavigation('/varajas/anime')}></div>
          <div className="large-button" id="game5" onClick={() => handleNavigation('/varajas/rickymorty')}></div>
        </div>
      </div>
    </div>
  
  );
}




export default App;
