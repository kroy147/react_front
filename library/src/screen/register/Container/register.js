import React, { Component } from 'react';
import Register from '../Component';

class RegisterContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        };
    }

    onChangeHandler = (event)=>{
        let {data}= this.state;
        data[event.target.name]=event.target.value;
        this.setState(data);
    }
    onSubmitHandler = (event)=>{

    }
    render(){
        const {data}=this.state;
        return(
          < Register state={data} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}></Register>
        );
    }

}
export default RegisterContainer;