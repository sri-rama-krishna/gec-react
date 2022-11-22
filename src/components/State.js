/**
 * This is example of state in class component.
 */

import React, { Component } from "react";
class State extends Component{
    constructor(){
        super();
        this.state={
            "stateVar":"Value of stateVar variable"
        };
    }

    render(){
        return <div>Example of state & value is {this.state.stateVar}</div>
    }
}

export default State;