import React, { Component } from 'react';
import Button from "./Button";

const Header = () => {
    return <div className="Header">
        <div className="Container">
        <Button text="About"/>
        <Button text="Contact"/>
        <Button text="My CV"/>
        <Button />
        </div>


    </div>
}
 
export default Header;