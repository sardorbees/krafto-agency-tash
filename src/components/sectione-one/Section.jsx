import React, { useState} from 'react'
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
function Section() {
    const [open, setOpen] = useState(false);
    return (
        <div>
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
                                        <a class="tj-primary-btn tj-hover-btn" href="contact.html"><span>Batafsil tasvirlab
                                            bering</span>
                                            <div class="tj-hover-btn-circle-dot"></div>
                                        </a>
                                        <div class="tj-slider-3-play-icon d-flex align-items-center">
                                            <a class="popup-videos-button" data-autoplay="true" data-vbtype="video"
                                                href="https://www.youtube.com/watch?v=MLpWrANjFbI">
                                                <img src="./img/osdhgusgu.png" alt="" class="fa-solid fa-play" />
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
                                    <img src="./img/ayol.png" alt="" />
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
                                <img src="./img/about-thumb.png" alt="Images" />
                                <div class="tj-about-thumb-shape">
                                    <img class="tj-about-thumb-shape-1" src="./img/shape1.png" alt="" />
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
                                        <img src="./img/bot_1.png" alt="Images" />
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
                                            <img src="./img//about-member_111.png" alt="Images" />
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
                                            <span><img src="./img/home_1.png" alt="" class="flaticon-carpet" /></span>
                                        </div>
                                        <div class="tj-service-content">
                                            <button class="tj-service-title">Xonadon va ofislarni tozalash.</button >
                                        </div>
                                    </div>
                                </li>
                                <li class="service-filter-btn active" id="ser-2">
                                    <div class="tj-service-wrapper text-center">
                                        <div class="tj-service-icon">
                                            <span><img src="./img/build_1.png" alt="" class="flaticon-carpet" /></span>
                                        </div>
                                        <div class="tj-service-content">
                                            <h5 class="tj-service-title">Qurilishdan keyingi tozalash.</h5>
                                        </div>
                                    </div>
                                </li>
                                <li class="service-filter-btn" id="ser-3">
                                    <div class="tj-service-wrapper text-center">
                                        <div class="tj-service-icon">
                                            <span><img src="./img/cleaning_1.png" alt="" class="flaticon-carpet" /></span>
                                        </div>
                                        <div class="tj-service-content">
                                            <h5 class="tj-service-title">Dezinfeksiyadan keyingi tozalash.</h5>
                                        </div>
                                    </div>
                                </li>
                                <li class="service-filter-btn" id="ser-4">
                                    <div class="tj-service-wrapper text-center">
                                        <div class="tj-service-icon">
                                            <span><img src="./img/marry_me_1.png" alt="" class="flaticon-carpet" /></span>
                                        </div>
                                        <div class="tj-service-content">
                                            <h5 class="tj-service-title">Toʻy va marosimlarda idishlarni yuvish.</h5>
                                        </div>
                                    </div>
                                </li>
                                <li class="service-filter-btn" id="ser-5">
                                    <div class="tj-service-wrapper text-center">
                                        <div class="tj-service-icon">
                                            <span><img src="./img/build_1.png" alt="" class="flaticon-carpet" /></span>
                                        </div>
                                        <div class="tj-service-content">
                                            <h5 class="tj-service-title">Katta va kichik obyektlarni tozalash.</h5>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="tab-item-widget wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                                <div class="single-service" id="collapse1" className="panel-collapse collapse">
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
                                                    <a class="tj-secondary-btn tj-hover-btn" href="contact.html"><span>Aloqa
                                                        Chiqing</span>
                                                        <div class="tj-hover-btn-circle-dot"></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-service ser-2">
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
                                                    <a class="tj-secondary-btn tj-hover-btn" href="contact.html"><span>Aloqa
                                                        Chiqing</span>
                                                        <div class="tj-hover-btn-circle-dot"></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-service ser-3">
                                    <div class="row gx-0 tj-service-bottom-row">
                                        <div class="tj-service-bottom-bg-shape">
                                            <img src="assets/images/service/service-bottom-bg-shape.png" alt="" />
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="tj-service-bottom-wrapper text-center">
                                                <h4 class="tj-service-bottom-title">Dezinfeksiyadan keyingi tozalash.</h4>
                                                <div class="tj-service-btn">
                                                    <a class="tj-secondary-btn tj-hover-btn" href="contact.html"><span>Aloqa
                                                        Chiqing</span>
                                                        <div class="tj-hover-btn-circle-dot"></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-service ser-4">
                                    <div class="row gx-0 tj-service-bottom-row">
                                        <div class="tj-service-bottom-bg-shape">
                                            <img src="assets/images/service/service-bottom-bg-shape.png" alt="" />
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="tj-service-bottom-wrapper text-center">
                                                <h4 class="tj-service-bottom-title">Toʻy va marosimlarda idishlarni yuvish.
                                                </h4>
                                                <div class="tj-service-btn">
                                                    <a class="tj-secondary-btn tj-hover-btn" href="contact.html"><span>Aloqa
                                                        Chiqing</span>
                                                        <div class="tj-hover-btn-circle-dot"></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-service ser-5">
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
                                                    <a class="tj-secondary-btn tj-hover-btn" href="contact.html"><span>Aloqa
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
                                <img src="./img/before-after-1.png" alt="" />
                                <img src="./img/before-after-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
                                    <img src="./img/ayolcha.png" alt="" />
                                </div>
                                <div class="tj-choose-us-inner">
                                    <div class="tj-choose-us-center-thumb">
                                        <img src="./img/ffffffff.png" alt="Images" />
                                    </div>
                                    <div class="tj-choose-us-wrap">
                                        <div class="tj-choose-us-item">
                                            <div class="tj-choose-us-icon">
                                                <span><img src="./img/icon/starts_1.png" alt=""
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
                                                <span><img src="./img/icon/gold.png" alt=""
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
                                                <span><img src="./img/icon/ecology.png" alt=""
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
                                <a class="tj-white-btn tj-hover-btn" href="contact.html"><span>Biz bilan bog'lanish</span>
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
                                    <a class="tj-round-btn" href="contact.html">Aloqa Chiqing<i
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
                                            <div class="tj-portfolio-thumb">
                                                <video src="./img/video/video1.mp4" controls></video>
                                            </div>
                                        </div>
                                        <div class="tj-portfolio-wrapper swiper-slide">
                                            <div class="tj-portfolio-thumb">
                                                <video src="./img/video/video2.mp4" controls></video>
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
