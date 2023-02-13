import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';
import { logoImg, checkImg, headerMenu } from '../../data/headerMenu';


function Header() {

    const location = useLocation();
    console.log(location.pathname);

    return ( 
        <header>
            <div className={style.header}>

            <div className={style.checkin}>
                <Link to='/check-in'>
                    <img src={checkImg} alt='check-in icon'/>
                    <h2>checkin</h2>
                </Link>
            </div>
            <div className={style.logo}>
                <Link to='/'>
                    <img src={logoImg} alt='emart24 logo'/>
                    <h1 >logo</h1>
                </Link>
            </div>
            <nav className={style.headerMenu}>
                <ul>
                    {
                    headerMenu.map ( menu => (
                    <li key={menu.id}>
                        <Link to={menu.path}>
                            <img src={menu.icon} alt={menu.title}/>
                        </Link>
                    </li>
                    ))
                    }
                </ul>
            </nav>
            </div>
        </header>
     );
}

export default Header;