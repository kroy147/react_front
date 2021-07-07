import React from 'react';
import Button from '../Button/Button';

const BookInfo = ({ isAuth }) => {
    return (
        <div className="book-container">
            {/* <div>
              <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80" alt="book" width="200" height="75"></img> 
           </div>
           <div className="text-prop">
               Book 1
           </div>
           <div className="text-prop">
               Author
           </div>
           <div>
               {isAuth && <Button value="Select" cssClass="button-2"/>}
           </div> */}
            <div class="card" style={{width:"18rem"}}>
                <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80" class="card-img-top" alt="book" />
                <div class="card-body">
                    <h5 class="card-title">Book 1</h5>
                    <p class="card-text">Author</p>
                { isAuth && <a href="#" class="btn btn-primary">Select</a>}
                </div>
            </div>
        </div>
    );
}

export default BookInfo;