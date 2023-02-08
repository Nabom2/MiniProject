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
            <p className={style.p}><br/>대표이사: 김장욱 / 사업자등록번호: 105-86-92454</p>
        </footer>
     );
}

export default Footer;