import React from 'react';

import './App.css';
import ControlPanel from './compoents/ControlPanel';
import Apage from './compoents/Apage';
import Bpage from './compoents/Bpage';
import Cpage from './compoents/Cpage';

function App() {
  return (
    <div className="App">
      <ControlPanel></ControlPanel>
      <Apage></Apage>
      <Bpage></Bpage>
      <Cpage></Cpage>
      
    </div>
  );
}

export default App;
