import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'; // Faqat shu kerak
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
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

import women from '../assets/img/ayol.png';
import telegram from '../assets/img/osdhgusgu.png';
import video from '../assets/img/video/video1.mp4';
import video1 from '../assets/img/video/video2.mp4';
import home1 from '../assets/img/home_1.png';
import home2 from '../assets/img/build_1.png';
import home3 from '../assets/img/cleaning_1.png';
import home4 from '../assets/img/marry_me_1.png';
import CompareImage from '../compareimage/CompareImage.jsx';


import call_home from '../assets/img/about-thumb.png';
import shape from '../assets/img/shape1.png';
import shape1 from '../assets/img/bot_1.png';
import shapa2 from '../assets/img/about-member_111.png';
import women1 from '../assets/img/ayolcha.png';
import elect from '../assets/img/ffffffff.png';

import starts from '../assets/img/icon/starts_1.png';
import gold from '../assets/img/icon/gold.png';
import economy from '../assets/img/icon/ecology.png';
function Main() {
    const [open, setOpen] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [videos, setVideos] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('https://admin-new-xp8v.onrender.com/api/video/videos/');
            setVideos(res.data);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    };

    useEffect(() => {
        fetchProducts();

        const interval = setInterval(() => {
            fetchProducts();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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

            <section class="tj-slider-area fix scene">
                <div class="tj-slider-height">
                    <div class="tj-slider-bg tj-slider-overlay" data-background="assets/images/slider/slider-3-bg-.jpg">
                    </div>
                    <div class="container">
                        <div class="row align-items-end">
                            <div class="col-xl-7 col-lg-7">
                                <div class="tj-slider-content tj-slider-3-content">
                                    <div class="tj-slider-title-box">
                                        <h6 class="tj-slider-sub-title tj-slider-3-sub-title wow fadeInRight"
                                            data-wow-delay=".3s">
                                            <span><img src="./img/start.gif" alt="" width="30px" />
                                            </span>Tozalash xizmatlari
                                        </h6>
                                        <h1 class="tj-slider-title tj-slider-3-title wow fadeInUp" data-wow-delay=".4s">
                                            TOSHKENT SHAHRIDA PROFESSIONAL TOZALIK
                                        </h1>
                                        <p class="tj-slider-paragraph tj-slider-3-paragraph wow fadeInUp"
                                            data-wow-delay=".5s"> Tash Cleaning tozalash kompaniyamiz sizni rasmiy
                                            veb-saytimizda kutib olishdan mamnun! Sizga sifatli tozalash xizmatlari
                                            kerakligi aniq. Siz bizning veb-saytimizdasiz va bu sizning har qanday
                                            muammolaringiz hal qilinishini anglatadi.
                                        </p>
                                    </div>
                                    <div class="tj-slider-btn-box wow fadeInUp" data-wow-delay=".6s">
                                        <a class="tj-primary-btn tj-hover-btn" href="/contact"><span>Batafsil tasvirlab
                                            bering</span>
                                            <div class="tj-hover-btn-circle-dot"></div>
                                        </a>
                                        <div class="tj-slider-3-play-icon d-flex align-items-center">
                                            <a class="popup-videos-button" data-autoplay="true" data-vbtype="video"
                                                href="https://www.youtube.com/watch?v=MLpWrANjFbI">
                                                <img src={telegram} alt="" class="fa-solid fa-play" />
                                            </a>
                                            <div class="tj-slider-3-play-text">
                                                <span>Telegram orqali malumot olish</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-5">
                                <div class="tj-slider-3-thumb wow fadeInRight" data-wow-delay=".5s">
                                    <img src={women} alt="" />
                                    <div class="tj-slider-3-thumb-bg">
                                        <div class="tj-slider-3-thumb-bg-border"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tj-slider-3-bg-shape">
                        <img class="tj-slider-3-bg-shape-1" src="./img/1.png" alt="" />
                        <img class="tj-slider-3-bg-shape-2" src="./img/2.png" alt="" />
                        <img class="tj-slider-3-bg-shape-3" src="./img/3.png" alt="" />
                        <img class="tj-slider-3-bg-shape-4" src="./img/4.png" alt="" />
                        <img class="tj-slider-3-bg-shape-5" src="./img/5.png" alt="" />
                        <img class="tj-slider-3-bg-shape-6" src="./img/6.png" alt="" />
                        <img class="tj-slider-3-bg-shape-7" src="./img/7.png" alt="" />
                    </div>
                </div>
            </section>

            <section class="tj-about-area">
                <div class="tj-about-bg-shape">
                    <img class="tj-about-bg-shape-1" src="./img/1.png" alt="" />
                    <img class="tj-about-bg-shape-2" src="./img/2.png" alt="" />
                    <img class="tj-about-bg-shape-3" src="./img/3.png" alt="" />
                </div>/
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-6 col-lg-5 column_1">
                            <div class="tj-about-thumb wow fadeInLeft" data-wow-delay=".5s">
                                <img src={call_home} alt="Images11" />
                                <div class="tj-about-thumb-shape">
                                    <img class="tj-about-thumb-shape-1" src={shape} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-7 col-md-10 column_2">
                            <div class="tj-about-wrapper wow fadeInRightSlow" data-wow-duration="1400ms">
                                <div class="tj-section-wrapper">
                                    <h5 class="tj-section-subtitle wow fadeInRight" data-wow-delay=".3s"><span
                                        class="one"><img src="./img/start.gif" alt="" width="20px" /></span> Biz haqimizda
                                    </h5>
                                    <h2 class="tj-section-title wow fadeInUp" data-wow-delay=".4s">Keling, tartibsizliklarni
                                        biz hal qilaylik, siz tozalikdan zavqlanasiz</h2>
                                    <p class="tj-section-paragraph wow fadeInUp" data-wow-delay=".4s">Bizning kompaniyamiz
                                        sertifikatlangan va bizning xodimlarimiz to'liq treningdan o'tgan. Natijada biz har
                                        qanday murakkablikdagi loyihalarni qabul qilamiz.</p>
                                </div>
                                <div class="tj-about-box wow fadeInUp" data-wow-delay=".5s">
                                    <div class="tj-about-box-thumb">
                                        <img src={shape1} alt="Images" />
                                        <div class="tj-about-thumb-paly-btn">
                                        </div>
                                    </div>
                                    <div class="tj-about-box-thumb-list">
                                        <ul>
                                            <li><span><i class="fa-regular fa-angle-right"></i></span>- Xonadon va ofislarni
                                                tozalash.</li>
                                            <li><span><i class="fa-regular fa-angle-right"></i></span>- Qurilishdan keyingi
                                                tozalash.</li>
                                            <li><span><i class="fa-regular fa-angle-right"></i></span>- Dezinfeksiyadan
                                                keyingi tozalash.</li>
                                            <li><span><i class="fa-regular fa-angle-right"></i></span>- Toʻy va marosimlarda
                                                idishlarni yuvish.</li>
                                            <li><span><i class="fa-regular fa-angle-right"></i></span>- Katta va kichik
                                                obyektlarni tozalash.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tj-about-bottom wow fadeInUp" data-wow-delay=".6s">
                                    <div class="tj-about-btn">
                                        <a class="tj-primary-btn tj-hover-btn" href="about.html"><span>Ko'proq o'qish</span>
                                            <div class="tj-hover-btn-circle-dot"></div>
                                        </a>
                                    </div>
                                    <div class="tj-about-member-details">
                                        <div class="tj-about-member-details-img">
                                            <img src={shapa2} alt="Images" />
                                        </div>
                                        <div class="tj-about-member-details-content">
                                            <h6 class="tj-about-member-tittle">Aliyev Shaxnoza</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="search_popup">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="search_wrapper">
                                <div class="search_top d-flex justify-content-between align-items-center">
                                    <div class="search_logo">
                                        <a href="index.html">
                                            <img src="assets/images/logo/search-logo.png" alt="Logo" />
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
                        <div class="hamburger_logo" s>
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

            <section class="tj-service-area" data-background="assets/images/service/service-bg.jpg">
                <div class="tj-service-bg-top-shape">
                    <img class="tj-service-bg-top-shape-1" src="./img/banner.png" alt="" />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="tj-section-wrapper text-center">
                                <h5 class="tj-section-subtitle wow fadeInRight" data-wow-delay=".3s"><span
                                    class="one"></span> Xizmatlar <span class="two"></span> </h5>
                                <h2 class="tj-section-title wow fadeInUp" data-wow-delay=".4s">Biz siz uchun xizmat
                                    ko'rsatamiz
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <ul class="service__tab  wow fadeInUp" data-wow-delay=".3s">
                                <li class="service-filter-btn">
                                    <div class="tj-service-wrapper text-center">
                                        <div class="tj-service-icon">
                                            <span><img src={home1} alt="" class="flaticon-carpet" /></span>
                                        </div>
                                        <div class="tj-service-content">
                                            <a data-toggle="collapse" href="#footwear" aria-expanded="false" aria-controls="footwear" class="tj-service-title">Xonadon va ofislarni tozalash.</a>
                                            {/* <button class="tj-service-title">Xonadon va ofislarni tozalash.</button > */}
                                        </div>
                                    </div>
                                </li>
                                <li class="service-filter-btn active" id="ser-2">
                                    <div class="tj-service-wrapper text-center">
                                        <div class="tj-service-icon">
                                            <span><img src={home2} alt="" class="flaticon-carpet" /></span>
                                        </div>
                                        <div class="tj-service-content">
                                            <a data-toggle="collapse" href="#footwearone" aria-expanded="false" aria-controls="footwearone" class="tj-service-title">Qurilishdan keyingi tozalash.</a>
                                            {/* <h5 class="tj-service-title">Qurilishdan keyingi tozalash.</h5> */}
                                        </div>
                                    </div>
                                </li>
                                <br />
                                <li class="service-filter-btn" id="ser-3">
                                    <div class="tj-service-wrapper text-center">
                                        <div class="tj-service-icon">
                                            <span><img src={home3} alt="" class="flaticon-carpet" /></span>
                                        </div>
                                        <div class="tj-service-content">
                                            <a data-toggle="collapse" href="#footweartwo" aria-expanded="false" aria-controls="footweartwo" class="tj-service-title">Dezinfeksiyadan keyingi tozalash.</a>
                                            {/* <h5 class="tj-service-title">Dezinfeksiyadan keyingi tozalash.</h5> */}
                                        </div>
                                    </div>
                                </li>
                                <br />
                                {/* footwearfour, footwearfive */}
                                <li class="service-filter-btn" id="ser-4">
                                    <div class="tj-service-wrapper text-center">
                                        <div class="tj-service-icon">
                                            <span><img src={home4} alt="" class="flaticon-carpet" /></span>
                                        </div>
                                        <div class="tj-service-content">
                                            <a data-toggle="collapse" href="#footwearfour" aria-expanded="false" aria-controls="footwearfour" class="tj-service-title">Toʻy va marosimlarda idishlarni yuvish.</a>
                                            {/* <h5 class="tj-service-title">Toʻy va marosimlarda idishlarni yuvish.</h5> */}
                                        </div>
                                    </div>
                                </li>
                                <li class="service-filter-btn" id="ser-5">
                                    <div class="tj-service-wrapper text-center">
                                        <div class="tj-service-icon">
                                            <span><img src={home1} alt="" class="flaticon-carpet" /></span>
                                        </div>
                                        <div class="tj-service-content">
                                            <a data-toggle="collapse" href="#footwearfive" aria-expanded="false" aria-controls="footwearfive" class="tj-service-title">Katta va kichik obyektlarni tozalash.</a>
                                            {/* <h5 class="tj-service-title">Katta va kichik obyektlarni tozalash.</h5> */}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="tab-item-widget wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                                <div class="collapse" id="footwear">
                                    <div class="row gx-0 tj-service-bottom-row">
                                        <div class="tj-service-bottom-bg-shape">
                                            <img src="assets/images/service/service-bottom-bg-shape.png" alt="" />
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="tj-service-bottom-wrapper text-center">
                                                <h4 class="tj-service-bottom-title">Kvartirani tozalash</h4>
                                                <p class="tj-service-bottom-paragraph">Umumiy tozalash - bu butun
                                                    kvartirani, shu jumladan borish qiyin bo'lgan joylarni yaxshilab
                                                    tozalash va tartibga solishga qaratilgan xizmatlar to'plami.</p>
                                                <div class="tj-service-btn">
                                                    <a class="tj-secondary-btn tj-hover-btn" href="/contact"><span>Aloqa
                                                        Chiqing</span>
                                                        <div class="tj-hover-btn-circle-dot"></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="collapse" id="footwearone">
                                    <div class="row gx-0 tj-service-bottom-row">
                                        <div class="tj-service-bottom-bg-shape">
                                            <img src="assets/images/service/service-bottom-bg-shape.png" alt="" />
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="tj-service-bottom-wrapper text-center">
                                                <h4 class="tj-service-bottom-title">Ofis tozalash</h4>
                                                <p class="tj-service-bottom-paragraph">Ofis tozalash xizmatlari yordamida
                                                    ish joyingizni toza saqlashingiz mumkin. Bu to'liq vaqtli
                                                    tozalovchilarni yollashdan ko'ra arzonroq va osonroq.</p>
                                                <div class="tj-service-btn">
                                                    <a class="tj-secondary-btn tj-hover-btn" href="/contact"><span>Aloqa
                                                        Chiqing</span>
                                                        <div class="tj-hover-btn-circle-dot"></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="collapse" id="footweartwo">
                                    <div class="row gx-0 tj-service-bottom-row">
                                        <div class="tj-service-bottom-bg-shape">
                                            <img src="assets/images/service/service-bottom-bg-shape.png" alt="" />
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="tj-service-bottom-wrapper text-center">
                                                <h4 class="tj-service-bottom-title">Dezinfeksiyadan keyingi tozalash.</h4>
                                                <div class="tj-service-btn">
                                                    <a class="tj-secondary-btn tj-hover-btn" href="/contact"><span>Aloqa
                                                        Chiqing</span>
                                                        <div class="tj-hover-btn-circle-dot"></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="collapse" id="footwearfour">
                                    <div class="row gx-0 tj-service-bottom-row">
                                        <div class="tj-service-bottom-bg-shape">
                                            <img src="assets/images/service/service-bottom-bg-shape.png" alt="" />
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="tj-service-bottom-wrapper text-center">
                                                <h4 class="tj-service-bottom-title">Toʻy va marosimlarda idishlarni yuvish.
                                                </h4>
                                                <div class="tj-service-btn">
                                                    <a class="tj-secondary-btn tj-hover-btn" href="/contact"><span>Aloqa
                                                        Chiqing</span>
                                                        <div class="tj-hover-btn-circle-dot"></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="collapse" id="footwearfive">
                                    <div class="row gx-0 tj-service-bottom-row">
                                        <div class="tj-service-bottom-bg-shape">
                                            <img src="assets/images/service/service-bottom-bg-shape.png" alt="" />
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="tj-service-bottom-wrapper text-center">
                                                <h4 class="tj-service-bottom-title">Ofis tozalash</h4>
                                                <p class="tj-service-bottom-paragraph">Ofis tozalash xizmatlari yordamida
                                                    ish joyingizni toza saqlashingiz mumkin. Bu to'liq vaqtli
                                                    tozalovchilarni yollashdan ko'ra arzonroq va osonroq.</p>
                                                <div class="tj-service-btn">
                                                    <a class="tj-secondary-btn tj-hover-btn" href="/contact"><span>Aloqa
                                                        Chiqing</span>
                                                        <div class="tj-hover-btn-circle-dot"></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="tj-before-after-area">
                <div class="tj-before-after-bg" data-background="assets/images/before-after/before-after-bg.jpg"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="tj-section-wrapper text-center">
                                <h5 class="tj-section-subtitle wow fadeInRight" data-wow-delay=".3s"><span
                                    class="one"></span> Oldin va keyin <span class="two"></span> </h5>
                                <h2 class="tj-section-title wow fadeInUp" data-wow-delay=".4s">Oxirgi tugallangan loyihalar
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tj-before-after-wrapper wow fadeInUp" data-wow-delay=".5s">
                                <CompareImage />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br /><br />

            <section class="tj-choose-us-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="tj-section-wrapper">
                                <div class="sec-text wow fadeInLeft" data-wow-delay=".3s">
                                    <h5 class="tj-section-subtitle"><span class="one"></span>
                                        nega bizni tanlaysiz</h5>
                                    <h2 class="tj-section-title">Toshkentda tozalash xizmatlari narxlari</h2>
                                </div>
                                <div class="desc wow fadeInRight" data-wow-delay=".3s">
                                    <p>Ushbu turdagi xizmat korxonalar, ofislar va tijorat ob'ektlari uchun mo'ljallangan.
                                        Bu har qanday kattaroq joylarni, shu jumladan ofis tirbandligi yuqori bo'lgan
                                        joylarni tozalashni o'z ichiga oladi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-12 gx-0">
                            <div class="tj-choose-us-wrapper wow fadeInUp" data-wow-delay=".4s">
                                <div class="tj-choose-us-left-thumb">
                                    <img src={women1} alt="" />
                                </div>
                                <div class="tj-choose-us-inner">
                                    <div class="tj-choose-us-center-thumb">
                                        <img src={elect} alt="Images" />
                                    </div>
                                    <div class="tj-choose-us-wrap">
                                        <div class="tj-choose-us-item">
                                            <div class="tj-choose-us-icon">
                                                <span><img src={starts} alt=""
                                                    class="flaticon-top-three" /></span>
                                            </div>
                                            <div class="tj-choose-us-content">
                                                <h4 class="tj-choose-us-title">Yuqori reytingli kompaniya</h4>
                                                <p class="tj-choose-us-paragraph">Agar siz ziyofat yoki tadbir o'tkazgan
                                                    bo'lsangiz, siz
                                                    tozalash xizmati yordam berishi mumkin</p>
                                            </div>
                                        </div>
                                        <div class="tj-choose-us-item">
                                            <div class="tj-choose-us-icon">
                                                <span><img src={gold} alt=""
                                                    class="flaticon-top-three" /></span>
                                            </div>
                                            <div class="tj-choose-us-content">
                                                <h4 class="tj-choose-us-title">Yuqori sifat</h4>
                                                <p class="tj-choose-us-paragraph">Bu to'liq tozalashni o'z ichiga oladi
                                                    butun makon, shu jumladan qattiq</p>
                                            </div>
                                        </div>
                                        <div class="tj-choose-us-item">
                                            <div class="tj-choose-us-icon">
                                                <span><img src={economy} alt=""
                                                    class="flaticon-top-three" /></span>
                                            </div>
                                            <div class="tj-choose-us-content">
                                                <h4 class="tj-choose-us-title">Ekologik toza mahsulotlar</h4>
                                                <p class="tj-choose-us-paragraph">Atrof-muhitga e'tiborli mezbonlar uchun
                                                    mijozlar, tozalash bor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="container">
                    <div class="row align-items-center tj-choose-us-bottom-row">
                        <div class="col-xl-7 col-lg-8 col-md-8">
                            <div class="tj-choose-us-bottom-content wow fadeInLeft" data-wow-delay=".3s">
                                <h3 class="tj-choose-us-bottom-title">Tozalash xizmatlarini olishga borganmisiz?</h3>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-4 col-md-4 col-12">
                            <div class="tj-choose-us-bottom-button wow fadeInRight" data-wow-delay=".3s">
                                <a class="tj-white-btn tj-hover-btn" href="/contact"><span>Biz bilan bog'lanish</span>
                                    <div class="tj-hover-btn-circle-dot"></div>
                                </a>
                            </div>
                        </div>
                        <div class="tj-choose-us-bg-shape">
                            <img class="tj-choose-us-bottom-bg-shape-1" src="./choose-us-thumb.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="tj-portfolio-area">
                <div class="tj-portfolio-bg-shape">
                    <img class="tj-portfolio-bg-shape-1" src="./img/icon/rabot.png" alt="" />
                    <img class="tj-portfolio-bg-shape-2" src="./img/icon/robot1.png" alt="" />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="tj-section-wrapper">
                                <div class="sec-text wow fadeInLeft" data-wow-delay=".3s">
                                    <h5 class="tj-section-subtitle"><span class="one"></span>
                                        Bizmi ishlarimiz </h5>
                                    <h2 class="tj-section-title">Bizning ta'sirchan ishlarimiz</h2>
                                </div>
                                <div class="tj-portfolio-top-button wow fadeInRight d-none d-lg-inline-block"
                                    data-wow-delay=".3s">
                                    <a class="tj-round-btn" href="/contact">Aloqa Chiqing<i
                                        class="fa-regular fa-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="tj-portfolio-slider wow fadeInUp" data-wow-delay=".4s">
                                <div class="tj-portfolio-active swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="tj-portfolio-wrapper swiper-slide">
                                            <div className="oigjig">
                                                <div class="tj-portfolio-thumb">
                                                    <div className="box-video">
                                                        {videos.map(video => (
                                                            <div key={video.id}>
                                                                {/* <h3>{video.title}</h3> */}
                                                                <video controls>
                                                                    <source src={video.video_file} type="video/mp4" />
                                                                    Ваш браузер не поддерживает видео.
                                                                </video>
                                                            </div>
                                                        ))}
                                                    </div>
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

            <section class="tj-testimonial-area" data-background="assets/images/testimonial/testimonial-bg.jpg">
                <div class="tj-testimonial-bg-shape">
                    <img class="tj-testimonial-bg-shape-1" src="assets/images/testimonial/testimonial-bg-shape.png" alt="" />
                    <img class="tj-testimonial-bg-shape-2" src="assets/images/testimonial/testimonial-bg-overlay-shape.png"
                        alt="" />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="tj-section-wrapper text-center">
                                <h5 class="tj-section-subtitle wow fadeInRight" data-wow-delay=".3s"><span
                                    class="one"></span> mijozlar fikri <span class="two"></span> </h5>
                                <h2 class="tj-section-title wow fadeInUp" data-wow-delay=".4s">Bizning mijozlarimiz nima
                                    deyishadi
                                    Biz haqimizda</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="tj-testimonial-slider wow fadeInUp" data-wow-delay=".5s">
                                <div class="tj-testimonial-active swiper-container">
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log('slide change')}
                                    >
                                        <SwiperSlide>
                                            <div class="tj-testimonial-wrapper swiper-slide">
                                                <div class="tj-testimonial-top">
                                                    <div class="tj-testimonial-top-member-details">
                                                        <div class="tj-testimonial-top-member-content">
                                                            <div class="testimonial-rating">
                                                                <div class="star-ratings">
                                                                    <div class="fill-ratings">
                                                                        <span>★★★★★</span>
                                                                    </div>
                                                                    <div class="empty-ratings">
                                                                        <span>★★★★★</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h4 class="tj-testimonial-top-member-title">Vladimir Vladimirovich
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tj-testimonial-bottom">
                                                    <p class="tj-testimonial-bottom-paragraph">Hashamat tartib va ​​tozalikdan
                                                        boshlanadi.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="tj-testimonial-wrapper swiper-slide">
                                                <div class="tj-testimonial-top">
                                                    <div class="tj-testimonial-top-member-details">
                                                        <div class="tj-testimonial-top-member-content">
                                                            <div class="testimonial-rating">
                                                                <div class="star-ratings">
                                                                    <div class="fill-ratings">
                                                                        <span>★★★★★</span>
                                                                    </div>
                                                                    <div class="empty-ratings">
                                                                        <span>★★★★★</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h4 class="tj-testimonial-top-member-title">Alberto
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tj-testimonial-bottom">
                                                    <p class="tj-testimonial-bottom-paragraph">Deraza yuvilsa, qo'shnilarning
                                                        derazalari ham toza ko'rinadi.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="swiper-wrapper">
                                                <div class="tj-testimonial-wrapper swiper-slide">
                                                    <div class="tj-testimonial-top">
                                                        <div class="tj-testimonial-top-member-details">
                                                            <div class="tj-testimonial-top-member-content">
                                                                <div class="testimonial-rating">
                                                                    <div class="star-ratings">
                                                                        <div class="fill-ratings">
                                                                            <span>★★★★★</span>
                                                                        </div>
                                                                        <div class="empty-ratings">
                                                                            <span>★★★★★</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4 class="tj-testimonial-top-member-title">Jeff
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tj-testimonial-bottom">
                                                        <p class="tj-testimonial-bottom-paragraph">Avval xonangizni tartibga
                                                            keltiring, keyin esa dunyoning qolgan qismini o'z zimmangizga oling.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="swiper-wrapper">
                                                <div class="tj-testimonial-wrapper swiper-slide">
                                                    <div class="tj-testimonial-top">
                                                        <div class="tj-testimonial-top-member-details">
                                                            <div class="tj-testimonial-top-member-content">
                                                                <div class="testimonial-rating">
                                                                    <div class="star-ratings">
                                                                        <div class="fill-ratings">
                                                                            <span>★★★★★</span>
                                                                        </div>
                                                                        <div class="empty-ratings">
                                                                            <span>★★★★★</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h4 class="tj-testimonial-top-member-title">Alisher
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tj-testimonial-bottom">
                                                        <p class="tj-testimonial-bottom-paragraph">Hammaga tavsiya beramiz</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div class="tj-testimonial-slide-dot text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Main;