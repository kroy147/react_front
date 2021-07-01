import React from 'react';
import Button from '../../../shared/components/Button/Button';

const Checkout=()=>{
    return(
       <div>
           <div> <h3>Book1</h3> </div>
           <div><h3>Book2</h3></div>
           <br/>
           <div><Button value="Issue"/></div>
       </div>
    );
}
export default Checkout;