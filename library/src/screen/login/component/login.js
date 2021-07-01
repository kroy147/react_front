import React from "react";
import TextBox from "/Users/kshitij/Desktop/library/src/shared/components/TextBox/TextBox.js";
import Button from "../../../shared/components/Button/Button";
import "../../../assets/index.css";


const Login=({state,onChangeHandler,onSubmitHandler})=> {
          return(
             <div className="container1">

                <div><h2>Login</h2></div> 
                <form onSubmit={onSubmitHandler}>
                 <div className="row">

                    <div className="row">
                      <div class="col-5 m-3">
                        <TextBox inputType="text" placeholder="Enter email" label="Email"
                         label="Email"
                         id="email" 
                          name="email"
                          value={state.email}
                          onChange={onChangeHandler}></TextBox>
                      </div>
                   </div>

                   <div className="row">
                      <div class="col-5 m-3">
                      <TextBox inputType="password" 
                      placeholder="Enter password" 
                      label="Password"
                      id="password" 
                      name="password"
                      value={state.password}
                      onChange={onChangeHandler}></TextBox>
                      </div>
                   </div>
                  </div>     
                  <Button value="Login" type="submit"></Button> 
                  <br/>    
                  <Button value="New user? Sign-Up"></Button>   
                  </form>      

             </div>
          );
      
};
export default Login;