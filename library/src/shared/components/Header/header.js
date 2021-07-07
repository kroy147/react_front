import React from 'react';
import Button from '../Button/Button';
import SearchBar from '../Searchbar/searchbar';
import SingleDropdown from "../SingleDropdown/index";
import { NavLink } from "react-router-dom";
//import PersonIcon from '@material-ui/icons/Person';
const Header = () => {

    return (
        <div className="container3">
            <nav class="navbar navbar-expand-lg navbar navbar-light" style={{ backgroundColor: "#7952b3",width:"100%",zIndex:"999",marginTop:"-10px"}}>
                <div class="container-fluid" style={{ height: "73px" }}>
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <div className="text-prop" style={{marginLeft:"17px",fontSize:"22px",color:'white'}}>READNOW</div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* {localStorage.getItem("isAuth") &&
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "30%", width: "40%" }}>
                            <li class="nav-item" style={{ width: "100%" }}>
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-primary" type="submit">Search</button>
                                </form>
                            </li>
                        </ul>
                    </div>} */}

                    <div  style={{marginLeft:"50%",flexDirection:"row",display:"flex"}}>

                    {!localStorage.getItem("isAuth") && 
                        <NavLink to="/login">
                            <Button value="Login" cssClass="btn btn-primary" />
                        </NavLink>}
                        
                        {!localStorage.getItem("isAuth") &&
                        <NavLink to="/register">
                            <Button value="Sign-Up" cssClass="btn btn-primary" />
                        </NavLink>}
                        </div>
                    {localStorage.getItem("isAuth") && <a href="http://localhost:3000/checkout"><button type="button"  style={{ marginLeft: "300px" }} class="btn btn-primary">Cart({localStorage.getItem("cartvalue")})</button></a>} 
                    {localStorage.getItem("isAuth") && <SingleDropdown />}
                </div>
            </nav>
        </div>

    );

}
export default Header;