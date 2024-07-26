import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <nav>
          <img className="logo" src="./Assets/logo.png" alt="logo" />
          <div>
            <button className="sign-in-button">Sign In</button>
          </div>
        </nav>

        <div className="header-content">
          <h1>Unlimited POPCORN, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        
        <div className="button-container">
          <button className="large-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default App;