import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import before1 from '../assets/img/tashclining.png';
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
import before2 from '../assets/img/osdhgusgu.png';
import before3 from '../assets/img/icon/insta.png';
function Menu() {
  return (
    <Navbar bg="dark" variant="var(--tj-color-theme-primary)" expand="lg">
      <Container>
        <Navbar.Brand><img src={before1} alt="Logos" width="100px" className='dgo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='label'>Asosiy</Nav.Link>
            <Nav.Link href="/about" className='label'>Biz haqimizda</Nav.Link>
            <Nav.Link href="/services" className='label'>Xizmatlar Turlari</Nav.Link>
            <Nav.Link href="/portfolio" className='label'>Bizni ishlarimiz</Nav.Link>
            <Nav.Link href="/contact" className='label'>Aloqa</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="https://t.me/TashCleaning1"><img src={before2} alt="" class="flaticon-email-2" /></Nav.Link>
            <Nav.Link href="https://www.instagram.com/tashcleaning?igsh=eXN0cGVtNWsxZ290"><img src={before3} alt="" class="flaticon-email-2" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
