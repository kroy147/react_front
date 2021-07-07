import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import Home from "../component"
import Header from "../../../shared/components/Header/header";
import Navbar from "../../../shared/components/NavBar/navbar";
import Subscreen from "../container/subscreen";

class HomeContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{},
            apiParam:{categoryId:"",name:""},
            bookinfo:[]
        }
    }

    componentDidMount(){
        if(localStorage.getItem("isAuth")){
        const id= localStorage.getItem("id");
        axios.post('http://localhost:8080/user/'+id+'/cart/initialise')
        .then( response => {
            if(response.data.code==200){
                this.setState({data:response.data.data})
                localStorage.setItem("cartvalue",response.data.data.size)
            }
        }
        ).catch( error=> {
            console.log(error);
        }
        )
    }
    }

    onClickHandler=(categoryId)=>{
    debugger
     //   let apiParam=this.state.apiParam;
     axios.post('http://localhost:8080/user/21/cart/initialise')
        //axios.get(`http://localhost:8080/booktitle?category=${categoryId}=&name=`)
        .then( response => {
            debugger
            console.log(response);
            if(response.data.code===200){
                this.setState({bookinfo:response.data.data.bookTitleList})
            }
        }
        ).catch( error=> {
            console.log(error);
        })
    }

    render(){

        const {bookinfo} = this.state.bookinfo;
        return(
            <div>
            <Navbar onClickHandler = {this.onClickHandler}/>
            <Subscreen bookinfo={bookinfo}/>
            </div>
            
        );
}


}
export default HomeContainer;

