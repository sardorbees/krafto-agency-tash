import React, { Component } from 'react'
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

import telegaram from '../assets/img/icon/telegram_black.png';
import call_black from '../assets/img/icon/call_black.png';
import location_black from '../assets/img/icon/telegram_black.png';

import logo from '../assets/img/tashclining.png';
import women from '../assets/img/ayol.png';
import womens from '../assets/img/ayolcha.png';
import icon_tg from '../assets/img/icon/telegram_black.png';
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="tj-footer-area">
                    <div class="tj-footer-bg-shape">
                        <img src="assets/images/footer/footer-bg-shape.png" alt="" />
                    </div>
                    <div class="tj-footer-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="tj-footer-top-wrapper">
                                        <div class="tj-footer-top-wrap">
                                            <div class="tj-footer-top-wrap-icon">
                                                <span><img src={telegaram} alt="" width="50px" /></span>
                                            </div>
                                            <div class="tj-footer-top-wrap-content">
                                                <span class="sub-title">Telegram kanalimiz</span>
                                                <span><a href="https://t.me/TashCleaning1">Tash Cleaning</a></span>
                                            </div>
                                        </div>
                                        <div class="tj-footer-top-wrap">
                                            <div class="tj-footer-top-wrap-icon">
                                                <span><img src={call_black} alt="" width="30px" /></span>
                                            </div>
                                            <div class="tj-footer-top-wrap-content">
                                                <span class="sub-title">Bizga qo'ng'iroq qiling</span>
                                                <span><a href="tel:+998974920404">+998 97 492 04 04</a></span>
                                            </div>
                                        </div>
                                        <div class="tj-footer-top-wrap">
                                            <div class="tj-footer-top-wrap-icon">
                                                <span><img src={location_black} alt="" width="30px" /></span>
                                            </div>
                                            <div class="tj-footer-top-wrap-content">
                                                <span class="sub-title">Joylashgan joyimiz</span>
                                                <span class="location">Toshkent shahar Temur Malik ko`chasi</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tj-footer-bottom">
                        <div className="container">
                            <div className="row tj-footer-bottom-row">
                                <div class="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                                    <div class="tj-footer-widget tj-footer-col-1">
                                        <div class="tj-footer-widget-logo">
                                            <a href="/"><img src={logo} alt="footer-logo" width="120px" /></a>
                                        </div>
                                        <div class="tj-footer-widget-paragraph">
                                            <p class="tj-footer-widget-paragraph">Tash Cleaning tozalash kompaniyamiz sizni rasmiy
                                                veb-saytimizda kutib olishdan mamnun! Sizga sifatli tozalash xizmatlari kerakligi
                                                aniq. Siz bizning veb-saytimizdasiz va bu sizning har qanday muammolaringiz hal
                                                qilinishini anglatadi.</p>
                                        </div>
                                        <div class="tj-footer-widget-socail">
                                            <ul>
                                                <li><a href="https://t.me/TashCleaning1"><img src={icon_tg}
                                                    alt="" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                    <div className="tj-footer-widget widget_nav_menu tj-footer-col-2">
                                        <h4 class="tj-footer-widget-title">Xizmatlar</h4>
                                        <div className="tj-footer-widget-menu">
                                            <ul>
                                                <li><a><span></span>Xonadon va ofislarni tozalash.</a>
                                                </li>
                                                <li><a><span></span>Qurilishdan keyingi tozalash.</a>
                                                </li>
                                                <li><a><span></span>Dezinfeksiyadan keyingi tozalash.</a>
                                                </li>
                                                <li><a><span></span>Toʻy va marosimlarda idishlarni yuvish.</a>
                                                </li>
                                                <li><a><span></span>Katta va kichik obyektlarni tozalash.</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                    <div class="tj-footer-widget widget_nav_menu tj-footer-col-3">
                                        <h4 class="tj-footer-widget-title">Tez havola</h4>
                                        <div class="tj-footer-widget-menu">
                                            <ul>
                                                <li><a><span></span>Asosiy</a></li>
                                                <li><a href="/about"><span></span>Biz
                                                    haqimizda</a></li>
                                                <li><a href="/services"><span></span>Xizmatlar</a>
                                                </li>
                                                <li><a href="/portfolio"><span></span>
                                                    Bizni ishlarimiz</a></li>
                                                <li><a href="/contact"><span></span>
                                                    Aloqa</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div class="tj-footer-widget tj-footer-col-4">
                                        <h4 class="tj-footer-widget-title">Qayta yuborilgan xabar</h4>
                                        <div class="tj-footer-widget-post">
                                            <div class="tj-footer-widget-post-thumb">
                                                <a href="blog-details.html"><img src={women} alt="" /></a>
                                            </div>
                                            <div class="tj-footer-widget-post-content">
                                                <h4 class="tj-footer-widget-post-title"><a href="blog-details.html">
                                                    Yuqori reytingli kompaniya</a></h4>
                                            </div>
                                        </div>
                                        <div class="tj-footer-widget-post">
                                            <div class="tj-footer-widget-post-thumb">
                                                <a href="blog-details.html"><img src={womens} alt="" /></a>
                                            </div>
                                            <div class="tj-footer-widget-post-content">
                                                <h4 class="tj-footer-widget-post-title"><a href="blog-details.html">Yuqori sifat</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tj-footer-copyright">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="tj-footer-copyright-wrapper">
                                    <div class="tj-footer-copyright-content">
                                        <p class="tj-footer-copyright-paragraph">Sizga ham TashCleaning xizmatlari kerak boʻlsa
                                            hoziroq bizga murojat qiling.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}