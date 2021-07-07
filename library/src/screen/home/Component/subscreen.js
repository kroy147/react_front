import React from 'react';
import BookInfo from '../../../shared/components/BookInfo';
const Subscreen=({data,bookinfo,onSubmitHandler,hflag})=>{
    console.log(bookinfo);
     const bookinfoList = bookinfo.map(bookinfo=>{
       return(
        
        <div className="col-lg-4"   > 
        
         <div className="card" style={{borderRadius:"20px",height:"100%",marginLeft:"30px",width:"220px"}}>
        <img src= {bookinfo.bookCover} className="card-img-top" alt="book" height="200px" width="50px" style={{objectFit:"fill"}}  />
        <div className="card-body" style={{marginLeft:"-25px"}}>
            <div  className="card-text" style={{marginLeft:"20px"}}> <b>Book Name:</b> {bookinfo.bookName}</div>
            <div className="card-text" style={{marginLeft:"20px"}}><b>Author:</b> {bookinfo.authorName}</div>
            <div className="card-text" style={{marginLeft:"20px"}}><b>Stock Available : </b>{bookinfo.available}</div>
            <div className="card-text" style={{marginLeft:"20px"}}> <b>Rent :</b> Rs 2/day </div>
            <br/> 
        </div>
        {  hflag!==bookinfo.id &&  <a   onClick={()=>onSubmitHandler(bookinfo.id)}  className="btn btn-primary">Add to cart</a>}
        {/* {<a   onClick={()=>onSubmitHandler(bookinfo.id)}  className="btn btn-primary">Add to cart</a>} */} 
    </div></div>
       );
       }) 
       
    return(
       <div className="sub-screen container2" >
           <div className="row container3" style={{height:"100%"}}>
            {bookinfoList} 
         </div>
           
       </div>
    );
}

export default Subscreen;