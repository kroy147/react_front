import ProductDetail from "../component";
import React, { Component } from "react";

class ProductDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    // onChangeHandler = (event)=>{

    //     let {data}= this.state;
    //     data[event.target.name]=event.target.value;
    //     this.setState({data});
    // }


    componentDidMount() {

    }


    render() {

        const { data } = this.state;
        return (
            <ProductDetail state={data} />
        );
    }

}

export default ProductDetailContainer;

