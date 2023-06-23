import React, { useState, useEffect, ReactDOM } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable.js'
import Dropdown from './Dropdown';
import List from './List';
import Gallery from './Gallery';
import DropdownSort from './DropdownSort';
import SortAZ from './SortAZ';
import SortZA from './SortZA';
import SortAZCategory from './SortAZCategory';
import SortZACategory from './SortZACategory';
import SortAZPrice from './SortAZPrice';
import SortZAPrice from './SortZAPrice'

function App() {
  const [selectedoption, setSelectedoption] = useState("Individual");
  const [selectedoption2, setSelectedoption2] = useState("SortAZ");

  function updateSelectedOption (val)
  {
    window.sessionStorage.setItem("selectedOption", val);
    setSelectedoption(val);
  }

  function updateSelectedOption2 (val)
{
  window.sessionStorage.setItem("selectedOption2", val);
  setSelectedoption2(val);
}

  useEffect(() => {
    const currentOption = window.sessionStorage.getItem("selectedOption");

    if (currentOption == null) 
      window.sessionStorage.setItem("selectedOption", "Individual");
    else
      setSelectedoption(currentOption);
    
    const currentOption2 = window.sessionStorage.getItem("selectedOption2");

    if (currentOption2 == null) 
      window.sessionStorage.setItem("selectedOption2", "SortAZ");
    else
      setSelectedoption2(currentOption2);
  }, []);

  return (
    <div className="App">
      <header className="App-header">      
        <h1><img src={logo} className="App-logo" alt="logo"/>Junior</h1>
        <DropdownSort selectedoption2={selectedoption2} setSelectedoption2={updateSelectedOption2}/>
        <Dropdown selectedoption={selectedoption} setSelectedoption = {updateSelectedOption}/>   
        <viewselecter> 
        {selectedoption === "Individual" ? <DataTable/>: null}
        {selectedoption === "List" ? <List/>: null}
        {selectedoption === "Gallery" ? <Gallery/>: null}
        {selectedoption2 === "SortAZ" ? <SortAZ/>: null}
        {selectedoption2 === "SortZA" ? <SortZA/>: null}
        {selectedoption2 === "SortAZCategory" ? <SortAZCategory/>: null}
        {selectedoption2 === "SortZACategory" ? <SortZACategory/>: null}
        {selectedoption2 === "SortAZPrice" ? <SortAZPrice/>: null}
        {selectedoption2 === "SortZAPrice" ? <SortZAPrice/>: null}
        </viewselecter>
      </header>
    </div>
  );
}

export default App;