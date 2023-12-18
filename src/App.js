import React, { useState } from 'react';

import './App.css';


function App() {
  const [count, setCount] = useState(0);

  function increament(){
      setCount(count+1);
  }
  function decreament(){
     setCount(count-1);
  }

  return (
    <div className="App">
      <div>
        Increament and Decreament
      </div>
      
      <div>
        <button onClick={decreament}>
          -
        </button>
        <div className="display">{count}</div>
        <button onClick={increament}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
