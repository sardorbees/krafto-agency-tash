import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../css/animate.css';
import '../../css/bootstrap.min.css';
import '../../css/animate.css';
import '../../css/magic.css';
import '../../css/main.css';
import '../../css/meanmenu.css';
import '../../css/nice-select.css';
import '../../css/odometer-theme-default.css';
import '../../css/swiper-bundle.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '../assets/img/tashclining.png';
import call from '../assets/img/call.png';
import email from '../assets/img/osdhgusgu.png';
import email1 from '../assets/img/email.png';
import telegarm from '../assets/img/osdhgusgu.png';
import instagram from '../assets/img/icon/insta.png';
import LanguageToggle from '../languageтoggle/LanguageToggle'
function Header() {
  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://admin-new-xp8v.onrender.com/api/location/yourmodel/');
      setProducts(res.data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  useEffect(() => {
    fetchProducts(); // начальная загрузка

    const interval = setInterval(() => {
      fetchProducts(); // каждые 5 секунд обновлять
    }, 3000);

    return () => clearInterval(interval); // очистка при размонтировании
  }, []);

  return (
    <div>
      <header class="tj-header-area tj-header-absolute">
        <div class="tj-header-top d-none d-md-block">
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <div class="tj-header-top-wrapper">
                  <div class="tj-header-top-logo d-none d-xl-block">
                    <a href="index.html"><img src={logo} alt="Logos" width="100px" /></a>
                  </div>
                  <div class="h1-header-infos">
                    <div class="infos-item">
                      <div class="infos-icon">
                        <img src={call} alt="" class="flaticon-call" />
                      </div>
                      <div class="infos-content">
                        <span class="label">Bizga qo'ng'iroq qiling</span>
                        <span><a href="tel:++998974920404">+998 97 492 04 04</a></span>
                      </div>
                    </div>
                    <div class="infos-item">
                      <div class="infos-icon">
                        <img src={email} alt="" class="flaticon-email-2" />
                      </div>
                      <div class="infos-content">
                        <span class="label">Telegram kanalimiz</span>
                        <span><a href="https://t.me/TashCleaning1">TashCleaning</a></span>
                      </div>
                    </div>
                    <div class="infos-item">
                      <div class="infos-icon">
                        <img src={email1} alt="" class="flaticon-email-2" />
                      </div>
                      <div class="infos-content">
                        <span class="label">Joylashgan joyimiz</span>
                        <span class="location">Toshkent shahar, Temur Malik ko`chasi</span>
                        <LanguageToggle />
                      </div>
                    </div>
                  </div>
                  <div class="tj-header-top-social d-none d-lg-block">
                    <ul>
                      <li><a href="https://t.me/TashCleaning1"><img src={telegarm} alt="" /></a>
                      </li>
                      <li><a href="https://www.instagram.com/tashcleaning?igsh=eXN0cGVtNWsxZ290"><img
                        src={instagram} alt="" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tj-header-bottom">
          <div class="container gx-0">
            <div class="row gx-0">
              <div class="col">
                <div class="tj-header-bottom-wrapper tj-header-bottom-row">
                  <div class="tj-header-bottom-mobile-logo d-block d-xl-none">
                    <a href="/">
                      <img src={logo} alt="Logos" width="100px" />
                    </a>
                  </div>
                  <div class="tj-header-bottom-left d-none d-xl-block">
                    <div class="mainmenu-wrapper">
                      <div class="mainmenu-box">
                        <div class="mainmenu main-mobile-menu d-none d-lg-inline-block">
                          <ul>
                            <li><a href="/">Asosiy</a></li>
                            <li><a href="/about">Biz haqimizda</a></li>
                            <li class="has-dropdown">
                              <a>Xizmatlar</a>
                              <ul class="sub-menu">
                                <li><a href="/services">Xizmatlar Turlari</a></li>
                              </ul>
                            </li>
                            <li><a href="/portfolio">Bizni ishlarimiz</a></li>
                            <li><a href="/contact">Aloqa</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tj-header-bottom-right">
                    <div class="tj-header-2-button d-none d-sm-block">
                      <a class="tj-primary-btn tj-hover-btn" href="/contact"><span>Hoziroq biz bilan
                        boglaning </span>
                        <div class="tj-hover-btn-circle-dot"></div>
                      </a>
                    </div>
                    <div class="tj-header-bottom-mobile-button d-block d-xl-none">
                      <button variant="primary" onClick={handleShow} class="tj-header-bottom-mobile-btn menu-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <Offcanvas show={show} onHide={handleClose} className='hamburger-area d-xl-none'>
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <div class="hamburger_bg"></div>
                          <div class="hamburger_wrapper">
                            <div class="hamburger_top d-flex align-items-center justify-content-between">
                              <div class="hamburger_logo" s>
                                <a href="index.html" class="mobile_logo">
                                  <img src={logo} alt="Logo" />
                                </a>
                              </div>
                              <div class="hamburger_close">
                                <button class="hamburger_close_btn"><i class="fa-thin fa-times"></i></button>
                              </div>
                            </div>
                            <div class="hamburger_menu">
                              <div class="mobile_menu"></div>
                            </div>
                            <div class="hamburger-infos">
                              <h4 class="hamburger-title">Aloqa ma'lumotlari</h4>
                              <div class="contact-item">
                                <div class="contact-icon">
                                  <span><img src={telegarm} alt="" width="40ps" /></span>
                                </div>
                                <div class="contact-text">
                                  <span>Telegram kanalimiz</span>
                                  <div class="text"><a class="link" href="https://t.me/TashCleaning1">Tash Cleaning</a></div>
                                </div>
                              </div>
                              <div class="contact-item">
                                <div class="contact-icon">
                                  <span><img src={call} alt="" width="40px" /></span>
                                </div>
                                <div class="contact-text">
                                  <span>Bizga qongiroq qiling</span>
                                  <div class="text"><a class="link" href="tel:+998974920404">+998 97 492 04 04</a></div>
                                </div>
                              </div>
                              <div class="contact-item">
                                <div class="contact-icon">
                                  <span><img src={email} alt="" width="40px" /></span>
                                </div>
                                <div class="contact-text">
                                  <span>Bizni manzil</span>
                                  <div class="text">Toshkent shahar, Temur Malik ko`chasi</div>
                                </div>
                              </div>
                              <div class="contact-item">
                                <ul>
                                  <li className='tochka'><a href="/" className='label'>Asosiy</a></li>
                                  <li className='tochka'><a href="/about" className='label'>Biz haqimizda</a></li>
                                  <li className='tochka'><a href='/services' className='label'>Xizmatlar Turlari</a></li>
                                  <li className='tochka'><a href="/portfolio" className='label'>Bizni ishlarimiz</a></li>
                                  <li className='tochka'><a href="/contact" className='label'>Aloqa</a></li>
                                </ul>
                              </div>
                            </div>
                            <div class="hamburger-socials">
                              <ul>
                                <li>
                                  <a href="https://t.me/TashCleaning1"><img src={telegarm} alt="" width="30px" /></a>
                                </li>
                                <li>
                                  <a href="https://www.instagram.com/tashcleaning?igsh=eXN0cGVtNWsxZ290"><img
                                    src={instagram} alt="" width="30px" /></a>
                                </li>
                                <li>
                                  <a href="+998974920404"><img src={call} alt="" /></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Offcanvas.Body>
                      </Offcanvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div >
  )
}

export default Header;