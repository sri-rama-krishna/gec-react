/**
 * This is example for login page & on click of button values will display in console
 */

import React, { Component } from "react";

class Login extends Component{

    constructor(){
        super()
        this.state = {
            txtUser: "",
            txtPwd: ""
        };
    }
    handleUsernameChange = (event) => {
        this.setState({txtUser:event.target.value})
    }
    handlerPasswordChange = (event) => {
        this.setState({txtPwd:event.target.value})
    }
    formSubmit = (event) => {
        console.log(`Username: ${this.state.txtUser}`)
        console.log(`Password: ${this.state.txtPwd}`)
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.formSubmit}>
                    <div>Login</div>
                    <div>Username: <input type="text" name="txtUser" value={this.state.txtUser} onChange={this.handleUsernameChange} /></div>
                    <div>Password: <input type="password" name="txtPwd" value={this.state.txtPwd} onChange={this.handlerPasswordChange} /></div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    </form>
            </div>
        )
    }
}

export default Login;