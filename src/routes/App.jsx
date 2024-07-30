import React, { useEffect, useMemo, useState } from 'react';
import '../css/App.css'; 
import { Link } from "react-router-dom";
function App() {
  const [loading,setLoading] = useState(false)

  const cursorStyle = useMemo(()=>loading? "cursor-progress": "cursor-pointer",[loading])

  function handleLoading() {
    setLoading(true)
  }
  return (
    <div className={"flex flex-col xl:flex-row my-2 xl:my-0 justify-around items-center h-[80vh] gap-3 overflow-y-auto over " + cursorStyle}>

      <Link to="/barajas/perro" className="large-button cursor-pointer" id="game1" onClick={handleLoading}>
      </Link>
      <Link to="/barajas/pato" className="large-button cursor-pointer" id="game2">
      </Link>
      <Link to="/barajas/pokemon" className="large-button cursor-pointer" id="game3">
      </Link>
      <Link to="/barajas/anime" className="large-button cursor-pointer" id="game4">
      </Link>
      <Link to="/barajas/RYM" className="large-button cursor-pointer" id="game5">
      </Link>
    </div>
  );
}




export default App;
