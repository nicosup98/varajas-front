import React, { useEffect } from 'react';
import '../css/App.css';
import audioFile from '../assets/musica2.mp3'; // Asegúrate de que la ruta sea correcta

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
    const audio = new Audio(audioFile);
    audio.play();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="animated-background">
      <div className="bubble-container">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div className="header">
        <nav>
          <img className="logo" src=".\src\css\logo_barajas (1).png" alt="logo" />
          <div>
            <button className="sign-in-button">Salir</button>
          </div>
        </nav>

        <div className="header-content">
          <h1>BARAJAS EL UNIVERSO DE LAS CARTAS</h1>
         
          <p>El universo de las barajitas a un clic</p>
        </div>
        
        <div className="button-container">
          <button className="large-button">Haz clic aquí</button>
        </div>
      </div>

      
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}


  

export default App;