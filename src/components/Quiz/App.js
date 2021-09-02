import React, { useState } from 'react'
import './App.css'
import Start from './Start'
import Quiz from './Quiz'

function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <Quiz /> : <Start props={setStart} />} 
    </div>
  );
}

export default App;
