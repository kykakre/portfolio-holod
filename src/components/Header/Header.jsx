import React from 'react';
import style from "./Header.module.scss"
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={style.header}>
            <NavLink
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link} `
                }
                to=""
            >Главная</NavLink>
            <NavLink to="/portfolio"   className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : `${style.link} `
            }>Портфолио</NavLink>
            <NavLink to="/contacts"   className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : `${style.link} `
            }>Контакты</NavLink>
        </div>
    );
};

export default Header;