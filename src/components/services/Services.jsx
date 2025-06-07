import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
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

import rasm1 from '../assets/img/rrrr/rasm.jpg';
import rasm2 from '../assets/img/rrrr/rasm1.jpg';
import rasm3 from '../assets/img/rrrr/rasm2.jpg';
import rasm4 from '../assets/img/rrrr/rasm3.jpg';
function Services() {
    const [photo, setPhoto] = useState(null);
    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/logo/categories/${4}/`);
                setPhoto(res.data);
            } catch (error) {
                console.error('Ошибка загрузки фото:', error);
            }
        };
        fetchPhoto();
        const intervalId = setInterval(fetchPhoto, 1000);
        return () => clearInterval(intervalId);
    }, [photo]);

    const [photes, setPhotes] = useState(null);
    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/logo/categories/${5}/`);
                setPhotes(res.data);
            } catch (error) {
                console.error('Ошибка загрузки фото:', error);
            }
        };
        fetchPhoto();
        const intervalId = setInterval(fetchPhoto, 1000);
        return () => clearInterval(intervalId);
    }, [photes]);
    const [photed, setPhoted] = useState(null);
    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/logo/categories/${7}/`);
                setPhoted(res.data);
            } catch (error) {
                console.error('Ошибка загрузки фото:', error);
            }
        };
        fetchPhoto();
        const intervalId = setInterval(fetchPhoto, 1000);
        return () => clearInterval(intervalId);
    }, [photed]);
    const [photeded, setPhoteded] = useState(null);
    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/logo/categories/${6}/`);
                setPhoteded(res.data);
            } catch (error) {
                console.error('Ошибка загрузки фото:', error);
            }
        };
        fetchPhoto();
        const intervalId = setInterval(fetchPhoto, 1000);
        return () => clearInterval(intervalId);
    }, [photeded]);

    return (
        <div>
            <div class="body-overlay"></div>
            <div class="back-to-top-wrapper">
                <button id="back_to_top" type="button" class="back-to-top-btn">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 6L6 1L1 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
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
                                <a href="https://www.instagram.com/tashcleaning?igsh=eXN0cGVtNWsxZ290"><img
                                    src="./img/icon/insta.png" alt="" width="30px" /></a>
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
                                <h2 class="tj-breadcrumb-title tj-char-animation">Xizmatlar Turlari</h2>
                            </div>
                        </div>
                    </div>
                    <div class="tj-breadcrumb-bg-shape">
                        <img src="assets/images/breadcrumb/breadcrumb-bg-shape.png" alt="" />
                    </div>
                </section>
                <section class="tj-service-inner-page-area fix">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="tj-service-2-wrapper">
                                <div class="tj-service-2-item wow fadeInLeft" data-wow-delay=".5s">
                                    <div class="tj-service-2-thumb">
                                        {photo?.image && (
                                            <img src={photo.image} alt="" />
                                        )}
                                    </div>
                                    <div class="tj-service-2-box">
                                        <div class="tj-service-2-wrap">
                                            <div class="tj-service-2-icon">
                                                <img src="./img/home_1.png" alt="" />
                                            </div>
                                            <div class="tj-service-2-number">
                                                <span>01</span>
                                            </div>
                                        </div>
                                        <div class="tj-service-2-content">
                                            <h4 class="tj-service-2-title"><a>Uy tozalash</a></h4>
                                            <p class="tj-service-2-paragraph">Bizning standart xizmatimiz har qanday changni
                                                tozalashni o'z ichiga oladi,
                                                changni yutish, tozalash, sirtni dezinfeksiya qilish</p>
                                            <div class="tj-service-2-button">
                                                <a class="tj-service-2-btn tj-arrow-btn" href="tel:+998 97 492 04 04">Batafsil
                                                    ma'lumot
                                                    <span class="icon_box">
                                                        <i class="icon_first fa-regular fa-arrow-right"></i>
                                                        <i class="icon_second fa-regular fa-arrow-right"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tj-service-2-item wow fadeInLeft" data-wow-delay=".6s">
                                    <div class="tj-service-2-thumb">
                                        {photeded?.image && (
                                            <img src={photeded.image} alt="" />
                                        )}
                                    </div>
                                    <div class="tj-service-2-box">
                                        <div class="tj-service-2-wrap">
                                            <div class="tj-service-2-icon">
                                                <img src="./img/cleaning_1.png" alt="" />
                                            </div>
                                            <div class="tj-service-2-number">
                                                <span>03</span>
                                            </div>
                                        </div>
                                        <div class="tj-service-2-content">
                                            <h4 class="tj-service-2-title"><a>Dezinfeksiyadan keyingi tozalash.</a>
                                            </h4>
                                            <div class="tj-service-2-button">
                                                <a class="tj-service-2-btn tj-arrow-btn" href="tel:+998 97 492 04 04">Batafsil
                                                    ma'lumot
                                                    <span class="icon_box">
                                                        <i class="icon_first fa-regular fa-arrow-right"></i>
                                                        <i class="icon_second fa-regular fa-arrow-right"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tj-service-2-item wow fadeInRight" data-wow-delay=".6s">
                                    <div class="tj-service-2-thumb">
                                        {photes?.image && (
                                            <img src={photes.image} alt="" />
                                        )}
                                    </div>
                                    <div class="tj-service-2-box">
                                        <div class="tj-service-2-wrap">
                                            <div class="tj-service-2-icon">
                                                <img src="./img/marry_me_1.png" alt="" />
                                            </div>
                                            <div class="tj-service-2-number">
                                                <span>04</span>
                                            </div>
                                        </div>
                                        <div class="tj-service-2-content">
                                            <h4 class="tj-service-2-title"><a>Toʻy va marosimlarda idishlarni yuvish.</a></h4>
                                            <div class="tj-service-2-button">
                                                <a class="tj-service-2-btn tj-arrow-btn" href="tel:+998 97 492 04 04">Batafsil
                                                    ma'lumot
                                                    <span class="icon_box">
                                                        <i class="icon_first fa-regular fa-arrow-right"></i>
                                                        <i class="icon_second fa-regular fa-arrow-right"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tj-service-2-bg-shape">
                        <div class="tj-service-2-bg-shape-1">
                            <img src="assets/images/service/service-2-bg-shape.png" alt="Images" />
                        </div>
                    </div>
                </section>

            </main>
        </div >
    )
}

export default Services;