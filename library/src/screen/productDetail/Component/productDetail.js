import React from 'react';
import Button from '../../../shared/components/Button/Button';
import Navbar from '../../../shared/components/NavBar/navbar';

const ProductDetail=({isAuth,state})=>{
     return(
        <div className="book-detail">
           {/* <div>
              <img src={state.bookCover} alt="book" width="200" height="75"></img> 
           </div>
           <div className="text-prop">
               <h4>{state.bookName}</h4>
           </div>
           <div className="text-prop">
               <h4>{state.authorName}</h4>
           </div>
           <div className="text-prop"> Stock left </div>
           <div>{state.available}</div>
           <div>{isAuth && <Button value="Select"/>}</div> */}
           <div class="card" style={{width:"18rem"}}>
                <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80" class="card-img-top" alt="book" height="200px" width="300px" />
                <div class="card-body">
                    <h5 class="card-title">Book 1</h5>
                    <p class="card-text">Author</p>
                    <p class="card-text"><span>Stock Left</span> <span>2</span> </p>
                { isAuth && <a href="#" class="btn btn-primary">Select</a>}
                </div>
            </div>
           <div><Navbar/></div>
       </div>
     );
};
export default ProductDetail;