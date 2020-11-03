import React, { Component, useState } from 'react';



const Header = () => {
    let [burger, setburger ]= useState(false);
    const buttons = document.querySelectorAll(".Button");
    function burgerfunc() { 
        
        console.log(buttons)
        setburger(!burger);
        if (burger)
        {
            buttons.forEach((button, index) => {
                setTimeout(() => {
                    button.classList.add("displayflex")

                }, 150 * index);
            })
        }
        else
        {
            buttons.forEach((button, index) => {
                    button.classList.remove("displayflex")

            })
        }
        
        
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
        <div className="Button">HOME</div>
        <div className="Button">WORK</div>
        <div className="Button">ABOUT</div>
        <div className="Button">CV</div>
        <div className="Button">CONTACT</div>
        </div>
    </div>
}
 
export default Header;