import Profile from "../component";
import React, { Component } from "react";
import axios from "axios";
import Subscreen from "../component/subscreen";

class SubScreenContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            bookinfo:[],
            hflag:"",
            apiParam:{categoryId:"",name:""},
            loggedIn:localStorage.getItem("loggedIn")==="true"?true:false
        };
    }
    
    componentDidMount(){
        let apiParam=this.state.apiParam;
        axios.get("http://localhost:8080/booktitle?category="+apiParam.categoryId+"&name="+apiParam.name)
        .then( response => {
            console.log(response);
            if(response.data.code===200){
                this.setState({bookinfo:response.data.data.bookTitleList})
                this.setState({loggedIn:true})
            }
        }
        ).catch( error=> {
            console.log(error);
        }
        )
    }

    onChangeHandler = (event) => {
        let  data  = this.state;
        data[event.target.name] = event.target.value;
        this.setState(data);
    }

    onSubmitHandler=(titleId)=>{
        const id= localStorage.getItem("id");
        let detail={bookTitleId:titleId}
       axios.post(`http://localhost:8080/user/${id}/cart/booktitle`,detail)
       .then( response=>{
           if(response.data.code===200){
               let size= response.data.data.cartCount;
              localStorage.setItem("cartvalue",size);
              this.setState({hflag:titleId})
           }
       }).catch( error=>{
           console.log(error);
       }
       )
    }

    render() {
        const {data,bookinfo,hflag} = this.state;
        return (
            <Subscreen data={data} bookinfo={bookinfo} hflag={hflag} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}
            />
        );
    }
}

export default SubScreenContainer;

