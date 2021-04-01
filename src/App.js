import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* bavbar.js 가져오기 - 파일명과 상관없이 <Navbar  /> 써주기 + import Navbar*/}
      <Navbar />
    </Router>
  );
}

export default App;
