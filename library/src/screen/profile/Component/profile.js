import React from 'react';
import TextBox from "/Users/kshitij/Desktop/library/src/shared/components/TextBox/TextBox.js";
import Button from "../../../shared/components/Button/Button";
import "../../../assets/index.css";

const Profile=()=>{
   return(
    <div className="container1">

    <div className="row " ><h2>View/Update</h2></div> 

    <div className="row ">
        <div class="col-5 m-3">
        <TextBox inputType="text"  placeholder="name" label="Name"/>
        </div>
     </div>

       <div className="row">
         <div class="col-5 m-3">
           <TextBox inputType="text" placeholder="email" label="Email"></TextBox>
         </div>
      </div>


      <div className="row ">
         <div class="col-5 m-3">
         <TextBox inputType="text" placeholder=" House Details" label="House Details"></TextBox>
         </div>
      </div>

      <div className="row">
         <div class="col-5 m-3">
         <TextBox inputType="text" placeholder="city" label="City"></TextBox>
         </div>
      </div>

      <div className="row ">
         <div class="col-5 m-3">
         <TextBox inputType="text" placeholder="Pincode" label="Pincode"></TextBox>
         </div>
      </div>

      <Button value="Update"></Button>
      <br/>


</div>
   );
};
export default Profile;