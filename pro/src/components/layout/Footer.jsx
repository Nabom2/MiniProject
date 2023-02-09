import React from 'react';
import { Link } from 'react-router-dom';
import { FooterMenu } from '../../data/FooterMenu';
import style from './Footer.module.css';

function Footer() {

    return ( 
        <footer className={style.des}>
            <nav>
                <ul>
                    { FooterMenu.map( menu => (
                        <li key={menu.id}>
                            <Link to = {menu.link}>
                                {menu.name}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            </nav>
            <p className={style.p}><br/>제작자: 허선아 / 연락처: dinuovo26@naver.com</p>
        </footer>
     );
}

export default Footer;