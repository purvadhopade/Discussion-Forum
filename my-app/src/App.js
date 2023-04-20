import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import SideBar from './Component/SideBar';
import ViewQuestion from './Component/ViewQuestion';
import Question from './Component/Add-Question/Question';


import { 
  BrowserRouter as  Router, Route, Routes
  } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
      <Header />
      <Routes>
            <Route  path="/"element = {<SideBar/>}/>
            <Route  path="/add-question"element = {<Question/>}/>
            <Route  path="/question"element = {<ViewQuestion/>}/>
           


      </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;
