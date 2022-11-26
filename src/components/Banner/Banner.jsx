import React from 'react';
import style from "./Banner.module.scss"
import {NavLink} from "react-router-dom";
const Banner = (props) => {
    return (
        <div className={style.block}>
            <img src={props.banner.img} className={style.img} alt="oleg"/>
            <div className={style.item}>
                <div className={style.title}>{props.banner.title} <span>{props.banner.title}</span> </div>
                <div className={style.subtitle}>{props.banner.subtitle}</div>
                <div className={style.pretext}>О себе:</div>
                <div className={style.text}>{props.banner.text}</div>
                <div className={style.flex}>
                    <div>

                        {props.banner?.social.map((e)=>
                            <a className={style.social} href={`${e.link}`}>
                                <img src={e.icon} className={style.icon}/>
                                <div className={style.socialText}>{e.text}</div>
                            </a>
                        )}
                    </div>

                    <NavLink className={style.link} to="/portfolio">Смотреть портфолио</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;