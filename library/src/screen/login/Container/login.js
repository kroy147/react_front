import Login from "../component";
import React, { Component } from "react";

class LoginContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        };
    }
    
    onChangeHandler = (event)=>{
        debugger
        let {data}= this.state;
        data[event.target.name]=event.target.value;
        this.setState({data});
    }

    onSubmitHandler = (event)=>{
        console.log("Hello"+this.state);
        //alert(`${this.state.data.email} ${this.state.data.password}`);
        event.preventDefault();
    }

    // componentDidUpdate=()=> {
    //     console.log(this.state);
    // }

    render(){
       
        const {data}=this.state;
        return(
          <Login state={data} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
        );
    }
    
}

export default LoginContainer;

