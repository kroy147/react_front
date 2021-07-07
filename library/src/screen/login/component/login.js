import React from "react";
import TextBox from "../../../shared/components/TextBox/TextBox.js";
import Button from "../../../shared/components/Button/Button";
import "../../../assets/index.css";
import { NavLink } from "react-router-dom";


const Login = ({ state, onChangeHandler, onSubmitHandler }) => {
   return (
      <div className="container1  border-0" style={{marginTop:"100px",marginLeft:"-8vw"}}>
         
         <div style={{ display:"flex", flexDirection:"row", justifiedContent:"space-between",width:"69vw"}}>
         <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-showing-user-login-page-in-website-or-application-1886527-1597938.png"></img>
      
         <form onSubmit={onSubmitHandler} style={{width:"60%",marginTop:"7vw"}}>
               <div className="text-prop" style={{ marginLeft: "250px", fontSize:"20px"} }> <strong>Login</strong></div>
               <div className="row">

                  <div className="row">
                     <div class="col-12 m-3">
                        <TextBox inputType="text" placeholder="Enter email" label="Email"
                           label="Email"
                           id="email"
                           name="email"
                           value={state.email}
                           onChangeHandler={onChangeHandler}
                           required="true"></TextBox>
                     </div>
                  </div>

                  <div className="row">
                     <div class="col-12 m-3">
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
               </div>
                {/* <Button value="Login" cssClass="button-1"></Button>   */}
                <br/>
               <div style={{marginLeft:"220px"}}>
                <Button value="Sign In" cssClass="btn btn-primary"  >Sign in </Button> 
                <br/>
                </div>
                <br/>
                
                {/* <div style={{marginLeft:"190px"}}>
                <span>Not a member ? </span>
                <NavLink to="/register">
               Register
              </NavLink>
               </div> */}
         </form>
         </div>
         <br />
         <br />
         {/* <div style={{marginLeft:"240px"}}>
         <NavLink to="/register">
            <Button value="New user? Sign-Up" cssClass="btn btn-secondary"></Button>
         </NavLink>
         </div> */}
          <br/>

      </div>
   );

};
export default Login;