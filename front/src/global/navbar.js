import { Link } from "react-router-dom";
import "./navbar.css";


import * as React from "react";

import googlePng from './g.png';
import fb from './fb.png';
import vk from './vk.png';
import instagram from './instagram.png';
import notes from './logo.png';


export function Navbar () {

    return (
        <>
            <Link to="/"> <img src={notes} className="eda"/></Link>
            <div className="navbar">
                
                <ul>
                    <li><Link to="/" className="link">Главная страница</Link></li>
                    <li><Link to="/about" className="link">О проекте</Link></li>
                    {/* <li><Link to="/note" className="link">Заметки</Link></li> */}
                    <li><Link to="/contact" className="link">Контакты</Link></li>
                </ul>

                <div className="navbaricons">
                    <a href="http://www.vk.com"><img className="navbarico" src={vk}/></a>
                    <a href="http://www.fb.com"><img className="navbarico" src={fb}/></a>
                    <a href="http://www.instagram.com"><img className="navbarico" src={instagram}/></a>
                    <a href="http://www.google.com"><img className="navbarico" src={googlePng}/></a>
                </div>
            </div>
        </>
    );
}