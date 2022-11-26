import React from 'react';
import StapItem from "./StapItem.jsx";
import style from "./Stap.module.scss"
const Stap = (props) => {
    console.log(props.stap)
    let stap = props.stap.map((e)=>(
        <StapItem id={e.id} key={e.id} title={e.title} text={e.text}/>

    )
    )

    return (
        <div className={style.block}>
            <div className={style.title}>Этапы работы над проектом
            <span>Этапы работы над проектом</span></div>
            <div className={style.stap}>
                {stap}
            </div>
        </div>
    );
};

export default Stap;