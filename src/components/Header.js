import React, { Component } from 'react';
import Button from "./Button";

const Header = () => {
    return <div className="Header">
        <div className="Container">
        <Button text="ABOUT"/>
        <Button text="MY WORK"/>
        <Button text="MY CV"/>
        <Button text="CONTACT"/>
        </div>


    </div>
}
 
export default Header;