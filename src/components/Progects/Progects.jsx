import React from 'react';
import style from "./Progects.module.scss"
const Progects = (props) => {
    return (
        <>
            <div className={style.title}>МОИ ПРОЕКТЫ<span>МОИ ПРОЕКТЫ</span></div>
            <div className={style.progects}>
                {props.progects.miniPicture.map((e)=>(
                    <div className={style.item}>
                        <img className={style.img} src={e.img}/>
                        <div className={style.text}>{e.name}</div>
                    </div>
                ))}
                {props.progects.bigPicture.map((e)=>(
                    <div className={style.big}>
                        <img className={style.bigPicture} src={e.img}/>
                        <div className={style.text}>{e.name}</div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Progects;