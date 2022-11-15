import React from "react";
import "./footer.css";
import g from "./g.png";
import vk from "./vk.png";
import inst from "./instagram.png";
import fb from "./fb.png";
class Footer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <footer class="footer">
            <div class="container">
            <div class="row">
            <div class="footer-col">
                <h4>Компания</h4>
                <ul>
                <li><a href="/about">О нас</a></li>
                <li><a href="/contact">наш сервис</a></li>
                <li><a href="/policy">политика конфиденциальности</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Помощь</h4>
                <ul>
                <li><a href="/contact">ЧаВо</a></li>

                </ul>
            </div>

            <div class="footer-col">
                <h4>Присоединяетесь</h4>
                <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"> <img src={g} className="icos" /> </i></a>
                <a href="#"><i class="fab fa-twitter"> <img src={vk} className="icos" /></i></a>
                <a href="#"><i class="fab fa-instagram"> <img src={inst} className="icos" />  </i></a>
                <a href="#"><i class="fab fa-linkedin-in"> <img src={fb} className="icos" /> </i></a>
                </div>
            </div>
            </div>
            </div>
            </footer>
        );
    }
}

export default Footer;