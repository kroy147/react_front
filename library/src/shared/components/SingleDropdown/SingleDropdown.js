import React from 'react';
import { NavLink } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';

const SingleDropdown = () => {
    let logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div class="dropdown " style={{ marginRight: "90px" }}>
            <PersonIcon class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"blue"}}>

            </PersonIcon>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="item"><a class="dropdown-item" href="http://localhost:3000/profile">View Profile</a></li>
                <li className="item"><a class="dropdown-item" href="http://localhost:3000/orderhistory">Order History</a></li>
                <li className="item"><hr class="dropdown-divider" /></li>
                <li className="item"><a class="dropdown-item" onClick={logout}>Logout</a></li>
            </ul>
        </div>
        // <div>
        //     <div>
        //     <div class="dropdown">
        //         <button class="buttons dropdown-toggle btn btn-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        //             Menu
        //         </button>
        //         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        //             <li><a class="dropdown-item" href="#">View Profile</a></li>
        //             <li><a class="dropdown-item" href="#">Order History</a></li>
        //             <li><a class="dropdown-item" href="#">Logout</a></li>
        //         </ul>
        //     </div>
        // </div>

        // </div>
    );
};

export default SingleDropdown;