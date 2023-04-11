import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cards from './pages/Cards/Cards';
import Banner from './pages/Banner/Banner';
import Wrapper from './pages//wrapper/Wrapper';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// import Banner from './components/banner/Banner';
// import Banner from './components/Ingredients/Banner/Banner';
const root = ReactDOM.createRoot(document.getElementById('root'));
// import Navbar from './components/navbar/Navbar';
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/banner' element={<Banner />} />
        <Route path='/wrapper' element={<Wrapper />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);