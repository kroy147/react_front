import React, { Component } from "react";
import TextBox from "/Users/kshitij/Desktop/library/src/shared/components/TextBox/TextBox.js";
import Button from "../../../shared/components/Button/Button";
import "../../../assets/index.css";

const Register=({onChangeHandler,onSubmitHandler,state})=>{
          return(
             <div className="container1">

                 <div className="row " ><h2>Register</h2></div> 
                   <form onSubmit={onSubmitHandler}>
                 <div className="row ">
                     <div class="col-5 m-3">
                     <TextBox inputType="text"  
                     placeholder="Enter name" 
                     label="Name"
                     id="Name" 
                     name="Name"
                     value={state.Name}
                     onChange={onChangeHandler}
                     />
                     </div>
                  </div>

                    <div className="row">
                      <div class="col-5 m-3">
                        <TextBox inputType="text"
                         placeholder="Enter email"
                          label="Email"
                          id="email" 
                           name="email"
                           value={state.email}
                           onChange={onChangeHandler}></TextBox>
                      </div>
                   </div>

                   <div className="row ">
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

                   <div className="row ">
                      <div class="col-5 m-3">
                      <TextBox inputType="text" 
                      placeholder="Enter House Details" 
                      label="House Details"
                      id="housedetail" 
                      name="housedetail"
                      value={state.housedetail}
                      onChange={onChangeHandler}></TextBox>
                      </div>
                   </div>

                   <div className="row">
                      <div class="col-5 m-3">
                      <TextBox inputType="text" 
                      placeholder="Enter city" 
                      label="City"
                      id="city" 
                      name="city"
                      value={state.city}
                      onChange={onChangeHandler}></TextBox>
                      </div>
                       </div>

                   <div className="row ">
                      <div class="col-5 m-3">
                      <TextBox inputType="text" placeholder="Enter Pincode" label="Pincode"
                      id="pincode" 
                      name="pincode"
                      value={state.pincode}
                      onChange={onChangeHandler}></TextBox>
                      </div>
                   </div>

                   <Button value="Register"></Button>
                   <br/>

                   <Button value="Existing user? Login"></Button>
                   </form>

             </div>
          );
      
};
export default Register;