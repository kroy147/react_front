import React from 'react';
import BookInfo from '../../../shared/components/BookInfo/bookInfo';
const Subscreen=()=>{
    return(

       <div className="sub-screen container2" >
           <div className="row container3">
           <div class="col"> <BookInfo/></div>
           <div class="col"> <BookInfo/></div>
           <div class="col"> <BookInfo/></div>
           <div class="col"> <BookInfo/></div>
         </div>
           
       </div>
    );
}

export default Subscreen;