import React from "react";
import './style.scss'

export const Massage = (props) => {
    return (
    <p className="message">
        {props.children}
    </p>
    );
    
};