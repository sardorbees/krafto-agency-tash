import logo from './logo.svg';
import axios from 'axios';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom"
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import CompareImage from './components/compareimage/CompareImage';
import ProductDetail from './components/productdetail/ProductDetail';
import CategoryList from './components/categorylist/CategoryList'
import TelegramForm from './components/telegramform/TelegramForm';
import Comments from './components/comments/Comments';
import Login from './components/login/Login'
import Register from './components/register/Register'
import Profile from './components/profile/Profile'
import Dashboard from './components/dashboard/Dashboard'
import Logout from './components/logout/Logout'
import LocationList from './components/locationlist/LocationList';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('access_token'));

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);
  return (
    <div>
      <SpeedInsights />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/' element={<CompareImage />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/categorylist/:id' element={<CategoryList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/telegramform" element={<TelegramForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/locationlist" element={<LocationList />} />
          <Route path="*" element={<h2><br></br><br></br><br></br> 404 - Страница не найдена <br></br></h2>} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />

          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
