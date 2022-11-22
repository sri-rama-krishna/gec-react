/**
 * 
 * This is example of both props & state values in class component
 */

import React, { Component } from "react";
class PropsState extends Component{
    constructor(){
        super();
        this.state={
            "stateVar":"Value of stateVar variable"
        };
    }

    render(){
        return <div>Example of props state, & state value is {this.state.stateVar} & props values is {this.props.name}</div>
    }


}

export default PropsState