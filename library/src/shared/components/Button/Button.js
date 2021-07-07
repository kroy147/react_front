import React from 'react';

const Button=({value,cssClass, onClick,dataBsToggle,dataBsTarget})=>{
    return(
       <div>
           <button onClick={onClick} type="submit" style={{marginLeft:"20px"}} class={cssClass} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget}>{value}</button>
       </div>
    );
}

export default Button;