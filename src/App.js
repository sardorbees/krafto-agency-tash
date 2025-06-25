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
import LocationList from './components/locationlist/LocationList';
import CommentSection from './components/commentsection/CommentSection';
import CardList from './components/cardlist/CardList'
import ApplicationForm from './components/applicationform/ApplicationForm';
import NotificationList from './components/notificationlist/NotificationList';
import ProductList from './components/productlist/ProductList'
import PromotionList from './components/promotionlist/PromotionList'
import TeamList from './components/teamlist/TeamList'
import ServiceList from './components/servicelist/ServiceList';
import Clients from './components/clients/Clients'
import MessageForm from './components/messagаform/MessageForm';
// import OrderForm from './components/orderform/OrderForm';
function App() {
  return (
    <div>
      <SpeedInsights />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/' element={<CompareImage />} />
          <Route path='/about' element={<About />} />
          <Route path='/commentsection' element={<CommentSection />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/messagаform' element={<MessageForm />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/cardlist' element={<CardList />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/teamlist' element={<TeamList />} />
          <Route path='/servicelist' element={<ServiceList />} />
          <Route path='/categorylist/:id' element={<CategoryList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/promotionlist" element={<PromotionList />} />
          <Route path="/notificationlist" element={<NotificationList />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/applicationform" element={<ApplicationForm />} />
          <Route path="/telegramform" element={<TelegramForm />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/locationlist" element={<LocationList />} />
          <Route path="*" element={<h2><br></br><br></br><br></br> 404 - Страница не найдена <br></br></h2>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
