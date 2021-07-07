import React from 'react';
import TextBox from "../../../shared/components/TextBox/index";
import Button from "../../../shared/components/Button/index";
import "../../../assets/index.css";
import Navbar from '../../../shared/components/NavBar/navbar';

const Profile = ({onChangeHandler, onSubmitHandler, data}) => {
   return (
      <div className="container">
         <div className="row">

         <div className="col-6">
               <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" height="500px" width="500px" style={{ marginLeft: "-300px", marginTop: "30px" }}></img>
            </div>
            <div className="col-6" style={{marginTop:"80px"}}>
         <div className="row  text-prop" style={{marginLeft:"80px"}}> <strong>View/Update Profile</strong></div>
         <form onSubmit={onSubmitHandler}>
            <div className="row ">
               <div class="col-12 m-1">
                  <TextBox inputType="text"
                     placeholder="name"
                     label="Name"
                     id="name"
                     name="name"
                     value={data.name} 
                     onChangeHandler={onChangeHandler}/>
               </div>
            </div>

            <div className="row">
               <div class="col-12 m-1">
                  <TextBox
                     inputType="text"
                     placeholder="email"
                     label="Email"
                     id="email"
                     name="email"
                     value={data.email}
                     onChangeHandler={onChangeHandler}
                  />
               </div>
            </div>


            <div className="row ">
               <div class="col-12 m-1">
                  <TextBox inputType="text"
                     placeholder=" House Details"
                     label="House Details"
                     id="houseDetail"
                     name="houseDetail"
                     value={data.houseDetail}
                     onChangeHandler={onChangeHandler}></TextBox>
               </div>
            </div>

            <div className="row">
               <div class="col-12 m-1">
                  <TextBox inputType="text"
                     placeholder="city"
                     label="City"
                     id="city"
                     name="city"
                     value={data.city}
                     onChangeHandler={onChangeHandler}></TextBox>
               </div>
            </div>

            <div className="row ">
               <div class="col-12 m-1">
                  <TextBox
                     inputType="text"
                     placeholder="Pincode"
                     label="Pincode"
                     name="pincode"
                     value={data.pincode}
                     onChangeHandler={onChangeHandler}></TextBox>
               </div>
            </div>
            <br/>
             <div style={{marginLeft:"100px"}}>
            <Button  value="Update" cssClass="btn btn-primary" ></Button>
            </div>
            <br/>

         </form>
         </div>
         </div>
      </div>
   );
};
export default Profile;