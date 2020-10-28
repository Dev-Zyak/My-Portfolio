import React, { Component } from 'react';
import Button from "./Button";

const Header = () => {
    return <div className="Header">
        <div className="Container">
        <Button text="ABOUT"/>
        <Button text="WORK"/>
        <Button text="CV"/>
        <Button text="CONTACT"/>
        </div>


    </div>
}
 
export default Header;