import OrderHistory from "../component";
import React, { Component } from "react";
import axios from "axios";

class OrderHistoryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            bookinfo: [],
            rent:"",
            bflag:""
        };
    }

    
    componentDidMount() {
        const id = localStorage.getItem("id");
        axios.get(`http://localhost:8080/user/${id}/order`)
            .then(response => {
                console.log(response)
                if (response.data.code == 200) {
                    console.log(response+"container");
                    //this.setState({data:response.data.data})
                    this.setState({bookinfo:response.data.data})
                }
            }
            ).catch(error => {
                console.log(error);
            }
            )
    }

    onSubmitHandler=(bookId)=>{
        const id= localStorage.getItem("id");
        axios.post(`http://localhost:8080/user/${id}/book/${bookId}/return`)
        .then( response =>{
            console.log(response)
            if(response.data.code==200){
                console.log(response+"container");
                 this.setState({rent:response.data.data.cost})
                 this.setState({bflag:bookId})
                 console.log(this.state.rent)
                 console.log(this.state.bflag)
            }
        }
        ).catch(error=>{
            console.log(error);
        }
        )
    }


    render() {

        const { data,bookinfo,rent,bflag} = this.state;
        return (
            <OrderHistory state={data} bookinfo = {bookinfo} onSubmitHandler={this.onSubmitHandler} rent={rent} bflag={bflag}/>
        );
    }
}

export default OrderHistoryContainer;

