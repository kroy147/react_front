import React, { Component } from "react";
//import TextBox from "/Users/kshitij/Desktop/library/src/shared/components/TextBox/TextBox.js";
import TextBox from "../../../shared/components/TextBox";
import Button from "../../../shared/components/Button/Button";
import "../../../assets/index.css";
import { NavLink } from "react-router-dom";


const Register = ({ onChangeHandler, onAddressChangeHandler, onSubmitHandler, state }) => {
   return (
      <div className="container">
         <div className="row" >
            <div className="col-6">
               <img src="https://cdn.dribbble.com/users/2386616/screenshots/9799837/illustration_d_4x.png" height="500px" width="500px" style={{ marginLeft: "-210px", marginTop: "50px" }}></img>
            </div>
            <div className="col-6">
               <p className="row text-prop" style={{ marginLeft: "100px", fontSize: "20px" }}><strong>Register</strong></p>
               <form onSubmit={onSubmitHandler}>
                  <div className="row ">
                     <div class="col-12 m-1" style={{ padding: "-10px", marginLeft: "-20px" }}>
                        <TextBox inputType="text"
                           placeholder="Enter name"
                           label="Name"
                           id="name"
                           name="name"
                           value={state.Name}
                           onChangeHandler={onChangeHandler}
                           required="true"
                        />
                     </div>
                  </div>

                  <div className="row">
                     <div class="col-12 m-1" style={{ padding: "-10px" }}>
                        <TextBox inputType="text"
                           placeholder="Enter email"
                           label="Email"
                           id="email"
                           name="email"
                           value={state.email}
                           onChangeHandler={onChangeHandler}
                           required="true"></TextBox>
                     </div>
                  </div>

                  <div className="row ">
                     <div class="col-12 m-1" style={{ padding: "-10px" }}>
                        <TextBox inputType="password"
                           placeholder="Enter password"
                           label="Password"
                           id="password"
                           name="password"
                           value={state.password}
                           onChangeHandler={onChangeHandler}
                           required="true"></TextBox>
                     </div>
                  </div>

                  <div className="row ">
                     <div class="col-12 m-1" style={{ padding: "-10px" }}>
                        <TextBox inputType="text"
                           placeholder="Enter House Details"
                           label="House Details"
                           id="housedetail"
                           name="housedetail"
                           value={state.housedetail}
                           onChangeHandler={onAddressChangeHandler}></TextBox>
                     </div>
                  </div>

                  <div className="row">
                     <div class="col-12 m-1" style={{ padding: "-10px" }}>
                        <TextBox inputType="text"
                           placeholder="Enter city"
                           label="City"
                           id="city"
                           name="city"
                           value={state.city}
                           onChangeHandler={onAddressChangeHandler}></TextBox>
                     </div>
                  </div>

                  <div className="row ">
                     <div class="col-12 m-1" style={{ padding: "10px" }}>
                        <TextBox inputType="text" placeholder="Enter Pincode" label="Pincode"
                           id="pincode"
                           name="pincode"
                           value={state.pincode}
                           onChangeHandler={onAddressChangeHandler}></TextBox>
                     </div>
                  </div>
                  <br />
                  <div style={{ marginLeft: "100px" }}>
                     <Button value="Register" cssClass="btn btn-primary"></Button>
                  </div>
               </form>
            </div>
            <br />
            {/* <div style={{marginLeft:"240px"}}>
            <NavLink to="/login">
            <Button value="Existing user? Login" cssClass="btn btn-secondary"></Button>
            </NavLink>
            </div> */}
            <br />
         </div>

      </div>
   );

};
export default Register;