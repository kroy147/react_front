import React from 'react';
import Button from '../../../shared/components/Button/Button';

const ProductDetail=()=>{
     return(
        <div className="book-detail">
           <div>
              <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80" alt="book" width="200" height="75"></img> 
           </div>
           <div>
               <h4>Book 1</h4>
           </div>
           <div>
               <h4>Author</h4>
           </div>
           <div> Stock left </div>
           <div>2</div>
           <div><Button value="Select"/></div>
       </div>
     );
};
export default ProductDetail;