import React from 'react';

const SearchBar =()=>{
   return(
     <div>
        {/* <form action="/" method="get">
        <input type="text"  name="name" placeholder="Search for Books"  size="60" style={{marginLeft:"140px"}}/>
        </form> */}
        <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
     </div>
   );   
};
export default SearchBar;