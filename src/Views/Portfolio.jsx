import React from 'react';
import Progects from "../components/Progects/Progects.jsx";

const Portfolio = (props) => {
    return (
        <div className="content">
            <Progects progects={props.progects}/>
        </div>
    );
};

export default Portfolio;