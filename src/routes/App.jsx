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
      <Link to="/varajas/perro" className="large-button cursor-pointer" id="game1">
      </Link>
      <Link to="/varajas/pato" className="large-button cursor-pointer" id="game2">
      </Link>
      <Link to="/varajas/pokemon" className="large-button cursor-pointer" id="game3">
      </Link>
      <Link to="/varajas/anime" className="large-button cursor-pointer" id="game4">
      </Link>
      <Link to="/varajas/RYM" className="large-button cursor-pointer" id="game5">
      </Link>
    </div>
  );
}




export default App;
