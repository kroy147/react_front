
import React from 'react';
import Button from '../../../shared/components/Button';


const OrderHistory = ({ data, bookinfo, onSubmitHandler, rent,bflag }) => {
    let temp = (bookinfo.viewOrderList || []).map((item) => {
        return (
            <div className="row">
                <div className="col" style={{ marginTop: "20px" }}>
                    <div className="card">
                        <div className="card-body">
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}> <p>{item.bookName}</p> <p> {item.issueDate} </p>
                           {bflag!==item.bookId &&  <Button value="Return" onClick={() => onSubmitHandler(item.bookId)} cssClass="btn btn-primary" dataBsToggle="modal" dataBsTarget="#exampleModal" />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <>
            <div className="row" style={{marginLeft:"10px"}}>
                <div className="col">
                    Book Title
                </div>
                <div className="col">
                    Issue Date
                </div>
                <div className="col">

                </div>
            </div>

            {temp}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Confirmation Message</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Book is returned. Rent is Rs.{rent}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OrderHistory;