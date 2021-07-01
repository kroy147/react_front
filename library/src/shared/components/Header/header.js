import React from 'react';
import Button from '../Button/Button';
import SearchBar from '../Searchbar/searchbar';

const Header=()=>{
    return(
       <div className="header">
           <div className="logo">
               <p>READNOW</p>
           </div>

           <div className="header-searchbar">
               <SearchBar/>
               
           </div>

           <div className="header-buttons">
           <Button value="Login"/>
           </div>

       </div>
    );

}
export default Header;