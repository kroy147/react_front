import React from 'react';

const SearchBar =()=>{
   return(
     <div>
        <form action="/" method="get">
        <input type="text"  name="name" placeholder="Search for Books"  size="60" style={{marginLeft:"140px"}}/>
        </form>
     </div>
   );   
};
export default SearchBar;