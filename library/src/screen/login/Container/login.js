import Login from "../component";
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';

class LoginContainer extends Component{
    
    constructor(props){
        super(props);
        this.state={
            data:{},
            loggedIn:false
        };
    }
    
    onChangeHandler = (event)=>{
        let data= this.state.data;
        data[event.target.name]=event.target.value;
        this.setState({data});
        console.log(data)
    }

    onSubmitHandler = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:8080/user/login',this.state.data)
        .then(response => {
            console.log(response);
            if(response.data.code==200){
                this.setState({loggedIn:true})
                localStorage.setItem("isAuth",true);
                localStorage.setItem("id",response.data.data.id)
            }
        }).catch( error=>{
            console.log(error);
        })
    }

    
    
    render(){
       
        const {data,loggedIn}=this.state;
        if(loggedIn){
            return(
                <Redirect to="/"/>
                );
        }
        return(
          <Login state={data} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
        );
    }
    
}

export default LoginContainer;

