import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Faqat shu kerak
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import { Collapse, Button, Card } from 'react-bootstrap';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../css/animate.css';
import '../../css/bootstrap.min.css';
import '../../css/animate.css';
import '../../css/magic.css';
import '../../css/main.css';
import '../../css/meanmenu.css';
import '../../css/nice-select.css';
import '../../css/odometer-theme-default.css';
import '../../css/swiper-bundle.css';
import '../../js/aaaaa.js';
import '../../js/sender.js';
import CompareImage from '../compareimage/CompareImage.jsx';

import video from '../assets/img/video/video1.mp4';
import video1 from '../assets/img/video/video2.mp4';
function Portfolio() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div class="body-overlay"></div>

            <div class="search_popup">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="search_wrapper">
                                <div class="search_top d-flex justify-content-between align-items-center">
                                    <div class="search_logo">
                                        <a href="index.html">
                                            <img src="assets/images/logo/logo.png" alt="Logo" />
                                        </a>
                                    </div>
                                    <div class="search_close">
                                        <button type="button" class="search_close_btn">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="search_form">
                                    <form action="#">
                                        <div class="search_input">
                                            <input class="search-input-field" type="text" placeholder="Type here to search..." />
                                            <span class="search-focus-border"></span>
                                            <button type="submit">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor"
                                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-popup-overlay"></div>

            <div class="cartmini-overlay"></div>

            <div class="hamburger-area d-xl-none">
                <div class="hamburger_bg"></div>
                <div class="hamburger_wrapper">
                    <div class="hamburger_top d-flex align-items-center justify-content-between">
                        <div class="hamburger_logo">
                            <a href="index.html" class="mobile_logo">
                                <img src="./img/tashclining.png" alt="Logo" />
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
                                <span><img src="./img/osdhgusgu.png" alt="" width="40ps" /></span>
                            </div>
                            <div class="contact-text">
                                <span>Telegram kanalimiz</span>
                                <div class="text"><a class="link" href="https://t.me/TashCleaning1">Tash Cleaning</a></div>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <span><img src="./img/call.png" alt="" width="40px" /></span>
                            </div>
                            <div class="contact-text">
                                <span>Bizga qongiroq qiling</span>
                                <div class="text"><a class="link" href="tel:+998974920404">+998 97 492 04 04</a></div>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <span><img src="./img/email.png" alt="" width="40px" /></span>
                            </div>
                            <div class="contact-text">
                                <span>Bizni manzil</span>
                                <div class="text">Toshkent shahar, Temur Malik ko`chasi</div>
                            </div>
                        </div>
                    </div>
                    <div class="hamburger-socials">
                        <ul>
                            <li>
                                <a href="https://t.me/TashCleaning1"><img src="./img/osdhgusgu.png" alt="" width="30px" /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/tashcleaning?igsh=eXN0cGVtNWsxZ290"><img src="./img/icon/insta.png" alt="" width="30px" /></a>
                            </li>
                            <li>
                                <a href="+998974920404"><img src="./img/call.png" alt="" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <main id="primary" class="site-main">

                <section class="tj-breadcrumb-area" data-background="assets/images/breadcrumb/breadcrumb-bg.jpg">
                    <div class="container">
                        <div class="row">
                            <div class="tj-breadcrumb-content text-center">
                                <h2 class="tj-breadcrumb-title">Bizni ishlarimiz</h2>
                            </div>
                        </div>
                    </div>
                    <div class="tj-breadcrumb-bg-shape">
                        <img src="assets/images/breadcrumb/breadcrumb-bg-shape.png" alt="" />
                    </div>
                </section>

                <section class="tj-portfolio-inner-page-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="tj-portfolio-slider wow fadeInUp" data-wow-delay=".4s">
                                    <div class="tj-portfolio-active swiper-container">
                                        <div class="swiper-wrapper">
                                            <div class="tj-portfolio-wrapper swiper-slide">
                                                <div className="oigjig">
                                                    <div class="tj-portfolio-thumb">
                                                        <video src={video} controls></video>
                                                    </div>
                                                    <div class="tj-portfolio-thumb">
                                                        <video src={video1} controls></video>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tj-portfolio-slide-dot text-center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div >
    )
}

export default Portfolio;