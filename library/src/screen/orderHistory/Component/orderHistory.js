
import React from 'react';
import Button from '../../../shared/components/Button/Button';

const OrderHistory=()=>{
    return(
       <div>
           <div>
               <span>BookId1</span> <span>Book Name</span> <span><Button value="Return"/></span>
           </div>
           <br/>
           <div>
               <span>BookId2</span> <span>Book Name</span> <span><Button value="Return"/></span>
           </div>
       </div>
    );
}
export default OrderHistory;