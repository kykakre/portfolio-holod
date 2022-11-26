import React from 'react';
import Banner from "../components/Banner/Banner.jsx";
import Stap from "../components/Stap/Stap.jsx";

const Main = (props) => {
    return (
        <div className="content">
            <Banner banner={props.banner}/>
            <Stap stap={props.stap}/>
        </div>
    );
};

export default Main;