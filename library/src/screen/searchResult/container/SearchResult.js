import React, { Component } from 'react';
import SearchResult from '../component';

class SearchResultContainer extends Component{
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
          < SearchResult state={data} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
        );
    }

}
export default SearchResultContainer;