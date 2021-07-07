import Checkout from "../component";
import React, { Component } from "react";
import axios from "axios";

class CheckoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            bookinfo: [],
            num:""
        };
    }

    componentDidMount() {
        const id = localStorage.getItem("id");
        axios.get(`http://localhost:8080/user/${id}/cart/booktitle`)
            .then(response => {
                if (response.data.code == 200) {
                    console.log(response);
                    //this.setState({data:response.data.data})
                    this.setState({ bookinfo: response.data.data.bookTitleList })
                }
            }
            ).catch(error => {
                console.log(error);
            }
            )
    }

    onSubmitHandler = (event) => {
        const id = localStorage.getItem("id");
        axios.post(`http://localhost:8080/user/${id}/cart/issue`)
            .then(response => {
                console.log(response);
                if (response.data.code == 200) {
                    console.log(response);
                    this.setState({num:response.data.data})
                    // localStorage.setItem(cartvalue,0)
                }
            }
            ).catch(error => {
                console.log(error);
            }
            )
    }



    render() {
        const { data, bookinfo,num } = this.state;
        return (
            <div>
                
            <Checkout state={data} bookinfo={bookinfo} num={num} onSubmitHandler={this.onSubmitHandler} />
            </div>
        );
    }
}

export default CheckoutContainer;

