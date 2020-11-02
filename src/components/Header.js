import React, { Component, useState } from 'react';
import Button from "./Button";


const Header = () => {
    let [burger, setburger ]= useState(false);
    function burgerfunc() { 
        setburger(!burger);
        console.log(burger)
    }

    return <div className="Header">
        <div className="headertext"><h1>My Portfolio</h1></div>

        <div className={burger ? "burger burger-open" : "burger burger-close"} onClick={()=>burgerfunc()}>
            <div>
            <div></div>
            <div></div>
            </div>

        </div>
        <div className="Container">
        <Button text="ABOUT"/>
        <Button text="WORK"/>
        <Button text="CV"/>
        <Button text="CONTACT"/>
        </div>


    </div>
}
 
export default Header;