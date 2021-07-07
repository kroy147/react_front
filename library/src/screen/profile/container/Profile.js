import Profile from "../component";
import React, { Component } from "react";
import axios from "axios";

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loggedIn:localStorage.getItem("loggedIn")==="true"?true:false
        };
    }
    
    componentDidMount(){
        const id= localStorage.getItem("id")
        axios.get(`http://localhost:8080/user/${id}`)
        .then( response => {
            console.log(response);
            if(response.data.code===200){
                this.setState({data:response.data.data})
              //  this.setState({loggedIn:true})
            }
        }
        ).catch( error=> {
            console.log(error);
        }
        )
    }

    onChangeHandler = (event) => {
        let  data  = this.state.data;
        console.log(event.target.value);
        data[event.target.name] = event.target.value;
        this.setState(data);
    }

    onSubmitHandler = (event) => {
        debugger
        const id= localStorage.getItem("id")
        let details={houseDetail:this.state.data.houseDetail,city:this.state.data.city,pincode:this.state.pincode}
        axios.post(`http://localhost:8080/user/${id}`,details)
        .then( response=>{
            console.log(response);
            if(response.data.code===200){
                console.log(response)
            }
        }

        ).catch( error=>{
            console.log(error);
        }
        )
    }


    render() {
        const { data } = this.state;
        return (
            <Profile data={data} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
        );
    }
}

export default ProfileContainer;

