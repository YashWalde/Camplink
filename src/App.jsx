//import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar/>
        <Navbar />
        <MainContent/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
