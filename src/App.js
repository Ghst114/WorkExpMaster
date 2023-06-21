import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable.js'
import Dropdown from './Dropdown';
import List from './List';
import Gallery from './Gallery';

function App() {
  const [selectedoption, setSelectedoption] = useState('Individual');

  return (
    <div className="App">
      <header className="App-header">      
        <h1><img src={logo} className="App-logo" alt="logo"/>Junior</h1>        
        <viewselecter> 
        {selectedoption === "Individual" ? <DataTable/>: null}
        {selectedoption === "List" ? <List/>: null}
        {selectedoption === "Gallery" ? <Gallery/>: null}
        </viewselecter>
      </header>
        <Dropdown selectedoption={selectedoption} setSelectedoption = {setSelectedoption}/>
<p>{selectedoption}</p>
    </div>
  );
}

export default App;