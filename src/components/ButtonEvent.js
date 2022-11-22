/**
 * This is example for button event
 */
import React, { Component } from "react";
class ButtonEvent extends Component{

    clickBtn = () => {
        alert("Button clicked");
        console.log("Button clicked");
    }
    render(){
        return(
            <div>
                <button onClick={() => this.clickBtn()}>Click here</button>
            </div>
        );
    }
}
export default ButtonEvent