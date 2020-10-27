import React, { Component } from 'react';

const Button = (props) => {
return (<div className="Button">{props.text != null ? props.text : "button"}</div>);
}
 
export default Button;