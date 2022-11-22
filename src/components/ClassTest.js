import React, { Component } from 'react'
import axios from 'axios'
class ClassTest extends Component{
     click =() => {
        this.setState({
            sname:this.props.name
        })
        console.log("in log"+ this.props.name)
        axios.get("https://reqres.in/api/users/1")
        .then(res => console.log(res["data"]))
     }
     constructor(){
        super()
        this.state={
            sname:"sname"
        }
     }
    render(){
        
        return <div>In class

            <button onClick={() => this.click()}>Click here</button>
            <div>{this.state.sname}</div>
        </div>
    }
}

export default ClassTest