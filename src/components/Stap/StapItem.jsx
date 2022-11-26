import React from 'react';
import style from "./Stap.module.scss"
const StapItem = (props) => {

    return (
        <div className={style.card}>
            <div className={style.number}>{props.id}<span>{props.id}</span></div>
            <div className={style.titleCard}>{props.title}<span>{props.title}</span></div>
            <div className={style.text}>{props.text}</div>

        </div>
    );
};

export default StapItem;