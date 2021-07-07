import React, { Component } from 'react';
import Register from '../component';
import axios from "axios";
import { Redirect } from 'react-router-dom';

class RegisterContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{},
            addressDTO:{},
            loggedIn:false
        };
    }

    onChangeHandler = (event)=>{
        let data = this.state.data;
        data[event.target.name]=event.target.value;
        this.setState(data);
    }


    onAddressChangeHandler= (event)=>{
        let addressDTO= this.state.addressDTO;
        addressDTO[event.target.name]= event.target.value;
        this.setState(addressDTO);
    }

    onSubmitHandler = (event)=>{

        event.preventDefault();
        let data= this.state.data
        let addressDTO= this.state.addressDTO
        let details={...data,addressDTO};   
        axios.post('http://localhost:8080/user',details)
        .then(response =>{
            if(response.data.code == 200){
                this.setState({loggedIn:true});
                console.log(response)
            }
        }).catch(error =>{
            console.log(error);
        })
    }
    render(){
        const {data,addressDTO,loggedIn} = this.state;
        if(loggedIn){
            return(
            <Redirect to = "/login"/>
            );
        }
        return(
          < Register state={data,addressDTO} onChangeHandler={this.onChangeHandler} onAddressChangeHandler={this.onAddressChangeHandler} onSubmitHandler={this.onSubmitHandler}></Register>
        );
    }

}
export default RegisterContainer;