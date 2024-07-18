import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes,Route,  } from 'react-router-dom';
import Home from './pages/Home';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} exact />
        </Routes>
      </Router>
    </>
  )
}

export default App
