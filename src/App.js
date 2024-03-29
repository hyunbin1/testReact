import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

{/* bavbar.js 가져오기 - 파일명과 상관없이 <Navbar  /> 써주기 + import Navbar*/ }
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
