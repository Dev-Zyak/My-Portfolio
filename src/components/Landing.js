import React, { Component } from 'react'
import Header from "./Header"
import Background from "../images/background.jpg"
import Social from "./Social"


const Landing = () => {
    return (
        <div>    
        <Header />
        <div className="background"> <img src={Background}/></div>    
        <div className="nametextbox"> <h1>Conor Hutton</h1> </div>
        <div className="socialcontainer">
            <Social />
        </div>
        </div>)
}
export default Landing;