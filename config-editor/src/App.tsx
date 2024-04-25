import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';

function App() {
  const appName = 'config-editor'

  return (
    <div>
        <Navbar appName={appName} />
        <div className="Content">
          <div className="Options"></div>
          <textarea className='Config-output' name="" id="" cols={50} rows={10}></textarea>
        </div>
    </div>
  );
}

export default App;
