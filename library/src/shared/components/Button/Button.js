import React from 'react';

const Button=({value,type})=>{
    return(
       <div>
           <button type={type} class="btn btn-primary btn-md">{value}</button>
       </div>
    );
    
}

export default Button;