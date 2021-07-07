import React from 'react';
import Button from '../../../shared/components/Button/Button';
import Navbar from '../../../shared/components/NavBar/navbar';

const Checkout = ({ data, bookinfo, onSubmitHandler,num }) => {

  console.log(bookinfo);
  const bookinfoList = bookinfo.map(bookinfo => {
    return (
      <div className="col" style={{ marginTop: "20px" }}>
        <div className="card">
          <div className="card-body">
           <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between'}}> <p>{bookinfo.bookName}</p> <p> Rent: Rs 2/day </p> </div>
          </div>
        </div>
      </div>
    );
  })

  return (
    <div>
      {bookinfoList}
      <br /> <br /> <br />
     
<button onClick={onSubmitHandler} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{marginLeft:"300px"}}>
  Issue 
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirmation Message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Order is confirmed. Order ID is {num}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      <div><Navbar /></div>
    </div>
  );
}
export default Checkout;